// Buat cache untuk menyimpan status gambar yang gagal
const failedImageCache = new Set<string>();

// Fungsi debounce
const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

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
export const handleImageError = debounce((url: string, imgElement: HTMLImageElement) => {
  // Tambahkan URL yang gagal ke cache
  failedImageCache.add(url);
  imgElement.src = '/images/placeholder.jpg';
}, 500); 