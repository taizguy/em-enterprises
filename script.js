const scroll = new LocomotiveScroll({
  el: document.querySelector('#main1'),
  smooth: true,
});

Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});