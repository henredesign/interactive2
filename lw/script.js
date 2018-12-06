let bb = document.querySelector('#bb')
let vb = document.querySelector('#vb')
let h = document.querySelector('#h')
let r = document.querySelector('#r')
let index = 0
let info = document.querySelector('#b10')
let br = document.querySelector('#b9')
let main = document.querySelector('#main')
let one = document.querySelector('#one')
let two = document.querySelector('#two')
let three = document.querySelector('#three')
let four = document.querySelector('#four')
let five = document.querySelector('#five')
let ai = document.querySelector('#artinfo')


bb.addEventListener('mouseover', function(event){

  bb.style.zIndex = 1;

})
bb.addEventListener('mouseleave', function(event){
if(index===0){
  bb.style.zIndex = -1;}
  else if(index===1){
  bb.style.zIndex = 1;}

})

bb.addEventListener('mousedown', function(event){
index = 1
  bb.style.zIndex = 1;
  bb.style.transform = "scale(1.6, 1.6)"
  bb.style.top = "320px"
  bb.style.left = "500px"
  info.style.width = "400px"
  br.style.width = "400px"
  four.style.opacity = 0
  one.style.opacity = 0
  three.style.opacity = 0
  five.style.opacity = 0
  main.style.background ="#f7df00"
  vb.style.background ="black"
  h.style.background ="black"
  r.style.background ="black"


})


vb.addEventListener('mouseover', function(event){

  vb.style.zIndex = 1;

})
vb.addEventListener('mouseleave', function(event){

  if(index===0){
  vb.style.zIndex = -1;}
  else if(index===1){
  vb.style.zIndex = 1;}

})


vb.addEventListener('mousedown', function(event){
index = 1
  vb.style.zIndex = 1;
  vb.style.transform = "scale(1.6, 1.6)"
  vb.style.top = "320px"
  vb.style.left = "500px"
  info.style.width = "400px"
  br.style.width = "400px"
  four.style.opacity = 0
  one.style.opacity = 0
  two.style.opacity = 0
  five.style.opacity = 0
  main.style.background ="#f7df00"
  bb.style.background ="#f7df00"
  h.style.background ="black"
  r.style.background ="black"

})

h.addEventListener('mouseover', function(event){

  h.style.zIndex = 1;

})
h.addEventListener('mouseleave', function(event){

 if(index===0){
  h.style.zIndex = -1;}
  else if(index===1){
  h.style.zIndex = 1;}

})

h.addEventListener('mousedown', function(event){
index = 1
  h.style.zIndex = 1;
  h.style.transform = "scale(1.6, 1.6)"
  h.style.top = "320px"
  h.style.left = "500px"
  info.style.width = "400px"
  br.style.width = "400px"
  two.style.opacity = 0
  one.style.opacity = 0
  three.style.opacity = 0
  five.style.opacity = 0
main.style.background ="#f7df00"
   bb.style.background ="#f7df00"
  vb.style.background ="#f7df00"
  h.style.background ="#f7df00"
  r.style.background ="black"

})

r.addEventListener('mouseover', function(event){

  r.style.zIndex = 1;

})
r.addEventListener('mouseleave', function(event){

  if(index===0){
  r.style.zIndex = -1;}
  else if(index===1){
  r.style.zIndex = 1;}

})

r.addEventListener('mousedown', function(event){
index = 1
  r.style.zIndex = 1;
  r.style.transform = "scale(1.6, 1.6)"
  r.style.top = "320px"
  r.style.left = "500px"
  info.style.width = "400px"
  br.style.width = "400px"
  four.style.opacity = 0
  one.style.opacity = 0
  three.style.opacity = 0
  two.style.opacity = 0
main.style.background ="#f7df00"
   bb.style.background ="#f7df00"
  vb.style.background ="#f7df00"
  h.style.background ="#f7df00"



})

main.addEventListener('mousedown', function(event){
index = 1
  main.style.transform = "scale(1.6, 1.6)"
  main.style.top = "320px"
  main.style.left = "500px"
  info.style.width = "400px"
  br.style.width = "400px"
  four.style.opacity = 0
  two.style.opacity = 0
  three.style.opacity = 0
  five.style.opacity = 0
  bb.style.background ="black"
  vb.style.background ="black"
  h.style.background ="black"
  r.style.background ="black"
  ai.style.display = "block"
ai.style.opacity = 1

})

info.addEventListener('mousedown', function(event){
  index = 0
  main.style.transform = "scale(1, 1)"
  bb.style.transform = "scale(1, 1)"
  vb.style.transform = "scale(1, 1)"
  h.style.transform = "scale(1, 1)"
  r.style.transform = "scale(1, 1)"
  main.style.top = "380px"
  main.style.left = "440px"
  bb.style.top = "360px"
  bb.style.left = "460px"
  vb.style.top = "340px"
  vb.style.left = "480px"
  h.style.top = "320px"
  h.style.left = "500px"
  r.style.top = "300px"
  r.style.left = "520px"
  info.style.width = "200px"
  br.style.width = "200px"
  four.style.opacity = 1
  two.style.opacity = 1
  three.style.opacity = 1
  five.style.opacity = 1
  one.style.opacity = 1
  setTimeout(function(){
  bb.style.zIndex = -1;
vb.style.zIndex = -1;
h.style.zIndex = -1;
r.style.zIndex = -1;}, 500)


})
