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
    <div class="terminal-window modal-terminal">
      <div class="terminal-header">
        <div class="terminal-dots">
          <button type="button" class="terminal-dot red" data-close-cancel aria-label="Cerrar modal"></button>
        </div>
        <h3 class="section-title">Advertencia — Cerrar ventana</h3>
      </div>
      <div class="terminal-body">
        <p class="modal-message">Vas a cerrar una ventana. Si continúas se ocultará con un desvanecimiento.</p>
        <div class="modal-actions">
          <button type="button" class="modal-btn modal-btn--cancel" data-close-cancel>Cancelar</button>
          <button type="button" class="modal-btn modal-btn--confirm" data-close-confirm>Continuar</button>
        </div>
      </div>
    </div>
  `
);

const maximizeOverlay = createOverlay(
  "maximize-overlay",
  `
    <div class="terminal-window modal-terminal modal-terminal--fullscreen">
      <div class="terminal-header">
        <div class="terminal-dots">
          <button type="button" class="terminal-dot red" data-max-close aria-label="Cerrar vista ampliada"></button>
        </div>
        <h3 class="section-title"></h3>
      </div>
      <div class="terminal-body modal-terminal__body"></div>
    </div>
  `
);

const maximizeBody = maximizeOverlay.querySelector(".modal-terminal__body");
const closeTitle = closeOverlay.querySelector(".section-title");
const maximizeTitle = maximizeOverlay.querySelector(".section-title");

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
    clone.style.maxHeight = "";
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

closeOverlay.querySelectorAll("[data-close-cancel]").forEach((btn) => {
  btn.addEventListener("click", hideCloseOverlay);
});

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

const collapseBody = (body) => {
  if (!body.dataset.expandedHeight) {
    const previous = body.style.maxHeight;
    body.style.maxHeight = "none";
    body.dataset.expandedHeight = String(
      Math.ceil(body.getBoundingClientRect().height)
    );
    body.style.maxHeight = previous;
  }
  body.style.maxHeight = `${body.dataset.expandedHeight}px`;
  body.getBoundingClientRect();
  body.style.maxHeight = "0px";
};

const expandBody = (body) => {
  const target = body.dataset.expandedHeight;
  body.style.maxHeight = "0px";
  body.getBoundingClientRect();
  if (!target) {
    body.style.maxHeight = "";
    return;
  }
  body.style.maxHeight = `${target}px`;
  const onEnd = (event) => {
    if (event.propertyName !== "max-height") return;
    body.style.maxHeight = "";
    body.removeEventListener("transitionend", onEnd);
  };
  body.addEventListener("transitionend", onEnd);
};

const toggleMinimize = (win) => {
  if (win.classList.contains("hidden")) return;
  const body = win.querySelector(".terminal-body");
  const minimized = win.classList.toggle("minimized");
  if (!body) return;
  if (minimized) {
    collapseBody(body);
  } else {
    expandBody(body);
  }
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
