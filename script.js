let nav_layer = document.querySelector(".nav-layer");
let navbar = document.querySelector("#navbar");
let para = document.querySelector(".para-parent-inside p");
let inside_scroller = document.querySelector(".inside-scroller");
let image = document.querySelector(".page-2-image img");
let p_change = document.querySelector(".p-change");
let sent = document.querySelector(".parts p");
let button_change = document.querySelector(".parts button");

const page_2_array = [
  {
    img: "https://rideout.amsterdam/wp-content/uploads/2024/02/rideout-1536x1536-2.jpg",
    paragraph:
      " We foster curiosity and deliver moments of brand and product excitement",
    sent: "Check out our complete collection of brands",
    button: "VISIT OUR WEBSHOPS",
  },
  {
    img: "https://rideout.amsterdam/wp-content/uploads/2023/08/DSCF7419-2.jpg",
    paragraph:
      " Pedaling through lush landscapes, embracing nature's rhythmic harmony.From dawn to dusk,  continues onward.",
    sent: "Check our products online",
    button: "Our Brands",
  },
  {
    img: "https://rideout.amsterdam/wp-content/uploads/2023/08/explore.jpg",
    paragraph:
      " Wheels spinning, hearts racing, chasing endless roads of adventure.",
    sent: "Check out our policies",
    button: "DISCOVER ALL ABOUT US",
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
  let currentIndex = 0;

  function changeWidthAndImage() {
    inside_scroller.style.visibility = "visible"; // Make the element visible before changing width
    inside_scroller.style.width = "100%";

    setTimeout(() => {
      inside_scroller.style.width = "0%";
      inside_scroller.style.visibility = "hidden"; // Hide the element after the width transition completes
      currentIndex = (currentIndex + 1) % page_2_array.length;
      image.src = page_2_array[currentIndex].img;
      p_change.innerText = page_2_array[currentIndex].paragraph;
      sent.innerText = page_2_array[currentIndex].sent;
      button_change.innerText = page_2_array[currentIndex].button;
    }, 3000); // Change width after 3 seconds
  }

  // Initial call
  changeWidthAndImage();

  // Repeat every 3 seconds
  setInterval(changeWidthAndImage, 6000);
};

nav();
page_2();
