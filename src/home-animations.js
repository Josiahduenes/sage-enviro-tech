window.addEventListener("DOMContentLoaded", (event) => {
    // Split text into spans
    let typeSplit = new SplitType("[text-split]", {
      types: "words, chars",
      tagName: "span"
    });
  
    let tl = gsap.timeline();
  
    // logo load in animation
    tl.to(".main-loader_logo", {
      opacity: 1,
      duration: 2,
      ease: "power2.in"
    })
      .from(".main-loader_logo", {
        scale: 0.1,
        duration: 2,
        ease: "power2.out"
      })
      .to(
        ".main-loader_wrapper",
        {
          opacity: 0,
          duration: 2,
          display: "none",
          ease: "power2.out"
        },
        "<"
      );
  
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
  
    // slide up the process step
    // $(".home-about_process-step").each(function (index) {
    //   let tl = gsap.timeline({ paused: true });
    //   tl.from($(this), {
    //     opacity: 0,
    //     yPercent: 100,
    //     duration: 0.5,
    //     ease: "power3.out",
    //     stagger: { amount: 0.5 }
    //   });
    //   createScrollTrigger($(this), tl);
    // });
  
    //animate the top line on load in
    $("[grow-in]").each(function (index) {
      let tl = gsap.timeline({ paused: true });
      tl.from($(this), {
        width: "0%",
        duration: 0.5,
        ease: "power3.out",
        stagger: { amount: 0.5 }
      });
      createScrollTrigger($(this), tl);
    });
  
    //capabilities animations
    // these move the arrows on mouse hover
    $(".capabilities_dropdown-content").on("mouseenter", function () {
      gsap.to($(this).find(".icon-embed-small"), {
        xPercent: 20,
        duration: 0.5,
        ease: "power3.out"
      });
    });
  
    // move the arrow back to it's original position on mouse leave
    $(".capabilities_dropdown-content").on("mouseleave", function () {
      gsap.to($(this).find(".icon-embed-small"), {
        xPercent: 0,
        duration: 0.5,
        ease: "power3.out"
      });
    });
    //for the image cover animation to load an image in on the page
    $("[img-cover]").each(function (index) {
      gsap.from($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: "top 70%"
        },
        width: "100%",
        duration: 0.5,
        ease: "power2.out"
      });
    });
  
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
  
    // for a general ease slide up animation to be used with most page items.
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
  