import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);

let listenersInitialized = false;
let totalSlides = 7;
let currentSlide = 1;
let isAnimating = false;
let scrollAllowed = true;
let lastScrollTime = 0;

let touchStartY = 0;
let isTouchActive = false;

const slideTitles = [
  "Web de Goiko", "Field Unit2", "Field Unit3", "Field Unit4",
  "Field Unit5", "Field Unit6", "Field Unit7"
];

const slideDescriptions = [
  "Frontend", "Concept art2", "Concept art3", "Concept art4",
  "Concept art5", "Concept art6", "Concept art7"
];

const slideUrls = ["#1", "#2", "#", "#", "#", "#", "#"]

export function initializeWorkSlider() {
  if (listenersInitialized) return;
  listenersInitialized = true;

  function createSlide(slideNumber, direction) {
    const slide = document.createElement('div');
    slide.className = 'slide';

    const slideBgImg = document.createElement('div');
    slideBgImg.className = 'slide-bg-img';

    const img = document.createElement('img');
    img.src = `assets/work/img${slideNumber}.png`; 
    img.alt = `Slide ${slideNumber}`;

    slideBgImg.appendChild(img);
    slide.appendChild(slideBgImg);

    slideBgImg.style.clipPath =
      direction === "down"
        ? "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"
        : "polygon(0 0%, 100% 0%, 100% 0, 0 0)";

    return slide;
  }

  function createMainImgWrapper(slideNumber, direction) {
    const wrapper = document.createElement('div');
    wrapper.className = 'slide-main-img-wrapper';

     // Crea el <a> y le asigna la URL del array
    const link = document.createElement('a');
    link.href = slideUrls[slideNumber - 1]; 
    link.className = 'cursor-none'; // mantener oculto el cursor nativo
    link.target = '_blank'; // abrir en nueva pestaña

    const img = document.createElement('img');
    img.src = `assets/work/img${slideNumber}.png`; 
    img.alt = `Slide ${slideNumber}`;

    link.appendChild(img);
    wrapper.appendChild(link);

    // Clip path inicial para animación
    wrapper.style.clipPath =
      direction === "down"
        ? "polygon(0 0%, 100% 0%, 100% 0%, 0 0%)"
        : "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)";

    return wrapper;
  }

  function createTextElements(slideNumber, direction) {
    const newTitle = document.createElement('h1');
    newTitle.textContent = slideTitles[slideNumber - 1];
    gsap.set(newTitle, {
      y: direction === "down" ? 50 : -50,
    });

    const newDescription = document.createElement('p');
    newDescription.textContent = slideDescriptions[slideNumber - 1];
    gsap.set(newDescription, {
      y: direction === "down" ? 20 : -20
    });

    const newCounter = document.createElement('p');
    newCounter.textContent = slideNumber;
    gsap.set(newCounter, {
      y: direction === "down" ? 18 : -18
    });

    return { newTitle, newDescription, newCounter };
  }

  function animateSlide(direction) {
    if (isAnimating || !scrollAllowed) return;

    isAnimating = true;
    scrollAllowed = false;

    const slider = document.querySelector('.slider');
    const currentSlideElement = slider.querySelector('.slide');
    const mainImageContainer = document.querySelector('.slide-main-img');
    const currentMainWrapper = mainImageContainer.querySelector('.slide-main-img-wrapper');

    const titleContainer = document.querySelector('.slide-title');
    const descriptionContainer = document.querySelector('.slide-description');
    const counterContainer = document.querySelector('.count');

    const currentTitle = titleContainer.querySelector('h1');
    const currentDescription = descriptionContainer.querySelector('p');
    const currentCounter = counterContainer.querySelector('p');

    currentSlide = direction === "down"
      ? (currentSlide === totalSlides ? 1 : currentSlide + 1)
      : (currentSlide === 1 ? totalSlides : currentSlide - 1);

    const newSlide = createSlide(currentSlide, direction);
    const newMainWrapper = createMainImgWrapper(currentSlide, direction);
    const { newTitle, newDescription, newCounter } = createTextElements(currentSlide, direction);

    const tl = gsap.timeline({
  onComplete: () => {
    [
      currentSlideElement,
      currentMainWrapper,
      currentTitle,
      currentDescription,
      currentCounter
    ].forEach(el => el.remove());

    isAnimating = false;
    setTimeout(() => {
      scrollAllowed = true;
      lastScrollTime = Date.now();
    }, 100);
  }
});

// ⏱ Añade nuevos elementos justo cuando empieza la animación
tl.add(() => {
  slider.appendChild(newSlide);
  mainImageContainer.appendChild(newMainWrapper);
  titleContainer.appendChild(newTitle);
  descriptionContainer.appendChild(newDescription);
  counterContainer.appendChild(newCounter);

  gsap.set(newMainWrapper.querySelector("img"), {
    y: direction === "down" ? "-50%" : "50%",
  });
}, 0); // Puedes ajustar el momento si quieres (por ejemplo, 0.2)

    tl.to(newSlide.querySelector('.slide-bg-img'), {
      clipPath:
        direction === "down"
          ? "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)"
          : "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
      duration: 1.25,
      ease: CustomEase.create("", ".87,0,.13,1"),
    }, 0).to(
      currentSlideElement.querySelector("img"),
      { scale: 1.5, duration: 1.25, ease: CustomEase.create("", ".87,0,.13,1") },
      0
    ).to(
      newMainWrapper,
      {
        clipPath:
          direction === "down"
            ? "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)"
            : "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)",
        duration: 1.25,
        ease: CustomEase.create("", ".87,0,.13,1")
      },
      0
    ).to(
      currentMainWrapper.querySelector("img"),
      {
        y: direction === "down" ? "50%" : "-50%",
        duration: 1.25,
        ease: CustomEase.create("", ".87,0,.13,1"),
      },
      0
    ).to(currentMainWrapper, {
  clipPath:
    direction === "down"
      ? "polygon(0 0%, 100% 0%, 100% 0%, 0 0%)"
      : "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
  duration: 1.25,
  ease: CustomEase.create("", ".87,0,.13,1"),
}, 0).to(
      newMainWrapper.querySelector("img"),
      { y: "0%", duration: 1.25, ease: CustomEase.create("", ".87,0,.13,1") },
      0
    ).to(
      currentTitle,
      {
        y: direction === "down" ? "-50%" : "50%",
        opacity: 0,
        duration: 1.25,
        ease: CustomEase.create("", ".87,0,.13,1"),
      },
      0
    ).to(
      newTitle,
      { y: 0, duration: 1.25, ease: CustomEase.create("", ".87,0,.13,1") },
      0
    ).to(
      currentDescription,
      {
        y: direction === "down" ? "-20%" : "20%",
        duration: 1.25,
        opacity: 0,
        ease: CustomEase.create("", ".87,0,.13,1"),
      },
      0
    ).to(
      newDescription,
      { y: 0, duration: 1.25, ease: CustomEase.create("", ".87,0,.13,1") },
      0
    ).to(
      currentCounter,
      {
        y: direction === "down" ? "-18%" : "18%",
        opacity: 0,
        duration: 1.25,
        ease: CustomEase.create("", ".87,0,.13,1"),
      },
      0
    ).to(
      newCounter,
      { y: 0, duration: 1.25, ease: CustomEase.create("", ".87,0,.13,1") },
      0
    );
  }

  function handleScroll(direction) {
    const now = Date.now();
    if (isAnimating || !scrollAllowed) return;
    if (now - lastScrollTime < 900) return; //Cámbialo a 1500 o más si necesitas mayor tiempo entre scrolls.
    lastScrollTime = now;
    animateSlide(direction);
  }

  window.addEventListener("wheel", (e) => {
    e.preventDefault();
    const direction = e.deltaY > 0 ? "down" : "up";
    handleScroll(direction);
  }, { passive: false });

  window.addEventListener("touchstart", (e) => {
    touchStartY = e.touches[0].clientY;
    isTouchActive = true;
  }, { passive: false });

  window.addEventListener("touchmove", (e) => {
    e.preventDefault();
    if (!isTouchActive || isAnimating || !scrollAllowed) return;
    const touchCurrentY = e.touches[0].clientY;
    const difference = touchStartY - touchCurrentY;
    if (Math.abs(difference) > 10) {
      isTouchActive = false;
      const direction = difference > 0 ? "down" : "up";
      handleScroll(direction);
    }
  }, { passive: false });

  window.addEventListener("touchend", () => {
    isTouchActive = false;
  }, { passive: false });
}
