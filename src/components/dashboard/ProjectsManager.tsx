import { useState, useEffect } from 'react';
import { getAllProjects, addProject, updateProject, deleteProject } from '@lib/firebase/projects';
import { getImageOptions, selectImage, getImagePreview } from '@lib/local/imageUpload';
import { Project } from '@types';
import { Save, X, Edit, Trash2, Plus, Image as ImageIcon, ChevronDown } from 'lucide-react';

export default function ProjectsManager() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [imageOptions, setImageOptions] = useState<{ value: string; label: string; url: string }[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loadingImages, setLoadingImages] = useState(false);
  
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

  // Load projects and images on mount
  useEffect(() => {
    fetchProjects();
    loadImageOptions();
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

  const loadImageOptions = async () => {
    setLoadingImages(true);
    try {
      const options = await getImageOptions();
      setImageOptions(options);
      console.log('📸 Loaded image options:', options.length);
    } catch (error) {
      console.error('Error loading image options:', error);
    } finally {
      setLoadingImages(false);
    }
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filename = e.target.value;
    setFormData({ ...formData, image: filename });
    
    if (filename) {
      const preview = getImagePreview(filename);
      setImagePreview(preview);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
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
    
    if (project.image) {
      setImagePreview(getImagePreview(project.image));
    } else {
      setImagePreview(null);
    }
    
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
            {/* Image Selection Section */}
            <div className="border border-white/10 p-4">
              <label className="font-mono text-xs uppercase tracking-wider text-zinc-600 block mb-2">
                Project Image
              </label>
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <select
                      value={formData.image}
                      onChange={handleImageSelect}
                      className="w-full bg-transparent border border-white/10 px-4 py-3 font-mono text-sm text-white appearance-none focus:border-white/30 outline-none pr-10"
                      disabled={loadingImages}
                    >
                      <option value="">Select an image...</option>
                      {imageOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500 pointer-events-none" />
                  </div>
                  <p className="text-[10px] text-zinc-600 mt-1">
                    Images stored in public/projects/ folder
                  </p>
                  <p className="text-[10px] text-zinc-600">
                    {imageOptions.length} images available
                  </p>
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
                      onClick={() => {
                        setFormData({ ...formData, image: '' });
                        setImagePreview(null);
                      }}
                      className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                    >
                      <X className="h-5 w-5 text-white" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Form Fields */}
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
                className="flex items-center gap-2 border border-white/30 px-6 py-3 font-mono text-sm hover:bg-white hover:text-black transition"
              >
                <Save className="h-4 w-4" />
                {editingId ? 'Update Project' : 'Add Project'}
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

      {/* Projects List */}
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
                    src={`/projects/${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '';
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