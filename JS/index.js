window.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    let header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });

  let faLeft = document.querySelector(".fa-arrow-left");
  let faRight = document.querySelector(".fa-arrow-right");
  let carouselCards = document.querySelectorAll(".section__carousel");

  let index = 0;

  function hideRight() {
    if (index == carouselCards.length - 1) {
      ColorsHidden();
    }
  }

  function showLeft() {
    if (index == 0) {
      ColorsShow();
    }
  }

  function ColorsHidden() {
    faRight.classList.add("active");
    faLeft.classList.add("active");
  }
  function ColorsShow() {
    faLeft.classList.remove("active");
    faRight.classList.remove("active");
  }

  function Slider() {
    if (index > carouselCards.length - 1) {
      ColorsHidden();
      index = carouselCards.length - 1;
    } else if (index < 0) {
      index = 0;
      ColorsShow();
    }

    carouselCards.forEach((item) => {
      item.style.transform = `translateX(${-index * 100}%)`;
    });
  }

  faRight.addEventListener("click", () => {
    index++;
    Slider();
    hideDot();
    showDot(index);
    hideRight();
  });
  faLeft.addEventListener("click", () => {
    index--;
    Slider();
    hideDot();
    showDot(index);
    showLeft();
  });

  let dot = document.querySelector(".section__carousel_dots_container");
  let dots = dot.querySelectorAll(".section__carousel_box_dot_box");

  function hideDot() {
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });
  }
  function showDot(i = 0) {
    console.log(i);
    dots[i].classList.add("active");
  }
  hideDot();
  showDot();

  dot.addEventListener("click", (e) => {
    if (
      e.target &&
      e.target.classList.contains("section__carousel_box_dot_box")
    ) {
      dots.forEach((dot, index) => {
        if (dot == e.target) {
          hideDot();
          showDot(index);
        }
      });
    }
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      carouselCards.forEach((item) => {
        item.style.transform = `translateX(${-index * 100}%)`;
      });
    });
  });
});
