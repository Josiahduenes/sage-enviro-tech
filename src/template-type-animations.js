// These are the templated text animations to be able to use on any page
window.addEventListener("DOMContentLoaded", (event) => {
    // Split text into spans
    let typeSplit = new SplitType("[text-split]", {
      types: "words, chars",
      tagName: "span"
    });
  
    console.log("Text animations loaded");
  
    // hero animation for words entering in. this will play automatically upon loading in.
    // use for elements that are visible on page load.
    $("[words-slide-up-hero]").each(function (index) {
      let tl = gsap.timeline({ paused: false });
      tl.from($(this).find(".word"), {
        opacity: 0,
        yPercent: 100,
        duration: 0.5,
        ease: "power3.out",
        stagger: { amount: 0.5 }
      });
    });
  
    //scrolltrigger code
    function createScrollTrigger(triggerElement, timeline) {
      // enter trigger. plays on enter of viewport
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top 60%",
        onEnter: () => timeline.play()
      });
  
      // exit scrolltrigger. restarts the animation and pauses
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top bottom",
        onLeaveBack: () => {
          timeline.progress(0);
          timeline.pause();
        }
      });
    }
  
    // scrolltrigger based animation for words entering in
    $("[words-slide-up]").each(function (index) {
      let tl = gsap.timeline({ paused: true });
      tl.from($(this).find(".word"), {
        opacity: 0,
        yPercent: 100,
        duration: 0.5,
        ease: "power3.out",
        stagger: { amount: 0.5 }
      });
      createScrollTrigger($(this), tl);
    });
  
    // for character animations instead of words
    $("[chars-slide-up]").each(function (index) {
      let tl = gsap.timeline({ paused: true });
      tl.from($(this).find(".char"), {
        opacity: 0,
        yPercent: 100,
        duration: 0.5,
        ease: "power3.out",
        stagger: { amount: 0.5 }
      });
      createScrollTrigger($(this), tl);
    });
  
    // for character animations instead of words
    $("[slide-up]").each(function (index) {
      let tl = gsap.timeline({ paused: true });
      tl.from($(this), {
        opacity: 0,
        yPercent: 100,
        duration: 0.5,
        ease: "power3.out",
        stagger: { amount: 0.5 }
      });
      createScrollTrigger($(this), tl);
    });
  
    // Avoid flash of unstyled content
    gsap.set("[text-split]", { opacity: 1 });
  });
  