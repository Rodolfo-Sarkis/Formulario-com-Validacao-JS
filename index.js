document.getElementById("botao").addEventListener("click", function (event) {
    event.preventDefault(); // Impede o comportamento padrão do link

    const inputs = document.querySelectorAll("input");
    let formValido = true;

    inputs.forEach(input => {
        const mensagemErro = input.nextElementSibling;

        // Remove mensagens de erro anteriores
        if (mensagemErro && mensagemErro.classList.contains("mensagem-erro")) {
            mensagemErro.remove();
        }

        // Validação do campo
        if (input.value.trim() === "") {
            formValido = false;
            input.style.border = "2px solid red";

            // Cria a mensagem de erro
            const erro = document.createElement("span");
            erro.classList.add("mensagem-erro");
            erro.style.color = "red";
            erro.style.fontSize = "12px";
            erro.textContent = "Campo obrigatório";
            input.insertAdjacentElement("afterend", erro);
        } else {
            input.style.border = "2px solid green"; // Borda verde ao preencher
        }
    });

    if (formValido) {
        alert("Formulário enviado com sucesso!");
    }
});

// Adiciona evento de input para atualizar a borda em tempo real
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", function () {
        if (input.value.trim() !== "") {
            input.style.border = "2px solid green"; // Borda verde ao digitar
        } else {
            input.style.border = "2px solid red"; // Borda vermelha se vazio
        }
    });
});


