let costoPrenda = 0

function mostrarPrecio(codigo) {
    switch(codigo) {
        case 1:
            alert('Guantes 12oz $ 20.000')
            costoPrenda = 20000
            break
        case 2:
            alert('Protector Bucal $ 2300')
            costoPrenda = 2300
            break
        case 3:
            alert('Vendas 5x5 $ 6400')
            costoPrenda = 6400
            break
        case 4:
            alert('Cabezal $19.000')
            costoPrenda = 19000
            break
        case 5:
            alert('Saco de Boxeo $34.000')
            costoPrenda = 34000
            break
        case 6:
            alert('Botas de Boxeo $40.000')
            costoPrenda = 40000
            break
        default:
            alert('No entendimos tu seleccion')
    }
}

function consultarProductos() {
    let codigoProducto = prompt('Ingresa el codigo numerico del producto a consultar: ')
    if (codigoProducto) {
        mostrarPrecio(parseInt(codigoProducto))
        mostrarCuotas()
        let respuesta = confirm("¿Deseas consultar el precio de otro producto?")
        if (respuesta === true) {
            consultarProductos()
        }
    } else{
        console.warn('Debes ingresar un codigo valido.')
    }
}

function mostrarCuotas() {
    console.log("Puedes pagar en:")
    for (let i = 1; i <= 6; i++) {
        console.log(i, "cuota(s) de " + (costoPrenda / i).toFixed(2))
    }
    console.log("Sin intereses.")
}