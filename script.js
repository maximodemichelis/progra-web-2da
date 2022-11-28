if (document.readyState== "loading"){
    document.addEventListener("DOMContentLoaded",ready)
} else{
    ready()
}

function ready(){
    var quitaritem = document.getElementsByClassName("botonquitar")
    for (var i = 0; i < quitaritem.length; i++){
        var boton1 = quitaritem[i]
        boton.addEventListener("click",quitardelcarro)
    }

    var actcant = document.getElementsByClassName("cantinput")
    for (var i = 0; i < actcant.length; i++){
        var input = actcant[i]
        input.addEventListener("change",cambiarcant)
    }

    var agregarcarroboton = document.getElementsByClassName("boton")
    for (var i = 0; i <agregarcarroboton.length; i++){
        var boton = agregarcarroboton[i]
        boton.addEventListener("click",agregarcarro)
    }

    var agregarcarroboton = document.getElementsByClassName("boton")
    for (var i = 0; i <agregarcarroboton.length; i++){
        var boton = agregarcarroboton[i]
        boton.addEventListener("click",agregarcarro)
    }

    document.getElementsByClassName("comprarbot")[0].addEventListener("click",comprar)

}

function comprar(){
    alert("Su compra fue recibida.Gracias por su compra")
    var vaciaritemscarro = document.getElementsByClassName("itemscarro")[0]
    while(vaciaritemscarro.hasChildNodes()){
        vaciaritemscarro.removeChild(vaciaritemscarro.firstChild)
    }
    preciocarro()
}

function quitardelcarro(event){
    var botonclick = event.target
    botonclick.parentElement.parentElement.parentElement.remove()
    preciocarro()
}

function cambiarcant(event){
    var input= event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    preciocarro()

}

function agregarcarro(event){
    var boton2 = event.target
    var tiendaitem = boton2.parentElement.parentElement.parentElement
    var titulo = tiendaitem.getElementsByClassName("tit")[0].innerText
    var precio = tiendaitem.getElementsByClassName("precioitem")[0].innerText
    var img = tiendaitem.getElementsByClassName("imgtienda")[0].src
    agregaritem(titulo,precio,img)
    preciocarro()
    console.log(agregaritem)
}

function agregaritem(titulo,precio,img){
    var rowcarro = document.createElement("div")
    rowcarro.classList.add("rowitem")
    var itemscarro = document.getElementsByClassName("itemscarro")[0]
    var contenidocarro = `
        <div class="itemcol">
            <img class="imagcarro" src="${img}">
            <span class="titulocarro">${titulo}</span>
        </div>
        <span class="preciocolumn">${precio}</span>
        <div class="cantcolumn">
            <input class="cantinput" type="number" value="1">
            <button class="botonquitar" type="button">Quitar</button>
        </div>`
    rowcarro.innerHTML = contenidocarro
    itemscarro.append(rowcarro)
    rowcarro.getElementsByClassName("botonquitar")[0].addEventListener("click",quitardelcarro)
    rowcarro.getElementsByClassName("cantinput")[0].addEventListener("change",cambiarcant)
}

function preciocarro(){
    var contitems = document.getElementsByClassName("itemscarro")[0]
    var filascarro = contitems.getElementsByClassName("rowcarro") 
    var total = 0
    for (var i = 0; i < filascarro.length; i++){
        var filacarro = filascarro[i]
        var preciopart = filacarro.getElementsByClassName("preciocolumn")[0]
        var cant = filacarro.getElementsByClassName("cantinput")[0]
        var precio = parseFloat(preciopart.innerText.replace("$",""))
        var cantidad = cant.value
        total = total + (precio * cantidad)
    }
    document.getElementsByClassName("preciototal")[0].innerText = "$" + total + ".000"
}

