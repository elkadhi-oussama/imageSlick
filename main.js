const images = document.querySelectorAll(".imageee");

images.forEach((image) => {
  image.addEventListener("click", () => {
    const imageContainer = image.parentNode;
    imageContainer.insertBefore(image, imageContainer.firstChild);
    removeActiveClass();
    image.classList.add("active");
  });
});
console.log(images);

function removeActiveClass() {
  const arrImages = Array.from(images);
  const classActie = arrImages.filter((img) =>
    img.getAttribute("class").includes("active")
  )[0];
  classActie.classList.remove("active");
}
