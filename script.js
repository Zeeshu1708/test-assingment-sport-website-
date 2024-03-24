let scrollContainer = document.querySelector("#scrollContainer");
let backBtn = document.querySelector("#backBtn");
let nextBtn = document.querySelector("#nextBtn");


scrollContainer.addEventListener("wheel", (dets) => {
    dets.preventDefault();
    scrollContainer.scrollLeft += dets.deltaY;
});
nextBtn.addEventListener("click", (dets) => {
    scrollContainer.scrollLeft += 400;
});
backBtn.addEventListener("click", (dets) => {
    scrollContainer.scrollLeft -= 400;
});
