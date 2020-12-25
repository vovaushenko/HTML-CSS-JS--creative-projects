const videoElement = document.querySelector('#video');
const button = document.querySelector('#button');

// Prompt user to select media stream, pass to video element

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {}
}

button.addEventListener('click', async () => {
  // Disable Button
  button.disabled = true;
  // Start picture in picture
  await videoElement.requestPictureInPicture();
  // Reset Btn
  button.disabled = false;
});

selectMediaStream();

//  https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture
// https://css-tricks.com/an-introduction-to-the-picture-in-picture-web-api/
