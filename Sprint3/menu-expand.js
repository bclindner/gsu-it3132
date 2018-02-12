//simple menu expander
function toggleDivHeight(element,height){
  div = document.getElementById(element);
  if(div.style.height != height){
    div.style.height = height;
  }
  else{
    div.style.height = "0";
  }
}
function toggleDivDisplay(element,display){
  div = document.getElementById(element);
  if(div.style.display != display){
    div.style.display = display;
  }
  else{
    div.style.display = "none";
  }
}
