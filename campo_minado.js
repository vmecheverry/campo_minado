

var numeroMinas= prompt("Ingresar el numero de minas");

console.log(numeroMinas);

var minasMarcadas=0;

var campo_de_juego=new Array(208);

for (var i = 0; i < campo_de_juego.length; i++) {
	caja= new Object();
	caja.id=i;
	caja.bomba=0;
	campo_de_juego[i]=caja;
}

cargarMinas(numeroMinas);
$(function(){
	var game = $("#body_game");
	for(var i = 0; i < 208; i++){
		var div =  $("<div class='caja' id="+i+"/>");
		 div.click(function(evt){  
	 		console.log(evt.target.id);
	 		console.log(campo_de_juego[evt.target.id].bomba);
	 		if(campo_de_juego[evt.target.id].bomba==1){
	 			/*background-image: url("images/darkpattern.png"); */
	 			$(evt.target).css("background-image","url('bomb13.png')");  
	 			alert("Perdiste !!!!");
	 		}else{
	 			$(evt.target).css("background-image","url('safety9.png')");  
	 		}

	 	});
 	game.append(div);
	}
});



function cargarMinas (numeroMinas){

	for (var i = 0; i < numeroMinas; i++) {
		posicion=getRandomInt(0,208);

		while(colocarMina(posicion)){
			console.log("Minaaaa"+posicion);
			campo_de_juego[posicion].bomba=1;
		}
	};
	


}  


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function colocarMina(posicion){
	return campo_de_juego[posicion].bomba!=1;
}