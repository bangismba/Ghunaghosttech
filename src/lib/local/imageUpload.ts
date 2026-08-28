import { getAvailableImages, getImageUrl, isValidImageFormat } from './imageList';

export interface ImageResult {
  success: boolean;
  filename: string;
  url: string;
  error?: string;
}

// Get list of available images for dropdown
export const getImageOptions = async () => {
  const images = await getAvailableImages();
  return images.map(img => ({
    value: img.name,
    label: img.name,
    url: img.url
  }));
};

// Validate and prepare image selection
export const selectImage = async (filename: string): Promise<ImageResult> => {
  try {
    if (!filename) {
      return {
        success: false,
        filename: '',
        url: '',
        error: 'No image selected'
      };
    }

    // Check if format is valid
    if (!isValidImageFormat(filename)) {
      return {
        success: false,
        filename: '',
        url: '',
        error: 'Invalid image format. Use PNG, JPG, JPEG, or WebP'
      };
    }

    // Check if image exists
    const images = await getAvailableImages();
    const found = images.find(img => img.name === filename);
    
    if (!found) {
      return {
        success: false,
        filename: '',
        url: '',
        error: `Image "${filename}" not found in projects folder`
      };
    }

    return {
      success: true,
      filename: filename,
      url: getImageUrl(filename)
    };
  } catch (error) {
    console.error('Error selecting image:', error);
    return {
      success: false,
      filename: '',
      url: '',
      error: 'Failed to select image'
    };
  }
};

// Get preview URL for an image
export const getImagePreview = (filename: string): string => {
  if (!filename) return '';
  return getImageUrl(filename);
};