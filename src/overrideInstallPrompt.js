const overrideInstallPrompt = (buttonSelector) => {
  let deferredPrompt;
  const installBtn = document.querySelector(
    buttonSelector ? buttonSelector : ".installBtn"
  );
  if (!installBtn) return;

  installBtn.style.display = "none";

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;

    installBtn.style.display = "block";

    installBtn.addEventListener("click", (e) => {
      installBtn.style.display = "none";
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => {
        deferredPrompt = null;
      });
    });
  });
};

export default overrideInstallPrompt;
