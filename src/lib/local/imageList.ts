export interface ImageFile {
  name: string;
  path: string;
  url: string;
  size?: number;
  lastModified?: number;
}

// Get all images from the projects folder
export const getAvailableImages = async (): Promise<ImageFile[]> => {
  try {
    // Update this list when you add new images to public/projects/
    const imageList: ImageFile[] = [
      { name: 'ummita.png', path: '/projects/ummita.png', url: '/projects/ummita.png' },
      { name: 'logo1.png', path: '/projects/logo1.png', url: '/projects/logo1.png' },
      { name: 'logo2.png', path: '/projects/logo2.png', url: '/projects/logo2.png' },
      { name: 'logo3.png', path: '/projects/logo3.png', url: '/projects/logo3.png' },
      // Add your project images here
      { name: 'afrah.png', path: '/projects/afrah.png', url: '/projects/afrah.png' },
      { name: 'tradeconnect.png', path: '/projects/tradeconnect.png', url: '/projects/tradeconnect.png' },
      { name: 'aayari.png', path: '/projects/aayari.png', url: '/projects/aayari.png' },
      { name: 'endoexo.png', path: '/projects/endoexo.png', url: '/projects/endoexo.png' },
      { name: 'orphans.png', path: '/projects/orphans.png', url: '/projects/orphans.png' },
    ];
    
    return imageList;
  } catch (error) {
    console.error('Error getting images:', error);
    return [];
  }
};

// Check if an image exists
export const imageExists = async (filename: string): Promise<boolean> => {
  try {
    const images = await getAvailableImages();
    return images.some(img => img.name === filename);
  } catch (error) {
    console.error('Error checking image:', error);
    return false;
  }
};

// Get image URL for a filename
export const getImageUrl = (filename: string): string => {
  if (!filename) return '';
  if (filename.startsWith('http')) return filename;
  return `/projects/${filename}`;
};

// Validate image format
export const isValidImageFormat = (filename: string): boolean => {
  const validExtensions = ['.png', '.jpg', '.jpeg', '.webp'];
  const ext = filename.toLowerCase().substring(filename.lastIndexOf('.'));
  return validExtensions.includes(ext);
};