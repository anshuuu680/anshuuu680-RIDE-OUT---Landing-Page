let inside_scroller = document.querySelector(".inside-scroller");
let image = document.querySelector(".page-2-image img");
let nav_layer = document.querySelector(".nav-layer");
let navbar = document.querySelector("#navbar");
let para = document.querySelector(".para-parent-inside p");

const page_2_array = [
  {
    img: "https://rideout.amsterdam/wp-content/uploads/2024/02/rideout-1536x1536-2.jpg",
    paragraph:
      " We foster curiosity and deliver moments of brand and product excitement",
    sent: "Check out our complete collection of brands",
    button: "Our Brands",
  },
  {
    img: "https://rideout.amsterdam/wp-content/uploads/2023/08/DSCF7419-2.jpg",
    paragraph:
      " We foster curiosity and deliver moments of brand and product excitement",
    sent: "Check out our complete collection of brands",
    button: "Our Brands",
  },
  {
    img: "https://rideout.amsterdam/wp-content/uploads/2023/08/explore.jpg",
    paragraph:
      " We foster curiosity and deliver moments of brand and product excitement",
    sent: "Check out our complete collection of brands",
    button: "Our Brands",
  },
];

const page_1_textChange = [
  {
    text: "Amsterdam",
    logo: "",
  },
  {
    text: "The Ultimate Bike Store",
    logo: "",
  },
  {
    text: `Open Today Until 6pm`,
    logo: "",
  },
];

const page_1 = (() => {

  
  let currentIndex = 0;

  function showNextWave() {
    let clutter = "";

    page_1_textChange[currentIndex].text.split("").forEach((letter) => {
      if (letter === " ") {
        clutter += '<span class="space">&nbsp;</span>';
      } else {
        clutter += `<span>${letter}</span>`;
      }
    });

    para.innerHTML = clutter;

    gsap.from(".para-parent-inside p span", {
      y: -50,
      opacity: 0,
      stagger: 0.1,
      ease: "Expo.out",
    });

    currentIndex = (currentIndex + 1) % page_1_textChange.length;
  }

  setInterval(showNextWave, 3000);

  showNextWave();
})();

const nav = () => {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      nav_layer.style.top = "0%";
      navbar.style.height = "40px";
      navbar.style.color = "#ecf0f3";
    } else {
      nav_layer.style.top = "-10%";
      navbar.style.height = "70px";
      navbar.style.color = "initial";
    }
  });
};

const page_2 = () => {
  let index = 0;

  setTimeout(() => {
    image.src = `${page_2_array[index++].img}`;
  }, 3000);
};

nav();
page_2();
