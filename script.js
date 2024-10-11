document.querySelectorAll('.adicionar').forEach(button => {
    button.addEventListener('click', () => {
        const produto = button.parentElement;
        const nome = produto.dataset.nome;
        const preco = parseFloat(produto.dataset.preco);
        
        // Adiciona o produto ao carrinho
        adicionarAoCarrinho(nome, preco);
    });
});

const carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    listaCarrinho.innerHTML = '';

    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        listaCarrinho.appendChild(li);
    });

    document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
}
