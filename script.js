const mainScreen = document.getElementById("mainScreen");

mainScreen.classList.add("show");

let deferredPrompt;

const installButton =
  document.getElementById("installButton");

/* 설치된 상태면 숨김 */

if (
  window.matchMedia("(display-mode: standalone)").matches
) {

  installButton.style.display = "none";

}

/* 설치 가능 이벤트 */

window.addEventListener(
  "beforeinstallprompt",
  (e) => {

    e.preventDefault();

    deferredPrompt = e;

    installButton.style.display = "flex";

  }
);

/* 버튼 클릭 */

installButton?.addEventListener(
  "click",
  async () => {

    if (!deferredPrompt) return;

    deferredPrompt.prompt();

    await deferredPrompt.userChoice;

    deferredPrompt = null;

    installButton.style.display = "none";

  }
);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}

const logoutLink = document.getElementById("logoutLink");

logoutLink?.addEventListener("click", (e) => {
  e.preventDefault();

  window.location.href =
    window.location.href = "/cdn-cgi/access/logout";
});
