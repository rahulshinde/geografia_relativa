var width;
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('mousemove', setMouse);
  window.addEventListener('resize', setWidth);
  width = window.innerWidth;
  document.getElementById('scroll_speed').addEventListener('input', setScrollSpeed);
});

function setWidth(){
  width = window.innerWidth;
}

function setMouse(event){
  var x = event.clientX;
  if (event.clientX < (width/3)){
    document.body.classList.remove('between');
    document.body.classList.remove('en');
    document.body.classList.add('sp');
  } else if (event.clientX >= (width/3) && event.clientX >= (width * (2/3))){
    document.body.classList.remove('between');
    document.body.classList.remove('sp');
    document.body.classList.add('en');
  } else{
    document.body.classList.add('between');
    document.body.classList.remove('sp');
    document.body.classList.remove('en');
  }
}

function setScrollSpeed(event){
  var value = event.target.value;
  document.getElementById('time').innerHTML = value;
  document.querySelectorAll('.image_inner_wrapper').forEach(function(e){
    e.style.animation = 'scroll linear ' + value + 's infinite';
  });
}