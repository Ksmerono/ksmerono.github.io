const modalState = { activeWindow: null };

const getWindowTitle = (win) =>
  win?.dataset.windowTitle?.trim() ||
  win?.querySelector(".section-title")?.textContent?.trim() ||
  "Ventana";

const createOverlay = (className, html) => {
  const overlay = document.createElement("div");
  overlay.className = `window-overlay ${className}`;
  overlay.innerHTML = html;
  document.body.appendChild(overlay);
  return overlay;
};

const closeOverlay = createOverlay(
  "window-overlay--confirm",
  `
    <div class="window-modal">
      <header class="window-modal__header">
        <div>
          <p class="window-modal__label">Advertencia</p>
          <h3 class="window-modal__title"></h3>
        </div>
      </header>
      <p class="window-modal__subtitle">
        Cuidado, vas a cerrar una ventana. Si continúas se ocultará con un desvanecimiento.
      </p>
      <div class="window-modal__actions">
        <button type="button" class="window-modal__btn window-modal__btn--ghost" data-close-cancel>Cancelar</button>
        <button type="button" class="window-modal__btn window-modal__btn--primary" data-close-confirm>Continuar</button>
      </div>
    </div>
  `
);

const maximizeOverlay = createOverlay(
  "maximize-overlay",
  `
    <div class="window-modal window-modal--fullscreen">
      <header class="window-modal__header">
        <div>
          <p class="window-modal__label">Vista ampliada</p>
          <h3 class="window-modal__title"></h3>
        </div>
        <button type="button" class="window-modal__close" aria-label="Cerrar vista ampliada" data-max-close>×</button>
      </header>
      <div class="window-modal__body"></div>
    </div>
  `
);

const maximizeBody = maximizeOverlay.querySelector(".window-modal__body");
const closeTitle = closeOverlay.querySelector(".window-modal__title");
const maximizeTitle = maximizeOverlay.querySelector(".window-modal__title");

const toggleBodyLock = (lock) => {
  document.body.classList.toggle("window-modal-open", lock);
};

const toggleOverlayVisibility = (overlay, show) => {
  overlay.classList.toggle("active", show);
};

const showCloseOverlay = (win) => {
  modalState.activeWindow = win;
  if (closeTitle) {
    closeTitle.textContent = `Cerrar ${getWindowTitle(win)}`;
  }
  toggleOverlayVisibility(closeOverlay, true);
};

const hideCloseOverlay = () => {
  toggleOverlayVisibility(closeOverlay, false);
  modalState.activeWindow = null;
};

const showMaximizeOverlay = (win) => {
  if (!maximizeBody) return;
  const source = win.querySelector(".terminal-body");
  maximizeBody.innerHTML = "";
  if (source) {
    const clone = source.cloneNode(true);
    clone.classList.add("maximize-snapshot");
    maximizeBody.appendChild(clone);
  }
  if (maximizeTitle) {
    maximizeTitle.textContent = getWindowTitle(win);
  }
  toggleOverlayVisibility(maximizeOverlay, true);
  toggleBodyLock(true);
};

const hideMaximizeOverlay = () => {
  toggleOverlayVisibility(maximizeOverlay, false);
  if (maximizeBody) {
    maximizeBody.innerHTML = "";
  }
  toggleBodyLock(false);
};

closeOverlay
  .querySelector("[data-close-cancel]")
  ?.addEventListener("click", hideCloseOverlay);

closeOverlay
  .querySelector("[data-close-confirm]")
  ?.addEventListener("click", () => {
    if (modalState.activeWindow) {
      modalState.activeWindow.classList.add("hidden");
    }
    hideCloseOverlay();
  });

maximizeOverlay.addEventListener("click", (event) => {
  if (event.target === maximizeOverlay) {
    hideMaximizeOverlay();
  }
});

maximizeOverlay
  .querySelector("[data-max-close]")
  ?.addEventListener("click", hideMaximizeOverlay);

const toggleMinimize = (win) => {
  if (win.classList.contains("hidden")) return;
  win.classList.toggle("minimized");
};

const handleControlClick = (event) => {
  const button = event.target.closest(".terminal-dot");
  const win = button?.closest(".terminal-window");
  if (!button || !win) return;
  const action = button.dataset.action;
  if (action === "minimize") {
    toggleMinimize(win);
  } else if (action === "maximize") {
    showMaximizeOverlay(win);
  } else if (action === "close") {
    showCloseOverlay(win);
  }
};

const initWindowControls = () => {
  document.addEventListener("click", handleControlClick);
};

if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initWindowControls);
  } else {
    initWindowControls();
  }
}
