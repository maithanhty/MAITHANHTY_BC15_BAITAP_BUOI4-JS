function chanle(){
   var so1 = document.getElementById("so1").value * 1;
   var so2 = document.getElementById("so2").value * 1;
   var so3 = document.getElementById("so3").value * 1;
   var sochan = 0;
   var sole = 0;

   if(so1 % 2 === 0){
       sochan = sochan + 1;
   }else{
       sole = sole + 1;
}
if(so2 % 2 === 0){
    sochan = sochan + 1;
}else{
    sole = sole + 1;
}
if(so3 % 2 === 0){
    sochan = sochan + 1;
}else{
    sole = sole + 1;
}

document.getElementById("footerCardChanle").innerHTML= "số chẵn có " + sochan + "," + "số lẻ có " + sole;
}