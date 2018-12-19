

    
    let box1 = document.getElementById('box1')
    let box2 = document.getElementById('box2')
    let box3 = document.getElementById('box3')
    let h1 = document.getElementById('h1')
    let h1wrap = document.getElementById('h1wrapper')

    box1.addEventListener('click' , function1)
    box2.addEventListener('click' , function2)
    box3.addEventListener('click' , function3)

    let score = 0



function function1(){
    if(Math.floor(Math.random()*(1 - 3) + 3) === 1){
       
       box1.innerHTML = '.'
       box2.innerHTML = ''
       box3.innerHTML = ''
       box1.style.backgroundColor =  'rgba(245, 245, 245, 0.055)'
       box2.style.backgroundColor =  'rgba(245, 245, 245, 0.055)'
       box3.style.backgroundColor =  'rgba(245, 245, 245, 0.055)'
       h1.innerHTML = 'YOU WON!'
       h1wrap.style.backgroundColor = 'rgba(245, 245, 245, 0.055)'
       h1.style.color =  "rgba(36, 26, 11, 0.877)"
       score++
       document.getElementById('score').innerHTML = `Your score: ${score}`
       
    }else{
       box1.innerHTML = ''
       box2.innerHTML = ''
       box3.innerHTML = '.'
       box1.style.backgroundColor =  'rgba(245, 245, 245, 0.055)'
       box2.style.backgroundColor =  'rgba(245, 245, 245, 0.055)'
       box3.style.backgroundColor =  'rgba(245, 245, 245, 0.055)'
       h1.innerHTML = 'LOOOSER!'
       h1wrap.style.backgroundColor = 'rgba(245, 245, 245, 0.055)'
       h1.style.color =  "rgba(36, 26, 11, 0.877)"
       score--
       document.getElementById('score').innerHTML = `Your score: ${score}`

    }
      box1.style.animation = false; 
      box1.style.animationIterationCount = false; 
      box2.style.animation = false; 
      box2.style.animationIterationCount = false; 
      box3.style.animation = false; 
      box3.style.animationIterationCount = false; 
   }

function function2(){
   if(Math.floor(Math.random()*(1 - 3) + 3) === 1){
       box2.innerHTML = '.'
       box1.innerHTML = ''
       box3.innerHTML = ''
       box1.style.backgroundColor =  'rgba(245, 245, 245, 0.055)'
       box2.style.backgroundColor =  'rgba(245, 245, 245, 0.055)'
       box3.style.backgroundColor =  'rgba(245, 245, 245, 0.055)'
       h1.innerHTML = 'YOU WON!'
       h1wrap.style.backgroundColor = 'rgba(245, 245, 245, 0.055)'
       h1.style.color =  "rgba(36, 26, 11, 0.877)"
       score++
       document.getElementById('score').innerHTML = `Your score: ${score}`


   }else{
       box3.innerHTML = ''
       box2.innerHTML = ''
       box1.innerHTML = '.'
       box1.style.backgroundColor =  'rgba(245, 245, 245, 0.055)'
       box2.style.backgroundColor =  'rgba(245, 245, 245, 0.055)'
       box3.style.backgroundColor =  'rgba(245, 245, 245, 0.055)'
       h1.innerHTML = 'LOOOSER!'
       h1wrap.style.backgroundColor = 'rgba(245, 245, 245, 0.055)'
       h1.style.color =  "rgba(36, 26, 11, 0.877)"
       score--
       document.getElementById('score').innerHTML = `Your score: ${score}`
   }
      box1.style.animation = false; 
      box1.style.animationIterationCount = false; 
      box2.style.animation = false; 
      box2.style.animationIterationCount = false; 
      box3.style.animation = false; 
      box3.style.animationIterationCount = false; 
}

function function3(){
    if(Math.floor(Math.random()*(1 - 3) + 3) === 1){
       box1.innerHTML = ''
       box2.innerHTML = ''
       box3.innerHTML = '.'
       box1.style.backgroundColor =  'rgba(245, 245, 245, 0.055)'
       box2.style.backgroundColor =  'rgba(245, 245, 245, 0.055)'
       box3.style.backgroundColor =  'rgba(245, 245, 245, 0.055)'
       h1.innerHTML = 'YOU WON!'
       h1wrap.style.backgroundColor = 'rgba(245, 245, 245, 0.055)'
       h1.style.color = "rgba(36, 26, 11, 0.877)"
       score++
       document.getElementById('score').innerHTML = `Your score: ${score}`

    }else{
       box1.innerHTML = ''
       box2.innerHTML = '.'
       box3.innerHTML = ''
       box1.style.backgroundColor =  'rgba(245, 245, 245, 0.055)'
       box2.style.backgroundColor =  'rgba(245, 245, 245, 0.055)'
       box3.style.backgroundColor =  'rgba(245, 245, 245, 0.055)'
       h1.innerHTML = 'LOOOSER!'
       h1wrap.style.backgroundColor = 'rgba(245, 245, 245, 0.055)'
       h1.style.color =  "rgba(36, 26, 11, 0.877)"
       score--
       document.getElementById('score').innerHTML = `Your score: ${score}`
    }
      box1.style.animation = false; 
      box1.style.animationIterationCount = false; 
      box2.style.animation = false; 
      box2.style.animationIterationCount = false; 
      box3.style.animation = false; 
      box3.style.animationIterationCount = false; 
   }
   
  document.getElementById('btn').addEventListener('click', function4)

   function function4(){
       box1.style.backgroundColor = "rgba(105, 70, 26, 0.698)"
       box2.style.backgroundColor = "rgba(105, 70, 26, 0.698)"
       box3.style.backgroundColor = "rgba(105, 70, 26, 0.698)"
       box1.innerHTML = ''
       box2.innerHTML = ''
       box3.innerHTML = ''
       h1.innerHTML = 'CHOOSE ONE:'
       h1wrap.style.backgroundColor = "rgba(36, 26, 11, 0.897)"
       h1.style.color = 'rgb(202, 143, 77)'
       
       box1.style.animation = "shake 0.9s , move 2.1s" ;
       box1.style.animationIterationCount = 'infinite, 2';
      
       box2.style.animation = "shake 0.8s, move2 2.2s"; 
       box2.style.animationIterationCount = 'infinite, 2';
       
       box3.style.animation = "shake 0.9s, move3 2.1s"; 
       box3.style.animationIterationCount = 'infinite, 2';
     
       
   }

   
   
      