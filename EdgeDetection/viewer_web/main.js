// Modified by Harsh - Simplified copy

let lastTime = performance.now();
let frameCount = 0;
let fps = 0;

const stats = document.getElementById("stats");
const frame = document.getElementById("frame");

// Update FPS and image resolution
function updateStats() {
  const now = performance.now();
  frameCount++;

  // Calculate FPS every second
  if (now - lastTime >= 1000) {
    fps = frameCount;
    frameCount = 0;
    lastTime = now;
  }

  // Get image resolution
  const width = frame.naturalWidth || 0;
  const height = frame.naturalHeight || 0;

  stats.textContent = `FPS: ${fps} | Resolution: ${width}x${height}`;

  requestAnimationFrame(updateStats);
}

// Simulate periodic frame refresh
function simulateFrameUpdate() {
  frame.style.opacity = "0.95";
  setTimeout(() => {
    frame.style.opacity = "1";
  }, 80);
  requestAnimationFrame(simulateFrameUpdate);
}

// Initialize once image is loaded
window.addEventListener("load", () => {
  updateStats();
  simulateFrameUpdate();
});
