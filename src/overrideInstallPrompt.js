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
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choice) => {
        if (choice.outcome === "accepted") installBtn.style.display = "none";
      });
    });
  });
};

export default overrideInstallPrompt;
