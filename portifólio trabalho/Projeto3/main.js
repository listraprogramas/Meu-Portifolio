var produtosDiferentes = 4; // variavel que mantem o numero de produtos diferentes
var quantidadeTotal = 180; // variavel que mantem a quantidade total de produtos

function adicionarProduto() {
    // pega os valores dos campos de input
    var nomeProduto = document.getElementById("nomeProduto").value;
    var quantidadeProduto = document.getElementById("quantidadeProduto").value;

    if (nomeProduto !== "" && quantidadeProduto !== "") {
        // se os campos nao estiverem vazios, adiciona uma nova linha na tabela
        var tabela = document.querySelector("table");
        var novaLinha = tabela.insertRow(tabela.rows.length);

        // insere celulas na nova linha e preenche com os valores do novo produto
        var celula1 = novaLinha.insertCell(0);
        var celula2 = novaLinha.insertCell(1);
        var celula3 = novaLinha.insertCell(2);
        celula1.innerHTML = nomeProduto;
        celula2.innerHTML = quantidadeProduto;
        celula3.innerHTML = '<button onclick="removerProduto(this)">Remover</button>';

        // atualiza as variaveis de contagem
        produtosDiferentes++;
        quantidadeTotal += parseInt(quantidadeProduto);
        

        // atualiza as informaçoes na pagina
        atualizarInfoProdutos();

        // limpa os campos de input
        document.getElementById("nomeProduto").value = "";
        document.getElementById("quantidadeProduto").value = "";
    } else {
        // se algum campo estiver vazio exibe um alerta
        alert("Por favor, preencha todos os campos.");
    }
}

function atualizarQuantidade() {
    // obtem o nome do produto e a nova quantidade do HTML
    var nomeProdutoAtualizar = document.getElementById("nomeProdutoAtualizar").value;
    var quantidadeAtualizar = document.getElementById("quantidadeAtualizar").value;

    if (nomeProdutoAtualizar !== "" && quantidadeAtualizar !== "") {
        // obtem a referencia para a tabela no HTML
        var tabela = document.querySelector("table");

        // itera sobre as linhas da tabela, começando da segunda linha (indice 1)
        for (var i = 1; i < tabela.rows.length; i++) {
            // verifica se o nome do produto na linha atual corresponde ao nome inserido
            if (tabela.rows[i].cells[0].innerHTML === nomeProdutoAtualizar) {
                // obtem a quantidade anterior do produto
                var quantidadeAnterior = parseInt(tabela.rows[i].cells[1].innerHTML);

                // subtrai a quantidade anterior e adiciona a nova quantidade para atualizar o total
                quantidadeTotal = quantidadeTotal - quantidadeAnterior + parseInt(quantidadeAtualizar);

                // atualiza a quantidade na celula da tabela
                tabela.rows[i].cells[1].innerHTML = quantidadeAtualizar;

                // atualiza as informações gerais sobre os produtos
                atualizarInfoProdutos();

                // limpa os campos de entrada no HTML
                document.getElementById("nomeProdutoAtualizar").value = "";
                document.getElementById("quantidadeAtualizar").value = "";

                // eetorna apos encontrar o produto, pois ja foi atualizado
                return;
            }
        }

        // se o produto nao for encontrado, exibe um alerta
        alert("Produto não encontrado.");
    } else {
        // se algum campo estiver em branco, exibe um alerta
        alert("Por favor, preencha todos os campos.");
    }
}


function removerProduto(botao) {
    // obtem a linha correspondente ao botao clicado
    var linha = botao.parentNode.parentNode;
    var quantidadeRemovida = parseInt(linha.cells[1].innerHTML);

    // atualiza as variaveis de contagem
    produtosDiferentes--;
    quantidadeTotal -= quantidadeRemovida;

    // atualiza as informações na pagina
    atualizarInfoProdutos();

    // remove a linha da tabela
    linha.parentNode.removeChild(linha);
}

function atualizarInfoProdutos() {
    // atualiza as informações sobre produtos na pagina
    document.getElementById("produtosDiferentes").innerHTML = "produtos diferentes: " + produtosDiferentes;
    document.getElementById("quantidadeTotal").innerHTML = "quantidade de produtos no estoque: " + quantidadeTotal;
}