
var tbody = document.getElementById("tbody")
console.log("rodando")
document.getElementById("txtBusca").addEventListener("keyup", function(){

var busca = document.getElementById("txtBusca").value.toLowerCase()

for (var index = 0; index < tbody.length; index++) {
    var achou = false
    var tr = tbody.childNodes[index];
    console.log(tbody.childNodes[index])
    var nomeQuestao = tr[0].value.toLowerCase();

    if(nomeQuestao.indexOf(busca) >= 0){
        achou = true
    }

    if(achou){
        tr.style.display = "table-row"
    }else{
        tr.style.display = "none"
    }
    
}
});
