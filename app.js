//Principal
let btnPizza = document.getElementById("btnPizza");
let btnBurger = document.getElementById("btnBurger");
let subseccion1 = document.getElementById("subseccion1");
let subseccion2 = document.getElementById("subseccion2");
let btnImg1 = document.getElementById("btnImg1");
let btnImg2 = document.getElementById("btnImg2");
let total = document.getElementById("total");

//Sonidos
let tap = new Audio("sound/tap.wav");
let resetSon = new Audio("sound/reset.wav");

//Precios
let precioMargarita = Number(document.getElementById("precioMargarita").innerHTML);
let precioHawaiana = Number(document.getElementById("precioHawaiana").innerHTML);
let precioPrimavera = Number(document.getElementById("precioPrimavera").innerHTML);
let precioClasica = Number(document.getElementById("precioClasica").innerHTML);
let precioCheese = Number(document.getElementById("precioCheese").innerHTML);
let precioCrispy = Number(document.getElementById("precioCrispy").innerHTML);

//Botones
//Pizzas
let margarita = document.getElementById("margarita");
let hawaiana = document.getElementById("hawaiana");
let primavera = document.getElementById("primavera");
//Hamburguesas
let clasica = document.getElementById("clasica");
let cheese = document.getElementById("cheese");
let crispy = document.getElementById("crispy");
//Reiniciar
let reset = document.getElementById("reset");

//Funciones
let costo = 0;

//Pizzas
margarita.addEventListener("click", function() {
 costo += precioMargarita;
 total.innerHTML = costo + " $";
 tap.play();
});

hawaiana.addEventListener("click", function() {
    costo += precioHawaiana;
    total.innerHTML = costo + " $";
    tap.play();
   });

   primavera.addEventListener("click", function() {
    costo += precioPrimavera;
    total.innerHTML = costo + " $";
    tap.play();
   });

//Hamburguesas
   clasica.addEventListener("click", function() {
    costo += precioClasica;
    total.innerHTML = costo + " $";
    tap.play();
   });

   cheese.addEventListener("click", function() {
    costo += precioCheese;
    total.innerHTML = costo + " $";
    tap.play();
   });

   crispy.addEventListener("click", function() {
    costo += precioCrispy;
    total.innerHTML = costo + " $";
    tap.play();
   });


//Esconder menu al cargar la pagina y cargar algunas cosas
window.addEventListener("load", function () {
    subseccion1.style.display = "none";
    subseccion2.style.display = "none";
    tap.load();
  });

//Mostrar pizzas
btnPizza.addEventListener("click", function () {
  if (subseccion1.style.display === "none") {
    subseccion1.style.display = "block";
    btnImg1.setAttribute("src", "img/arriba.png");
  } else {
    subseccion1.style.display = "none";
    btnImg1.setAttribute("src", "img/abajo.png");
  }
});

//Mostrar hamburgesas
btnBurger.addEventListener("click", function () {
  if (subseccion2.style.display === "none") {
    subseccion2.style.display = "block";
    btnImg2.setAttribute("src", "img/arriba.png");
  } else {
    subseccion2.style.display = "none";
    btnImg2.setAttribute("src", "img/abajo.png");
  }
});

//Reiniciar el costo
reset.addEventListener("click", function() {
  costo = 0;
  total.innerHTML = costo + "$";
  resetSon.play();
})
