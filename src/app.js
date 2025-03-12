

window.onload = function() {
    let who = ['La serpiente', 'La tia fati', 'Mi primo', 'Un leon'];
    let action = ['se comió', 'vendió', 'robó', 'derribó'];
    let what = ['mi casa', 'mi telefono', 'la bici'];
    let when = ['ayer mismo.', 'cuanto estaba cansado.', 'mientras estaban en el baño.', 'despues de robar un banco.', 'antes de la excursion a marte.'];
  
    const elementoId = document.getElementById("excuse");
    const boton = document.getElementsByTagName("button")[0];
    let arrayPush = [];
    // 1. Generar numero aleatorio
     // 2. Generar array aleatorio
      // 3.  Concatenar array aleatorio
       // 4. insertat en innerHtml el array aleatorio
    
        const generaNumeroAleatorio = (elArray,nombre) => {
          const indexArray = Math.floor(Math.random() * elArray.length);
          generaArrayAleatorio(elArray, indexArray, nombre);
        }
        

        const generaArrayAleatorio= (elarray, indexArray, nombre) => {
          switch (nombre){
            case "who":
              arrayPush.push(elarray[indexArray])
              break;
              case "action":
                arrayPush.push(elarray[indexArray])
              break;
              case "what":
                arrayPush.push(elarray[indexArray])
              break;
              case "when":
                arrayPush.push(elarray[indexArray])
              break;
          }
  
        }
  
        const concatenarAleatorio = () => {
        elementoId.innerHTML ="";
        arrayPush = [];
         
        generaNumeroAleatorio(who,"who");
        generaNumeroAleatorio(action,"action");
        generaNumeroAleatorio(what,"what");
        generaNumeroAleatorio(when,"when");
  
        const creadoArrray = arrayPush.join(" ");
        console.log(creadoArrray)
        elementoId.innerHTML = creadoArrray;
          
        }
  
        boton.addEventListener("click",concatenarAleatorio);
  
  
  }; 