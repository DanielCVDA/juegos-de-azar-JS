const marcador = JSON.parse(localStorage.getItem('marcador'))||{
  victorias : 0,
  derrotas : 0,
  empates : 0
}
localStorage.setItem('marcador',JSON.stringify(marcador));
document.querySelector(".js-marcador").innerHTML=`Victorias: ${marcador.victorias} Derrotas: ${marcador.derrotas} Empates: ${marcador.empates}`;
function jugarPiedraPapelTijeras(jugada){
  const valorAleatorio = Math.random();
  let jugadaCPU;
  if(valorAleatorio<=1/3){
    jugadaCPU='Piedra';
  }else if(valorAleatorio>=1/3&&valorAleatorio<=2/3){
    jugadaCPU='Papel';
    
  }else{
    jugadaCPU='Tijeras';
  }
  if(jugada==='Piedra'){
    if(jugadaCPU==='Piedra'){
      mostrarResultado('empatado',jugada,jugadaCPU);
      actualizarMarcador('empate');
    }else if(jugadaCPU==='Papel'){
      mostrarResultado('perdido',jugada,jugadaCPU);
      actualizarMarcador('derrota');
    }else if(jugadaCPU==='Tijeras'){
      mostrarResultado('ganado',jugada,jugadaCPU);
      actualizarMarcador('victoria');
    }
  }else if(jugada==='Papel'){
    if(jugadaCPU==='Piedra'){
      mostrarResultado('ganado',jugada,jugadaCPU);
      actualizarMarcador('victoria');
    }else if(jugadaCPU==='Papel'){
      mostrarResultado('empatado',jugada,jugadaCPU);
      actualizarMarcador('empate');
    }else if(jugadaCPU==='Tijeras'){
      mostrarResultado('perdido',jugada,jugadaCPU);
      actualizarMarcador('derrota');
    }
  }else if(jugada==='Tijeras'){
    if(jugadaCPU==='Piedra'){
      mostrarResultado('perdido',jugada,jugadaCPU);
      actualizarMarcador('derrota');
    }else if(jugadaCPU==='Papel'){
      mostrarResultado('ganado',jugada,jugadaCPU);
      actualizarMarcador('victoria');
    }else if(jugadaCPU==='Tijeras'){
      mostrarResultado('empatado',jugada,jugadaCPU);
      actualizarMarcador('empate');
    }
  }
}

function actualizarMarcador(resultado){
  if(resultado=='victoria'){
    marcador.victorias++;
    localStorage.setItem('marcador',JSON.stringify(marcador));
    document.querySelector(".js-marcador").innerHTML=`Victorias: ${marcador.victorias} Derrotas: ${marcador.derrotas} Empates: ${marcador.empates}`;
  }else if(resultado=='derrota'){
    marcador.derrotas++;
    localStorage.setItem('marcador',JSON.stringify(marcador));
    document.querySelector(".js-marcador").innerHTML=`Victorias: ${marcador.victorias} Derrotas: ${marcador.derrotas} Empates: ${marcador.empates}`;
  }else if(resultado=='empate'){
    marcador.empates++;
    localStorage.setItem('marcador',JSON.stringify(marcador));
    document.querySelector(".js-marcador").innerHTML=`Victorias: ${marcador.victorias} Derrotas: ${marcador.derrotas} Empates: ${marcador.empates}`;
  }
}

function mostrarResultado(resultado,jugada,jugadaCPU){
  document.querySelector(".js-resultado").innerHTML=`Has ${resultado}.`;
  document.querySelector(".js-jugada").innerHTML=`Tú
  <img class="move-icon" src="images/${jugada}.png">
  <img class="move-icon" src="images/${jugadaCPU}.png">
  Navegador`;
}

function reiniciarMarcador(){
  marcador.victorias = 0;
  marcador.derrotas = 0;
  marcador.empates = 0;
  localStorage.setItem('marcador',JSON.stringify(marcador));
  document.querySelector(".js-marcador").innerHTML=`Victorias: ${marcador.victorias}, Derrotas: ${marcador.derrotas}, Empates: ${marcador.empates}`;
}