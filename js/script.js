// ==========================================================
// script.js : menu mobile + année automatique du copyright
// Ce script ne collecte aucune donnée.
// ==========================================================

// On récupère le bouton du menu et le menu lui-même
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("main-nav");

// Ouvre ou ferme le menu, et prévient les lecteurs d'écran
function setMenu(open) {
  nav.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

// Clic sur le bouton : on inverse l'état du menu
toggle.addEventListener("click", function () {
  setMenu(!nav.classList.contains("open"));
});

// Clic sur un lien du menu : on referme le menu
nav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    setMenu(false);
  });
});

// Touche Échap : on referme le menu et on remet le focus sur le bouton
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && nav.classList.contains("open")) {
    setMenu(false);
    toggle.focus();
  }
});

// Année du pied de page : mise à jour automatique chaque année
document.getElementById("year").textContent = new Date().getFullYear();
