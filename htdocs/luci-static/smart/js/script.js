document.addEventListener("DOMContentLoaded", function () {
  const layout = document.getElementById("smart-layout");
  const toggle = document.getElementById("smart-menu-toggle");
  const backdrop = document.getElementById("smart-backdrop");

  if (!layout || !toggle || !backdrop) {
    return;
  }

  function openSidebar() {
    layout.classList.add("is-sidebar-open");
    toggle.setAttribute("aria-expanded", "true");
  }

  function closeSidebar() {
    layout.classList.remove("is-sidebar-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", function () {
    if (layout.classList.contains("is-sidebar-open")) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  backdrop.addEventListener("click", closeSidebar);

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      closeSidebar();
    }
  });
});
