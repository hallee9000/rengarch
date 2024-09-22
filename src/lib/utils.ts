export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result && typeof reader.result === 'string' ? reader.result.split(',')[1] : '';
      resolve(base64String);
    };
    reader.onerror = error => reject(error);
  });
}

export function pathToUrl(path: string) {
  return `https://raw.githubusercontent.com/hallee9000/rengarch/test/${path}`
}
