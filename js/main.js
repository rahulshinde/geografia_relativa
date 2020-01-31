var width,
    height,
    image_wrapper_height,
    total_height,
    diff,
    interval,
    current,
    animation_interval;
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('mousemove', setMouse);
  window.addEventListener('resize', resizeHandler);
  
  document.getElementById('image_marker').addEventListener('click', imagesVisible);
  document.getElementById('english_heading').addEventListener('click', englishVisible);
  document.getElementById('spanish_heading').addEventListener('click', spanishVisible);

  current = 0;
  interval = 10;
  width = window.innerWidth;
  height = window.innerHeight;
  // resizeHandler();

  document.querySelectorAll('.async').forEach(function(e){
    loadAsync(e);
  });

  document.querySelectorAll('.foreground_images .async').forEach(function(e){
    hideSome(e);
  });

  setTimeout(function(){
    document.body.classList.add('mobile_animating');
  }, 1000);
  // animateImages();
});

// function animateImages(){
//   console.log(height);
//   console.log(image_wrapper_height);
//   console.log(total_height);
//   console.log(diff);
//   animation_interval = setInterval(function(){
//     current = current + 1;
//     if (current > interval){
//       document.body.classList.add('no_transition');
//       resetAnimation();
//       return;
//     } 
//     var position = current * diff;
//     // console.log(position);
//     document.querySelectorAll('.image_inner_wrapper').forEach(function(e){
//       e.style.transform = 'translateY(-' + position + 'px)';
//     });
//   }, 1000);
// }

function resetAnimation(){
  clearInterval(animation_interval);
  document.querySelectorAll('.image_inner_wrapper').forEach(function(e){
    e.style.transform = 'translateY(' + 0 + 'px)';
  });
  setTimeout(function(){
    document.body.classList.remove('no_transition');
    current = 0;
    animateImages();
  }, 50)
}

function resizeHandler(){
  width = window.innerWidth;
  height = window.innerHeight;
  image_wrapper_height = document.querySelector('.image_inner_wrapper').offsetHeight;
  total_height = image_wrapper_height;
  diff = total_height/interval;
}

function setMouse(event){
  if (width <= 1100){
    return;
  }
  var x = event.clientX;
  if (event.clientX < (width/3)){
    spanishVisible();
  } else if (event.clientX >= (width/3) && event.clientX >= (width * (2/3))){
    englishVisible();
  } else{
    imagesVisible();
  }
}

function loadAsync(img){
  img.setAttribute('src', img.dataset.src);  
}

function hideSome(img){
  if (current < 10){
    if (Math.random() < 0.5){
      current = current + 1;
      img.classList.add('mobile_image')
    }
  }
}

function englishVisible(){
  document.querySelectorAll('.button').forEach(function(e){
    e.classList.remove('selected')
  });
  document.getElementById('english_heading').classList.add('selected');
  document.body.classList.remove('between');
  document.body.classList.remove('sp');
  document.body.classList.add('en');
}

function imagesVisible(){
  document.body.classList.add('between');
  document.body.classList.remove('sp');
  document.body.classList.remove('en');
}

function spanishVisible(){
  document.querySelectorAll('.button').forEach(function(e){
    e.classList.remove('selected')
  });
  document.getElementById('spanish_heading').classList.add('selected');
  document.body.classList.remove('between');
  document.body.classList.remove('en');
  document.body.classList.add('sp');
}