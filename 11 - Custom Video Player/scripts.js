const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const toggle = document.querySelector(".toggle");
const ranges = document.querySelectorAll(".player__slider");
const skipBtns = document.querySelectorAll(".skip");

function toggleHandler() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}
function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  // console.log(icon);
  toggle.textContent = icon;
}
function skipHandler() {
  // console.log(this.dataset.skip * 1);
  video.currentTime += parseFloat(this.dataset.skip); // 轉數值parseFloat
}
function rangeUpdateHandler() {
  video[this.name] = this.value;
  // console.log(this.value);
  // console.log(this.name);
}
function progressHandler() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}
function scrubHandler(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
// 開始暫停控制
video.addEventListener('click', toggleHandler);
toggle.addEventListener('click', toggleHandler);
// 被上面觸發的開始暫停
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

// 進度條
video.addEventListener('timeupdate', progressHandler);

// 畫面控制
skipBtns.forEach(btn => btn.addEventListener("click", skipHandler));
ranges.forEach(range => range.addEventListener("change", rangeUpdateHandler));
ranges.forEach(range => range.addEventListener("mousemove", rangeUpdateHandler));

// 進度條控制
let mousedown = false;
progress.addEventListener('click', scrubHandler);
progress.addEventListener('mousemove', (e) => mousedown && scrubHandler(e)); // && 等於兩個 T 才回傳，所以第一個是 F 就不會觸發
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);