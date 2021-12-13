const vendedoras = ["Ada", "Grace", "Hedy", "Sheryl"]
/*
 for(let i=0; i<ventas.length;i++){
  for(let j=0; j<ventas.length;j++){
      console.log(ventas[i][j])
  }
  }*/
const ventas = [
   [
     1,
     new Date(2019, 1, 4),
     "Grace",
     "Centro",
     ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
   ],
   [
     2,
     new Date(2019, 0, 1),
     "Ada",
     "Centro",
     ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
   ],
   [
     3,
     new Date(2019, 0, 2),
     "Grace",
     "Caballito",
     ["Monitor ASC 543", "Motherboard MZI"],
   ],
   [
     4,
     new Date(2019, 0, 10),
     "Ada",
     "Centro",
     ["Monitor ASC 543", "Motherboard ASUS 1200"],
   ],
   [
     5,
     new Date(2019, 0, 12),
     "Grace",
     "Caballito",
    ["Monitor GPRS 3000", "Motherboard ASUS 1200"],
   ],
 ]

 const precios = [
   ["Monitor GPRS 3000",200] ,
   ["Motherboard ASUS 1500",120 ],
   ["Monitor ASC 543", 250 ],
   ["Motherboard ASUS 1200", 100 ],
   ["Motherboard MZI", 30 ],
   ["HDD Toyiva", 90 ],
   ["HDD Wezter Dishital", 75 ],
   ["RAM Quinston", 110 ],
   ["RAM Quinston Fury", 230 ],
 ]


console.log()
/*
 close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});*/

const abrir = document.getElementById('btn');
const modal_container = document.getElementById('modal_container');
//const cerrar = document.getElementById('close');

abrir.addEventListener('click', () => {
  modal_container.classList.add('show');  

  let datosVenta = []

  let nombreValue = document.querySelector('#nombres')
  nombreValue.addEventListener('change', () =>{
  datosVenta.push(nombreValue.value)})

  let componenteValue = document.querySelector('#componentes')
  componenteValue.addEventListener('change', () =>{
  const componenteIngresado = componenteValue.value
  datosVenta.push(componenteIngresado)


 })

  let sucursalesValue = document.querySelector('#sucursales')
    sucursalesValue.addEventListener('change', () =>{
    datosVenta.push(sucursalesValue.value)
  })

let fechaVentaValue = document.querySelector('#fechaVenta')
    fechaVentaValue.addEventListener('change', () =>{
    datosVenta.push(fechaVentaValue.value)
})


const saveBtn = document.querySelector('#save')


/*if(componenteIngresado == valor1 ){
  console.log('cuesta: ' + precios[0][1])
}*/

const tabla = () => {
  let nombreComponente = datosVenta[1]
  const valor1 = precios[0][0] 
  const valor2 = precios[1][0] 
  const valor3 = precios[2][0]
  const valor4 = precios[3][0]
  const valor5 = precios[4][0]


  if(nombreComponente == valor1 ){
    let arrayPrecios = []
    arrayPrecios.push(precios[0][1])
    const resultado = document.getElementById('resultado')
    resultado.innerHTML = `<td></td><td>${datosVenta[0]}</td><td>${datosVenta[2]}</td><td>${datosVenta[1]}</td><td>${arrayPrecios[0]}</td>`
    modal_container.classList.remove('show');
   
  }else if(nombreComponente == valor2 ){
    let arrayPrecios = []
    arrayPrecios.push(precios[1][1])
    const resultado = document.getElementById('resultado')
    resultado.innerHTML = `<td></td><td>${datosVenta[0]}</td><td>${datosVenta[2]}</td><td>${datosVenta[1]}</td><td>${arrayPrecios[0]}</td>`
    modal_container.classList.remove('show');
    
  }else if(nombreComponente == valor3 ){
    let arrayPrecios = []
    arrayPrecios.push(precios[2][1])
    const resultado = document.getElementById('resultado')
    resultado.innerHTML = `<td></td><td>${datosVenta[0]}</td><td>${datosVenta[2]}</td><td>${datosVenta[1]}</td><td>${arrayPrecios[0]}</td>`
    modal_container.classList.remove('show');
    
  }else if(nombreComponente == valor4 ){
    let arrayPrecios = []
    arrayPrecios.push(precios[3][1])
    const resultado = document.getElementById('resultado')
    resultado.innerHTML = `<td></td><td>${datosVenta[0]}</td><td>${datosVenta[2]}</td><td>${datosVenta[1]}</td><td>${arrayPrecios[0]}</td>`
    modal_container.classList.remove('show');
    
  }else if(nombreComponente == valor5 ){
    let arrayPrecios = []
    arrayPrecios.push(precios[4][1])
    const resultado = document.getElementById('resultado')
    resultado.innerHTML = `<td></td><td>${datosVenta[0]}</td><td>${datosVenta[2]}</td><td>${datosVenta[1]}</td><td>${arrayPrecios[0]}</td>`
    modal_container.classList.remove('show');
    
  }else{
    console.log('nada')
    modal_container.classList.remove('show');

  }

}

saveBtn.addEventListener('click', (event) => {
  event.preventDefault() 
  tabla()


  });


})

