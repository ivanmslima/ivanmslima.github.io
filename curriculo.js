var btn = document.getElementById('btn-trocar')

btn.addEventListener('click', function(){
    var link = document.querySelector('link')
    console.log(link)
    var last_url = link.getAttribute('href')
    console.log(last_url)
    if (last_url == "style1.css")
        url = "style2.css"
    else
        url = "style1.css"
    
    console.log(url)
    link.setAttribute('href',url)
});

var experiencias = document.getElementById('experiencias-desc')
var ul = document.getElementById('lista-habilidades')

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        carregaDados(JSON.parse(xhttp.responseText))
    }
}
xhttp.open("GET", "http://demo0925199.mockable.io/", true);
xhttp.send();

function carregaDados(dados){
    for( var i = 0; i < Object.keys(dados.experiencias).length; i++){
        var div_experiencia = document.createElement("div")
        var p_empresa = document.createElement("p")
        var p_periodo = document.createElement("p")
        var p_atribuicoes = document.createElement("p")
        p_empresa.textContent = "Empresa: " + dados.experiencias[i].empresa
        p_periodo.textContent = "Período: " + dados.experiencias[i].periodo
        p_atribuicoes.textContent = "Atribuições: " + dados.experiencias[i].atribuicoes

        div_experiencia.appendChild(p_empresa)
        div_experiencia.appendChild(p_periodo)
        div_experiencia.appendChild(p_atribuicoes)
        experiencias.appendChild(div_experiencia)
    }

    for( var i = 0; i < Object.keys(dados.habilidades).length; i++){

        var li = document.createElement("li")
        var li_habilidade = document.createElement("span")
        var li_nivel = document.createElement("small")
        li_habilidade.textContent = dados.habilidades[i].habilidade
        li_nivel.textContent = " - " + dados.habilidades[i].nivel
        
        li.appendChild(li_habilidade)
        li.appendChild(li_nivel)
        ul.appendChild(li)
    }
}