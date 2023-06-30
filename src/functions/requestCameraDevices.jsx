const requestCameraDevices = () => {
  if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
    return;
  }
  navigator.mediaDevices
    .enumerateDevices()
    .then(function (devices) {
      devices.forEach(function (device) {});
    })
    .catch(function (err) {});
};

export default requestCameraDevices;
