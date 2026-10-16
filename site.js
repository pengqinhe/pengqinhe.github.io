// Keep playback intentional and avoid several demos playing at once.
const demos = [...document.querySelectorAll('video')];
for (const video of demos) {
  video.addEventListener('play', () => {
    for (const other of demos) if (other !== video) other.pause();
  });
}
document.addEventListener('visibilitychange', () => {
  if (document.hidden) demos.forEach(video => video.pause());
});
