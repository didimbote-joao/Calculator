function insert(num){
   var number = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML= number + num;
}

function clean(){
   document.getElementById('resultado').innerHTML ="";
}