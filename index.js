const shareBtn = document.querySelector("button.share");
const popup = document.getElementById("popup");

shareBtn.addEventListener("click", function () {
  popup.classList.toggle("show");
  shareBtn.classList.toggle("show");
});
