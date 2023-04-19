var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

          pincel.fillStyle="grey";
          pincel.fillRect(0,0,600,400);

          function exhibirAlerta(evento){
                   // console.log(evento);
                    //alert("Usted hizo un click");
                     //page X acabarca toda la pagina, para que el origen marque cero le restamos lo restante
                    var x = evento.pageX - pantalla.offsetLeft;
                    var y = evento.pageY - pantalla.offsetTop;
                    console.log(evento);
                    alert(x+","+y);
          }
          //para que aparezca una alerta y muestre las coordenadas del click
          //pantalla.onclick = exhibirAlerta;

          function dibujarCirculo(evento){
                    var x = evento.pageX -pantalla.offsetLeft;
                    var y = evento.pageY - pantalla.offsetTop;
                    
                    pincel.fillStyle = "green";
                    pincel.beginPath();
                    pincel.arc(x, y, 10, 0, 2*3.14);
                    pincel.fill();
                    console.log(x+","+y);
          }
          pantalla.onclick = dibujarCirculo;

