document.addEventListener('DOMContentLoaded', function(){
    const botaoAumentarFonte = document.getElementById('aumentar-fonte')
    //Pega o botão de aumentar fonte e coloca na constante

    let tamanhoDaFonte = 1
    // define o tamanho da fonte na variável

    botaoAumentarFonte.addEventListener('click', function(){
        tamanhoDaFonte = tamanhoDaFonte + 0.1
        document.body.style.fontSize = `${tamanhoDaFonte}rem`

    })

    const botaoDiminuir = document.getElementById('diminuir-fonte')

        botaoDiminuir.addEventListener('click', function(){
            tamanhoFonte = tamanhoFonte - 0.1;
            document.body.style.fontSize = tamanhoFonte+"rem";
        })

      const botaoAcessibilidade = document.grtElementByid('botao-acessibilidade')
      const opcoesAcessibilidade = document.grtElementByid('opcoes-acessibilidade')
botaoAcessibilidade.addEventListener('click', function(){
    botaoAcessibilidade.classlist.toggle('rotacao-botao')
    opcoesAcessibilidade.classlist.toggle('apresenta-lista')
})

})