let scrollContainer = document.querySelector("#scrollContainer");
let backBtn = document.querySelector("#backBtn");
let nextBtn = document.querySelector("#nextBtn");
let icon = document.querySelector("#icon");

icon.onclick = function(){
    document.body.classList.toggle("dark")
    if (document.body.classList.contains("dark")) {
        icon.classList = "ri-sun-fill"
    }else{
        icon.classList = "ri-moon-fill"
    }
}



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
