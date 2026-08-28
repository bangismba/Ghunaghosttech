import { useState, useEffect, useRef } from 'react';
import { getAllProjects, addProject, updateProject, deleteProject } from '@lib/firebase/projects';
import { uploadLocalImage, deleteLocalImage, getImageUrl } from '@lib/local/imageUpload';
import { Project } from '@types';
import { Save, X, Edit, Trash2, Plus, Upload, ImageIcon } from 'lucide-react';

export default function ProjectsManager() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState<Omit<Project, 'id' | 'createdAt' | 'updatedAt'>>({
    title: '',
    description: '',
    tech: [],
    link: '',
    image: '',
    category: '',
    order: 0,
    status: 'published',
    featured: false
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getAllProjects();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setImageFile(file);

    try {
      // Create preview
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);

      // Process image for upload
      const result = await uploadLocalImage(file);
      
      if (result.success) {
        setFormData({ ...formData, image: result.url });
        console.log('✅ Image prepared:', result.filename);
      } else {
        alert(result.error || 'Failed to process image');
      }
    } catch (error) {
      console.error('Error processing image:', error);
      alert('Failed to process image');
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleRemoveImage = () => {
    if (!formData.image) return;
    
    if (confirm('Remove this image?')) {
      setFormData({ ...formData, image: '' });
      setImagePreview(null);
      setImageFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (uploading) {
      alert('Please wait for image processing to complete');
      return;
    }

    try {
      // If editing and image was removed, delete old image from storage
      if (editingId) {
        const oldProject = projects.find(p => p.id === editingId);
        if (oldProject && oldProject.image && !formData.image) {
          await deleteLocalImage(oldProject.image);
        }
      }

      const projectToSave = {
        ...formData,
        status: formData.status || 'published'
      };

      if (editingId) {
        await updateProject(editingId, projectToSave);
        console.log('✅ Project updated');
      } else {
        await addProject(projectToSave);
        console.log('✅ Project added');
      }

      await fetchProjects();
      resetForm();
      setShowForm(false);
    } catch (error) {
      console.error('Error saving project:', error);
      alert('Failed to save project');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this project permanently?')) return;

    try {
      // Get project to delete its image
      const project = projects.find(p => p.id === id);
      if (project?.image) {
        await deleteLocalImage(project.image);
      }
      
      await deleteProject(id);
      await fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
      alert('Failed to delete project');
    }
  };

  const handleEdit = (project: Project) => {
    setEditingId(project.id);
    setFormData({
      title: project.title,
      description: project.description,
      tech: project.tech || [],
      link: project.link || '',
      image: project.image || '',
      category: project.category || '',
      order: project.order || 0,
      status: project.status || 'published',
      featured: project.featured || false
    });
    setImagePreview(project.image || null);
    setShowForm(true);
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({
      title: '',
      description: '',
      tech: [],
      link: '',
      image: '',
      category: '',
      order: 0,
      status: 'published',
      featured: false
    });
    setImagePreview(null);
    setImageFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleTechChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      tech: value.split(',').map(t => t.trim().toUpperCase()).filter(Boolean)
    });
  };

  if (loading) {
    return <div className="text-zinc-500 font-mono text-sm animate-pulse">Loading projects...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-medium tracking-tight">Manage Projects</h2>
          <span className="font-mono text-sm text-zinc-500">
            {projects.length} projects total
          </span>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 border border-white/30 px-6 py-3 font-mono text-sm hover:bg-white hover:text-black transition"
        >
          <Plus className="h-4 w-4" />
          {showForm ? 'Cancel' : 'Add Project'}
        </button>
      </div>

      {showForm && (
        <div className="border border-white/10 p-6 mb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Image Upload Section */}
            <div className="border border-white/10 p-4">
              <label className="font-mono text-xs uppercase tracking-wider text-zinc-600 block mb-2">
                Project Image
              </label>
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageSelect}
                    accept="image/jpeg,image/png,image/webp,image/gif"
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className={`flex items-center gap-2 border border-white/10 px-4 py-3 font-mono text-sm text-zinc-400 cursor-pointer hover:border-white/30 transition ${
                      uploading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    <Upload className="h-4 w-4" />
                    {uploading ? 'Processing...' : 'Choose Image'}
                  </label>
                  <p className="text-[10px] text-zinc-600 mt-1">JPEG, PNG, WebP, GIF (max 5MB)</p>
                  <p className="text-[10px] text-zinc-600 mt-1">Images will be stored locally in public/projects/</p>
                </div>
                {imagePreview && (
                  <div className="relative w-24 h-24 flex-shrink-0 border border-white/10 overflow-hidden group">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                    >
                      <X className="h-5 w-5 text-white" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Form Fields - Same as before */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Project Title"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="bg-transparent border border-white/10 px-4 py-3 font-mono text-sm text-white placeholder-zinc-600 focus:border-white/30 outline-none"
                required
              />
              <input
                type="text"
                placeholder="Category (e.g., E-COMMERCE)"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="bg-transparent border border-white/10 px-4 py-3 font-mono text-sm text-white placeholder-zinc-600 focus:border-white/30 outline-none"
                required
              />
            </div>

            <textarea
              placeholder="Project Description"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              rows={3}
              className="w-full bg-transparent border border-white/10 px-4 py-3 font-mono text-sm text-white placeholder-zinc-600 focus:border-white/30 outline-none resize-y"
              required
            />

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Tech Stack (comma separated)"
                value={formData.tech.join(', ')}
                onChange={handleTechChange}
                className="bg-transparent border border-white/10 px-4 py-3 font-mono text-sm text-white placeholder-zinc-600 focus:border-white/30 outline-none"
              />
              <input
                type="text"
                placeholder="Project URL"
                value={formData.link}
                onChange={(e) => setFormData({...formData, link: e.target.value})}
                className="bg-transparent border border-white/10 px-4 py-3 font-mono text-sm text-white placeholder-zinc-600 focus:border-white/30 outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Order"
                value={formData.order}
                onChange={(e) => setFormData({...formData, order: parseInt(e.target.value) || 0})}
                className="bg-transparent border border-white/10 px-4 py-3 font-mono text-sm text-white placeholder-zinc-600 focus:border-white/30 outline-none"
              />
              <select
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value as any})}
                className="bg-transparent border border-white/10 px-4 py-3 font-mono text-sm text-white focus:border-white/30 outline-none"
              >
                <option value="published">Published ✅</option>
                <option value="draft">Draft 📝</option>
                <option value="archived">Archived 📦</option>
              </select>
            </div>

            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 font-mono text-sm text-zinc-400">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                  className="accent-white"
                />
                Featured Project
              </label>
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={uploading}
                className="flex items-center gap-2 border border-white/30 px-6 py-3 font-mono text-sm hover:bg-white hover:text-black transition disabled:opacity-50"
              >
                <Save className="h-4 w-4" />
                {uploading ? 'Processing...' : editingId ? 'Update Project' : 'Add Project'}
              </button>
              <button
                type="button"
                onClick={() => { resetForm(); setShowForm(false); }}
                className="flex items-center gap-2 border border-white/10 px-6 py-3 font-mono text-sm text-zinc-500 hover:text-white hover:border-white/30 transition"
              >
                <X className="h-4 w-4" />
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Projects List - Same as before */}
      <div className="border border-white/10 divide-y divide-white/10">
        {projects.map((project, index) => (
          <div key={project.id} className="flex items-center justify-between p-4 hover:bg-white/5 transition">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <span className="font-mono text-xs text-zinc-600">
                {String(index + 1).padStart(2, '0')}
              </span>
              {project.image && (
                <div className="w-12 h-12 flex-shrink-0 border border-white/10 overflow-hidden bg-white/5">
                  <img
                    src={project.image.startsWith('http') ? project.image : `/projects/${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '';
                      e.currentTarget.parentElement?.classList.add('bg-white/5');
                      e.currentTarget.parentElement!.innerHTML = '<span class="text-zinc-600 text-xs">No image</span>';
                    }}
                  />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <h4 className="font-mono text-sm truncate">{project.title}</h4>
                <div className="flex items-center gap-3 flex-wrap mt-1">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    {project.category || 'Uncategorized'}
                  </span>
                  <span className={`font-mono text-[8px] uppercase tracking-wider px-2 py-0.5 border ${
                    project.status === 'published' ? 'border-emerald-500/30 text-emerald-400' :
                    project.status === 'draft' ? 'border-yellow-500/30 text-yellow-400' :
                    'border-zinc-500/30 text-zinc-500'
                  }`}>
                    {project.status || 'draft'}
                  </span>
                  {project.featured && (
                    <span className="font-mono text-[8px] uppercase tracking-wider border border-white/10 px-2 py-0.5 text-zinc-400">
                      ★ Featured
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex gap-2 ml-4 flex-shrink-0">
              <button
                onClick={() => handleEdit(project)}
                className="p-2 text-zinc-500 hover:text-white transition"
                title="Edit"
              >
                <Edit className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleDelete(project.id)}
                className="p-2 text-zinc-500 hover:text-red-400 transition"
                title="Delete"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
        {projects.length === 0 && (
          <div className="p-8 text-center text-zinc-500 font-mono text-sm">
            No projects yet. Add your first project above.
          </div>
        )}
      </div>
    </div>
  );
}