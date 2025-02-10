// Buat cache untuk menyimpan status gambar yang gagal
const failedImageCache = new Set<string>();

// Definisikan tipe yang lebih spesifik untuk fungsi debounce
type DebouncedImageErrorHandler = (url: string, imgElement: HTMLImageElement) => void;

// Definisikan tipe untuk parameter fungsi
type DebouncedFunction = (...args: [string, HTMLImageElement]) => void;

function debounce(
  func: DebouncedFunction,
  wait: number
): DebouncedFunction {
  let timeout: NodeJS.Timeout;
  return (...args: [string, HTMLImageElement]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export const getValidImageUrl = (url: string | undefined): string => {
  // Jika URL sudah ada di cache failed images, langsung return default
  if (!url || failedImageCache.has(url)) {
    return '/images/placeholder.jpg';
  }

  if (url.startsWith('//')) {
    return `https:${url}`;
  }

  if (!url.startsWith('http')) {
    return `https://${url}`;
  }

  return url;
};

// Fungsi untuk menangani error gambar dengan debounce
export const handleImageError: DebouncedImageErrorHandler = debounce((url: string, imgElement: HTMLImageElement) => {
  // Tambahkan URL yang gagal ke cache
  failedImageCache.add(url);
  imgElement.src = '/images/placeholder.jpg';
}, 500); 