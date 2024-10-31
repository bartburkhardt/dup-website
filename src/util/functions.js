export function scrollAnimationOnPosition(
  scrollPosition, // window.scrollY, current scroll position
  animationRef, // useRef variable of the Lottie animation
  containerName, // name of div/container where Lottie animation is in
  maxFrames, // see "op" value in JSON
  offsetBeforeStart, // amount of pixels the animation should start before reaching the top of the container
  offsetBeforeStop // amount of pixels the animation should stop before reaching the bottom of the container
) {
  const animationContainer = document.getElementsByClassName(containerName)[0];

  if (!animationContainer) {
    return;
  }
  
  // do not continue this function after bottom of container is reached
  if (scrollPosition > animationContainer.offsetTop + animationContainer.offsetHeight) {
    return;
  }
  
  // make sure user sees begin state of animation above offset  
  if (scrollPosition < animationContainer.offsetTop - offsetBeforeStart) {
    animationRef.current.goToAndStop(0, true);
    return;
  }

  const diff = animationContainer.offsetHeight + offsetBeforeStart - offsetBeforeStop;
  const pos = scrollPosition - animationContainer.offsetTop + offsetBeforeStart;
  const frame = (pos / diff) * 100;
  
  // pause the animation if max amount of frames is reached
  if (frame > maxFrames) {
    animationRef.current.goToAndStop(maxFrames - 0.00001, true);
    animationRef.current.pause();
    return;
  }

  animationRef.current.goToAndStop(frame, true);
}