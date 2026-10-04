import $ from "https://esm.sh/jquery@4.0.0";

// Random image on hover
const images = ["./assets/hero-random/cacti-succulents-01.jpg", "./assets/hero-random/cacti-succulents-02.jpg", "./assets/hero-random/cacti-succulents-03.jpg", "./assets/hero-random/cacti-succulents-04.jpg", "./assets/hero-random/cacti-succulents-05.jpg", "./assets/hero-random/cacti-succulents-06.jpg", "./assets/hero-random/cacti-succulents-07.jpg"];

let previousImage = "";

function getRandomImage() {
  let image;

  do {
    const index = Math.floor(Math.random() * images.length);
    image = images[index];
  } while (image === previousImage);

  previousImage = image;
  return image;
}

$("#image-wrapper").mouseenter(function () {
  $("#image").attr("src", getRandomImage());
});
