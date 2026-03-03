const modalState = {
  activeWindow: null as HTMLElement | null,
};

const getWindowTitle = (win: HTMLElement | null): string =>
  win?.dataset.windowTitle?.trim() ||
  win?.querySelector<HTMLElement>(".section-title")?.textContent?.trim() ||
  "ventana";

const createOverlay = (className: string, html: string) => {
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

const maximizeBody = maximizeOverlay.querySelector<HTMLElement>(".window-modal__body");
const closeTitle = closeOverlay.querySelector<HTMLElement>(".window-modal__title");
const maximizeTitle = maximizeOverlay.querySelector<HTMLElement>(".window-modal__title");

const toggleBodyLock = (lock: boolean) => {
  document.body.classList.toggle("window-modal-open", lock);
};

const toggleOverlayVisibility = (overlay: HTMLElement, show: boolean) => {
  overlay.classList.toggle("active", show);
};

const showCloseOverlay = (win: HTMLElement) => {
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

const showMaximizeOverlay = (win: HTMLElement) => {
  if (!maximizeBody) return;
  const source = win.querySelector<HTMLElement>(".terminal-body");
  maximizeBody.innerHTML = "";
  if (source) {
    const clone = source.cloneNode(true) as HTMLElement;
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
  .querySelector<HTMLButtonElement>("[data-close-cancel]")
  ?.addEventListener("click", hideCloseOverlay);

closeOverlay
  .querySelector<HTMLButtonElement>("[data-close-confirm]")
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
  .querySelector<HTMLButtonElement>("[data-max-close]")
  ?.addEventListener("click", hideMaximizeOverlay);

const toggleMinimize = (win: HTMLElement) => {
  if (win.classList.contains("hidden")) return;
  win.classList.toggle("minimized");
};

const getControlWindow = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  return target.closest<HTMLElement>(".terminal-window");
};

const handleControlClick = (event: MouseEvent) => {
  const button = (event.target as HTMLElement).closest<HTMLButtonElement>(".terminal-dot");
  const win = button?.closest<HTMLElement>(".terminal-window");
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
