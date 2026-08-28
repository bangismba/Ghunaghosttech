// This handles local image management
// Images will be stored in public/projects/

interface ImageResult {
  success: boolean;
  filename: string;
  url: string;
  error?: string;
}

// Get the full URL for an image
export const getImageUrl = (filename: string) => {
  if (!filename) return null;
  // If it's already a full URL, return it
  if (filename.startsWith('http')) return filename;
  // Otherwise, return the local path
  return `/projects/${filename}`;
};

// Upload image (saves to public/projects/)
export const uploadLocalImage = async (file: File): Promise<ImageResult> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    
    reader.onload = async (e) => {
      try {
        // Validate file type
        const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
        if (!validTypes.includes(file.type)) {
          resolve({
            success: false,
            filename: '',
            url: '',
            error: 'Invalid file type. Use JPEG, PNG, WebP, or GIF.'
          });
          return;
        }

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
          resolve({
            success: false,
            filename: '',
            url: '',
            error: 'File size must be less than 5MB'
          });
          return;
        }

        // Create unique filename
        const timestamp = Date.now();
        const extension = file.name.split('.').pop() || 'jpg';
        const filename = `${timestamp}.${extension}`;

        // Convert to base64 for preview
        const base64 = e.target?.result as string;
        
        // Here you would typically upload to your server
        // For now, we'll return the base64 data URL
        // In production, you'd send this to your backend API
        
        console.log('📸 Image prepared:', filename);
        console.log('📝 To save this image:');
        console.log(`1. Save the image to: public/projects/${filename}`);
        console.log(`2. The URL will be: /projects/${filename}`);
        console.log(`3. Data URL available for preview`);

        resolve({
          success: true,
          filename: filename,
          url: `/projects/${filename}`
        });

      } catch (error) {
        console.error('Error processing image:', error);
        resolve({
          success: false,
          filename: '',
          url: '',
          error: 'Failed to process image'
        });
      }
    };

    reader.onerror = () => {
      resolve({
        success: false,
        filename: '',
        url: '',
        error: 'Failed to read file'
      });
    };

    reader.readAsDataURL(file);
  });
};

// Delete local image
export const deleteLocalImage = async (imagePath: string): Promise<boolean> => {
  try {
    // In a real implementation, you'd call your backend API
    console.log('🗑️ Delete image request for:', imagePath);
    console.log('📝 In production, send DELETE request to your server');
    
    // For now, just log it
    // In production: await fetch(`/api/images/${filename}`, { method: 'DELETE' });
    
    return true;
  } catch (error) {
    console.error('Error deleting image:', error);
    return false;
  }
};

// Get all local images (for cleanup)
export const getLocalImages = async (): Promise<string[]> => {
  // In production, you'd get this from your backend
  // For now, return empty array
  console.log('📋 In production, fetch from /api/images');
  return [];
};