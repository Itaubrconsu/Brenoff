// Senha da demonstração local; não é autenticação segura para um site público.
const SENHA = "1804";
const login = document.getElementById("login");
const panel = document.getElementById("panel");
const pin = document.getElementById("pin");
const error = document.getElementById("error");
const notice = document.getElementById("notice");

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  if (pin.value === SENHA) {
    login.classList.add("hidden"); panel.classList.remove("hidden");
    error.textContent = ""; pin.value = "";
  } else {
    error.textContent = "Senha incorreta. Tente novamente.";
    pin.value = ""; pin.focus();
  }
});
function mostrarAviso(texto) {
  notice.textContent = texto + " — Obrigado por usar o painel do Breno!";
  notice.classList.remove("hidden");
}
function alternarCard(card) {
  const ativo = card.classList.toggle("on");
  const tag = card.querySelector(".tag");
  if (tag) tag.textContent = ativo ? "ATIVADO" : "DESATIVADO";
  notice.classList.add("hidden");
}
document.querySelectorAll("[data-toggle]").forEach(card => {
  card.addEventListener("click", () => alternarCard(card));
});
[["sens","sensVal"],["smooth","smoothVal"]].forEach(([id,valueId]) => {
  document.getElementById(id).addEventListener("input", event => {
    document.getElementById(valueId).textContent = event.target.value + "%";
  });
});
document.getElementById("confirm").addEventListener("click", () => mostrarAviso("Configurações confirmadas!"));
document.getElementById("clear").addEventListener("click", () => {
  document.querySelectorAll("[data-toggle]").forEach(card => {
    card.classList.remove("on");
    const tag = card.querySelector(".tag"); if (tag) tag.textContent = "DESATIVADO";
  });
  document.getElementById("sens").value = 50; document.getElementById("smooth").value = 50;
  document.getElementById("sensVal").textContent = "50%"; document.getElementById("smoothVal").textContent = "50%";
  mostrarAviso("Configurações limpas.");
});
document.getElementById("game").addEventListener("click", () => {
  // O navegador não pode fechar outras abas ou forçar o encerramento do Chrome.
  const fallback = "https://play.google.com/store/apps/details?id=com.dts.freefireth";
  window.location.href = "intent://#Intent;scheme=freefire;package=com.dts.freefireth;S.browser_fallback_url=" + encodeURIComponent(fallback) + ";end";
  setTimeout(() => { if (!document.hidden) mostrarAviso("Se o jogo não abriu, abra o Free Fire manualmente."); }, 1800);
});
document.getElementById("logout").addEventListener("click", () => {
  panel.classList.add("hidden"); login.classList.remove("hidden"); notice.classList.add("hidden");
  pin.value = ""; error.textContent = ""; pin.focus();
});