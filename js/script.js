// Main JavaScript file

document.addEventListener("DOMContentLoaded", function () {
  console.log("Script initialized successfully!");
});
/* ================ EQUAL HEIGHT ELEMENTS =============== */
const utl_ehElements = () => {
  let containerClasses = []; // Set empty array to store each container-classList

  function getAndSetHeights() {
    let ehContainers = document.querySelectorAll(".eh-container");
    for (let i = 0; i < ehContainers.length; i++) {
      // Add differentiating numbers to 'eh-container' classes (keeps equal-height elements contained to their appropriate containers)
      ehContainers[i].classList.replace("eh-container", `eh-container-${i}`);

      // Set the classList of each container to a '.'-separated string
      let containerClass = `.${ehContainers[i].classList
        .toString()
        .replace(/ /g, ".")}`;

      containerClasses.push(containerClass);

      let equalHeightEls = document.querySelectorAll(
        `${containerClass} .eh` // Target the equal-height elements within their eh-containers
      );

      let equalHeightElsArr = Array.from(equalHeightEls); // Convert NodeList to an Array

      // Get heights of each element and put in a new array (equalHeightValues)
      let equalHeightValues = equalHeightElsArr.map((el) => {
        return el.scrollHeight;
      });

      let maxHeight = Math.max(...equalHeightValues); // Get height of tallest element

      equalHeightElsArr.forEach((el) => {
        el.style.minHeight = `${maxHeight}px`;
      });
    }
  }

  function resizeHeights() {
    containerClasses.forEach((container) => {
      let elements = document.querySelectorAll(`${container} .eh`);
      let elementsArr = Array.from(elements);
      let maxHeight = 0;

      elementsArr.forEach((el) => {
        el.style.minHeight = "auto";
        if (el.scrollHeight > maxHeight) {
          maxHeight = el.scrollHeight;
        }
      });

      elementsArr.forEach((el) => {
        el.style.minHeight = `${maxHeight}px`;
      });
    });
  }

  // Run once on page load
  window.addEventListener("load", getAndSetHeights);

  // Add resize event listener with debouncing
  let resizeTimeout;

  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    // Give browser a chance to reset heights before resizing
    resizeTimeout = setTimeout(resizeHeights, 100); // Reduce frequent execution
  });
};
utl_ehElements();

document.addEventListener("DOMContentLoaded", function () {
  // Glide.js Slider configuration - 2.5 slides shown on xxl screens..etc
  const config = {
    type: "carousel",
    perView: 2.5,
    breakpoints: {
      1600: {
        perView: 1.5,
      },
      800: {
        perView: 1.5,
      },
      600: {
        perView: 1.2,
      },
    },
  };

  new Glide(".glide", config).mount();
});
document.addEventListener("DOMContentLoaded", function () {});
