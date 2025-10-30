// utils/imageUtils.js
export const getFullImageUrl = (imagePath) => {
  if (!imagePath) return '';
  
  // If it's already a full URL, return as is
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  // If it starts with /, prepend the backend URL
  if (imagePath.startsWith('/')) {import.meta.env.VITE_API_BASE_URL
    const baseUrl =  || 'https://achyutab.onrender.com/';
    return `${baseUrl}${imagePath}`;
  }
  
  // If it's a local file path, try to extract filename and construct URL
  if (imagePath.includes('freelance')) {
    const filename = imagePath.split('/').pop() || imagePath.split('\\').pop();
    const baseUrl = import.meta.env.VITE_API_BASE_URL || 'https://achyutab.onrender.com/';
    return `${baseUrl}/uploads/freelance/${filename}`;
  }
  
  // Default case
  const baseUrl = import.meta.env.VITE_API_BASE_URL || 'https://achyutab.onrender.com/';
  return `${baseUrl}/uploads/freelance/${imagePath}`;
};