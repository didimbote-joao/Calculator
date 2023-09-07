function insert(num){
   var number = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML= number + num;
}

function clean(){
   document.getElementById('resultado').innerHTML ="";
}

function back() {
   var result = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML =result.substring(0, result.length -1)
}

function calculate() {
   var result = document.getElementById('resultado').innerHTML;
   if (result) {
      document.getElementById('resultado').innerHTML = eval(result);
   }
   else{
      document.getElementById('resultado').innerHTML ="";  
   }
}