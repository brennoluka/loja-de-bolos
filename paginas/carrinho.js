// Exibir pop-up de produto adicionado
function mostrarPopup() {
  const popup = document.getElementById("popup-adicionado");
  if (!popup) return;
  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
  }, 2000);
}

// Adicionar produtos ao carrinho
function adicionarAoCarrinho(produto, preco) {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  const produtoExistente = carrinho.find((item) => item.produto === produto);

  if (!produtoExistente) {
    carrinho.push({
      produto,
      preco: parseFloat(preco),
    });
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
  } else {
    console.log("Produto já adicionado ao carrinho.");
  }
}

document.querySelectorAll(".card button").forEach((botao) => {
  botao.addEventListener("click", (e) => {
    const card = e.target.parentElement;
    const produto = card.querySelector("h1").innerText;
    const preco = card
      .querySelector("span")
      .innerText.replace("R$ ", "")
      .trim();

    adicionarAoCarrinho(produto, preco);
    mostrarPopup();
  });
});

// Exibir itens no carrinho
function exibirCarrinho() {
  const listaCarrinho = document.getElementById("lista-carrinho");
  const totalEl = document.getElementById("total");

  if (!listaCarrinho || !totalEl) return;

  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  listaCarrinho.innerHTML = "";

  let total = 0;
  carrinho.forEach((item) => {
    const li = document.createElement("li");
    li.className = "item-carrinho";

    li.innerHTML = `
      <div class="info-produto">
        <h3>${item.produto}</h3>
        <p>R$ ${item.preco.toFixed(2)}</p>
      </div>
    `;
    listaCarrinho.appendChild(li);
    total += item.preco;
  });

  totalEl.textContent = total.toFixed(2);
}

function limparCarrinho() {
  localStorage.removeItem("carrinho");
  exibirCarrinho();
}

const modal = document.getElementById("modal-compra-sucesso");
const closeBtn = document.querySelector(".close-btn");

function exibirModal() {
  if (modal) modal.style.display = "flex";
}

function fecharModal() {
  if (modal) modal.style.display = "none";
}

const finalizarCompraBtn = document.getElementById("finalizar-compra");
if (finalizarCompraBtn) {
  finalizarCompraBtn.addEventListener("click", () => {
    limparCarrinho();
    exibirModal();
  });
}

if (closeBtn) closeBtn.addEventListener("click", fecharModal);

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    fecharModal();
  }
});

if (window.location.pathname.includes("carrinho.html")) {
  exibirCarrinho();
}
