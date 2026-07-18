function randomGenerateComputer(){
      const choiceArray = ['rock', 'paper', 'scissor'];
      const randomindex = Math.floor(Math.random()*3);
      return choiceArray[randomindex]
      
}

randomGenerateComputer()

let userscore =  0;
let comscore =  0;


const userscores = document.getElementById('user-score') 
const comscores = document.getElementById('comp-score') 

if(localStorage.getItem('userscores')){
      userscore = localStorage.getItem('userscores');
      userscores.innerHTML = userscore;
}
if(localStorage.getItem('comscores')){
      comscore = localStorage.getItem('comscores')
      comscores.innerHTML = comscore;
}


const cominput = document.getElementById('comp-picked');
const userinput = document.getElementById('user-picked');


const rockbtn = document.getElementById('rock');
const paperbtn = document.getElementById('paper');
const scissorbtn = document.getElementById('scissor');

const gamemsg = document.getElementById('game-message')



function playgame(userchoices){
      const comchoice = randomGenerateComputer();
      if(comchoice == "rock"){ 
            cominput.innerHTML = "🪨"
      }
      if(comchoice == "paper"){ 
            cominput.innerHTML = "📄"
      }
      if(comchoice == "scissor"){
            cominput.innerHTML = "✂️"
      }
     
      if(userchoices == "rock"){ 
            userinput.innerHTML = "🪨"
      }
      if(userchoices == "paper"){ 
            userinput.innerHTML = "📄"
      }
      if(userchoices == "scissor"){
            userinput.innerHTML = "✂️"
      }


      if((userchoices == "rock" && comchoice== "scissor") || 
         (userchoices == "paper" && comchoice == "rock")  ||
         (userchoices == "scissor" && comchoice == "paper"))
         {
             userscore++;
             userscores.innerHTML = userscore;
             gamemsg.innerHTML = "User has been winned!";
             localStorage.setItem('userscores' , userscore)
         }
      else if(userchoices == comchoice)
          {
              gamemsg.innerHTML = "Game has been Tie!"
          }
      else 
           {
            comscore++;
            comscores.innerHTML = comscore;
            gamemsg.innerHTML = "Computer has been winned!";
            localStorage.setItem('comscores' , comscore)
           }

}


rockbtn.addEventListener('click', ()=>{
       userchoice = "rock"
       playgame(userchoice)
})

paperbtn.addEventListener('click', ()=>{
      userchoice = "paper"
      playgame(userchoice)
})

scissorbtn.addEventListener('click', ()=>{
      userchoice = "scissor"
      playgame(userchoice)
})