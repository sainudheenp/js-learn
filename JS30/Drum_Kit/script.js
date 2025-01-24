let keyCodes = [65, 83, 68, 70, 71, 72, 74, 75, 76];
const audios = document.querySelectorAll("audio");

const sounds = document.addEventListener("keydown", (e) => {
  stopall();
  if (keyCodes.includes(e.keyCode)) {
    console.log("yees");
    const items = document.querySelectorAll(`[data-key="${e.keyCode}"`);
    console.log(items);
    items[0].parentElement.classList.add("active");
    items[1].play();

    setTimeout(() => {
      items[0].parentElement.classList.remove("active");
    }, 100);
  }
});

function stopall() {
  audios.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
}
