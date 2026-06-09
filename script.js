const logoContainer = document.getElementById("logoContainer");
const mainScreen = document.getElementById("mainScreen");

logoContainer.addEventListener("click", () => {

  // 로고 사라짐
  logoContainer.classList.add("hide");

  // 메인 화면 등장
  setTimeout(() => {
    mainScreen.classList.add("show");
  }, 400);

});
