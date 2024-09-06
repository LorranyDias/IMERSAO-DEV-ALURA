function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
   

    let campoPesquisa = document.getElementById ("campo-pesquisa").value

    console.log(campoPesquisa);
    
    // se campoPesquisa for uma string sem nada 
    if(!campoPesquisa){
        section.innerHTML = "<p>Nenhum Jogo Encontrado. Digite o Nome de Um Jogo!<p/>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";


    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
          
            // Constrói o HTML para cada item do resultado da pesquisa
        
            resultados += `
            <div class="item-resultado">
               <h2>
                    <a href="https://youtu.be/vuAhNH2UL1Y" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta"> ${dado.descricao}</p>
                <a href=${dado.link}target="_blank">Baixe e jogue agora mesmo. </a>
            </div>
        `;   

        }
       
    }

    if (!resultados) {
        resultados = "<p>Nenhum Jogo Encontrado.<p/>"

    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}
//console.log(dados);



   