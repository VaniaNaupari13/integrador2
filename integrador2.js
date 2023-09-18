alert ("Ejercicio integrador2");
alert ("Este es la trivia de la primavera");
nom = prompt("ingresa tu nombre");

res1 = prompt("¿Como se llama el primer dia de la primavera? \nA: Primer dia de la primavera\nB: Equinocio de primaver\nC: Equinocio de Invierno")
if (res1=="A"){
res1=0
}
else if(res=="B"){
res1=25
}
else if(res=="C"){
res1=0
}
else{
    alert(nom,"no es una opcion válida")
}


res2 = prompt("¿Que sucede en el polo norte en primavera? \nA: 6 meses de luz\nB: 6 meses de oscuridad E\nC: 6 meses alternando")
if (res2=="A"){
res2=0
}
else if(res=="B"){
res2=0
}
else if(res=="C"){
res2=25
}
else{
    alert(nom,"no es una opcion válida")
}

var total = res1 + res2
if(total>=25){
    document.write (nom, "sabes de primavera")
}
else{
    document.write (nom, "aprende más te falta")
}

