let inside_scroller = document.querySelector(".inside-scroller");
let image = document.querySelector(".page-2-image img");
let nav_layer = document.querySelector(".nav-layer");
let navbar = document.querySelector("#navbar");

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

const page_2 = () => {
  let index = 1;

  setTimeout(() => {
    image.src = `${page_2_array[index++].img}`;
  }, 3000);
};

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

nav();
page_2();
