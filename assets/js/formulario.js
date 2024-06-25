const nombre = document.getElementById('nombre')
const spanNombre = document.getElementById('span-name')
const email = document.getElementById('email')
const telefono = document.getElementById('telefono')
const opciones = document.getElementById('opciones')
const boton = document.getElementById('boton')

if(nombre.value = ''){
    nombre.style.border = '2px solid red'
    spanNombre.textContent = 'Hey!! el campo nombre es necesario!!'
}

boton.addEventListener('click', (evento) => {
    if(nombre.value == ''){
        console.log('Entro')
        nombre.style.border = '2px solid red'
        spanNombre.textContent = 'Hey!! el campo nombre es necesario!!'
    }else {
        nombre.style.border = 'none'
        spanNombre.textContent = ''
    }
})
