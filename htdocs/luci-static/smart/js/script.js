document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const toggle = document.getElementById("sidebar-toggle");
  const backdrop = document.getElementById("smart-sidebar-backdrop");

  if (!toggle) {
    return;
  }

  const mobileQuery = window.matchMedia("(max-width: 768px)");
  const storageKey = "smart.sidebar.collapsed";

  function applyDesktopState() {
    if (mobileQuery.matches) {
      body.classList.remove("sidebar-collapsed");
      return;
    }

    const collapsed = localStorage.getItem(storageKey) === "1";
    body.classList.toggle("sidebar-collapsed", collapsed);
    toggle.setAttribute("aria-expanded", collapsed ? "false" : "true");
  }

  function closeMobileSidebar() {
    body.classList.remove("sidebar-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  function openMobileSidebar() {
    body.classList.add("sidebar-open");
    toggle.setAttribute("aria-expanded", "true");
  }

  toggle.addEventListener("click", function () {
    if (mobileQuery.matches) {
      if (body.classList.contains("sidebar-open")) {
        closeMobileSidebar();
      } else {
        openMobileSidebar();
      }
      return;
    }

    const willCollapse = !body.classList.contains("sidebar-collapsed");
    body.classList.toggle("sidebar-collapsed", willCollapse);
    localStorage.setItem(storageKey, willCollapse ? "1" : "0");
    toggle.setAttribute("aria-expanded", willCollapse ? "false" : "true");
  });

  if (backdrop) {
    backdrop.addEventListener("click", closeMobileSidebar);
  }

  mobileQuery.addEventListener("change", function () {
    body.classList.remove("sidebar-open");
    applyDesktopState();
  });

  applyDesktopState();
});
