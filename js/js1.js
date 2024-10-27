document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".list .item");
    const indicators = document.querySelectorAll("section ul li");
    let currentIndex = 0;

    // Função para atualizar o item ativo
    function updateActiveItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle("active", i === index);
            indicators[i].classList.toggle("active", i === index);
        });
    }

    // Função para ir ao próximo item
    function nextItem() {
        currentIndex = (currentIndex + 1) % items.length;
        updateActiveItem(currentIndex);
    }

    // Função para ir ao item anterior
    function prevItem() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateActiveItem(currentIndex);
    }

    // Adicionar evento de clique aos indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            currentIndex = index;
            updateActiveItem(currentIndex);
        });
    });

    // Adicionar navegação automática com intervalo de tempo
    setInterval(nextItem, 5000); // Troca de item a cada 5 segundos

    // Adicionar botões de navegação se existirem
    const nextButton = document.querySelector(".arrows .next");
    const prevButton = document.querySelector(".arrows .prev");

    if (nextButton && prevButton) {
        nextButton.addEventListener("click", nextItem);
        prevButton.addEventListener("click", prevItem);
    }

    // Iniciar o carrossel com o primeiro item ativo
    updateActiveItem(currentIndex);
});
