function getNumber(num){
var myresult=document.getElementById("result");
myresult.value+=num;
}
function clearResultfunc(){
    var clear=document.getElementById("result");
    clear.value ="";
}
function evalute(){
    var evalution=document.getElementById("result");
    evalution.value=eval(evalution.value);
}
function clearEach() {
    var clear = document.getElementById("result");
    clear.value = clear.value.slice(0, -1);
  }
  
  
  
  
  
  
  