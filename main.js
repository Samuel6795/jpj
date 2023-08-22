var nomes = [ "Eu", "Papai Tiago", "Mamãe Solange", "Vovó Eliene", "Vovô Manel" ]
 var fotos = [ "..jpg", "pai.jpg", "mae.jpg", "vovó.jpg", "vovô.png" ] var i = 0;
 function proximoslide() { document.getElementById("textonomes").innerHTML = nomes[i];
 document.getElementById("album").src = fotos[i]; i++; 
 if(i>4){ i=0; } }