/**
 * Convert a File to a base64 string
 * @param {File} file
 * @return {string}
 */

export default function ConvertBase64({ file }) {
  if (!(file instanceof File) && !(file instanceof Blob)) return;
  console.dir(file);
  console.log(JSON.stringify(file));
  const reader = new FileReader();
  let resolve = null;
  let reject = null;
  reader.readAsDataURL(file, 1);
  reader.onload = function onReaderLoad() {
    resolve(reader.result);
  };
  reader.onerror = function onReaderError(error) {
    reject(error);
  };
  return new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
}
