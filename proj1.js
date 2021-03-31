'use strict'
let data,trys=0,score=20,randomNo,congratulationFlag=0,highScore=0,retry=0;

randomNo=Math.floor((Math.random() * 20) + 1);
console.log(randomNo);
document.querySelector('.button1').addEventListener('click',
function(){
  randomNo=Math.floor((Math.random() * 20) + 1);
console.log(randomNo);
score=20;
trys=0;
data=0;
retry=0;
congratulationFlag=0
document.body.style.backgroundColor = "#ffe6e6";
document.querySelector('.score').textContent='?';
document.querySelector('.m3').textContent='Guess a number!!!';
document.querySelector('.m4_1').textContent='0';

document.querySelector('.box').style.backgroundColor='#ffb3d9';
        document.querySelector('.box').style.width='96px ';
        document.querySelector('.box').style.transform = "none";
        document.querySelector('.box').style.height='80px ';
      document.querySelector('.box').style.borderRadius='5px'; 
      document.querySelector('.box').style.border='0px solid #ffb3d9';

      document.querySelector('.line').style.border='1px solid #ffb3d9';
      document.querySelector('.line').style.backgroundColor='#ffb3d9';
      document.querySelector('.line').style.borderStyle='inset';

      document.querySelector('body').style.backgroundColor='#ffe6e6';
      document.querySelector('body').style.color='#ffb3d9';

       document.querySelector('.curve1').style.backgroundColor='rgba(255, 255, 255,0)'; 
       document.querySelector('.curve1').style.border='1px solid rgba(255, 255, 255,0)';
       document.querySelector('.curve1').style.width='0px'; 
       document.querySelector('.curve1').style.height='0px'; 
       document.querySelector('.curve1_1').style.backgroundColor='rgba(255, 255, 255,0)'; 
       document.querySelector('.curve1_1').style.border='1px solid rgba(255, 255, 255,0)'; 
       document.querySelector('.curve1_1').style.width='0px'; 
       document.querySelector('.curve1_1').style.height='0px'; 

       document.querySelector('.curve2').style.backgroundColor='rgba(255, 255, 255,0)'; 
       document.querySelector('.curve2').style.border='1px solid rgba(255, 255, 255,0)'; 
       document.querySelector('.curve2').style.width='0px'; 
       document.querySelector('.curve2').style.height='0px';
       document.querySelector('.curve2_1').style.backgroundColor='rgba(255, 255, 255,0)'; 
       document.querySelector('.curve2_1').style.border='1px solid rgba(255, 255, 255,0)';
       document.querySelector('.curve2_1').style.width='0px'; 
       document.querySelector('.curve2_1').style.height='0px';

       document.querySelector('.input1').style.backgroundColor=' #ffe6e6';
       document.querySelector('.input1').style.color='#ffb3d9';
       document.querySelector('.input1').style.borderColor='#ffb3d9';

       document.querySelector('.button1').style.backgroundColor='#ffe6e6';
 
       document.querySelector('.button1').style.color='#ffb3d9';
       document.querySelector('.button1').style.borderColor='#ffb3d9';
       
       document.querySelector('.button2').style.backgroundColor=' #ffe6e6';
       document.querySelector('.button2').style.color='#ffb3d9';
       document.querySelector('.button2').style.borderColor='#ffb3d9';

});
document.querySelector('.button2').addEventListener('click',
function()
{
    data=document.querySelector('.input1').value;
    if(data==='')
    document.querySelector('.m3').textContent='Enter a value🚫';
    else if((data>20||data<1)&&(congratulationFlag==0))
    {
      document.querySelector('.m3').textContent='INVALID ENTRY❌';
     
    }
    else if(data<=20&&data>=1&&score>=1&&trys<=19&&congratulationFlag==0&&retry==0)
        {
      trys+=1;
      if(data==randomNo)
      {
 
        document.querySelector('.box').style.backgroundColor='#339933';
        document.querySelector('.box').style.transform = "scale(1.4)";
        document.querySelector('.box').style.width='90px ';
        document.querySelector('.box').style.height='90px ';
      document.querySelector('.box').style.borderRadius='100% 100% 100% 100% '; 
      document.querySelector('.box').style.border='3px solid white';

      document.querySelector('.line').style.border='0px solid white';
      document.querySelector('.line').style.backgroundColor='white';
      document.querySelector('body').style.backgroundColor=' #339933';

      document.querySelector('body').style.color='white';
       document.querySelector('.curve1').style.backgroundColor='#339933'; 
       document.querySelector('.curve1').style.border='1px solid white'; 
       document.querySelector('.curve1').style.transform='scale(7)';
       document.querySelector('.curve1').style.width='50px';
       document.querySelector('.curve1').style.height='50px';
       document.querySelector('.curve1').style.borderRadius='30% 30% 30% 30%';
       document.querySelector('.curve1_1').style.backgroundColor='#339933'; 
       document.querySelector('.curve1_1').style.border='1px solid white';
       document.querySelector('.curve1_1').style.transform='scale(8)';
       document.querySelector('.curve1_1').style.width='25px';
       document.querySelector('.curve1_1').style.height='15px';
       document.querySelector('.curve1_1').style.borderRadius='0% 0% 3% 3%';


       document.querySelector('.curve2').style.backgroundColor='#339933'; 
       document.querySelector('.curve2').style.border='1px solid white'; 
       document.querySelector('.curve2').style.transform='scale(7)';
       document.querySelector('.curve2').style.width='50px';
       document.querySelector('.curve2').style.height='30px';
       document.querySelector('.curve2').style.borderRadius='40% 40% 0% 0%';
       document.querySelector('.curve2_1').style.backgroundColor='#339933'; 
       document.querySelector('.curve2_1').style.border='1px solid white'; 
       document.querySelector('.curve2_1').style.transform='scale(8)';
       document.querySelector('.curve2_1').style.width='25px';
       document.querySelector('.curve2_1').style.height='15px';
       document.querySelector('.curve2_1').style.borderRadius='3% 3% 0% 0%';
      

       document.querySelector('.input1').style.backgroundColor=' #339933';
       document.querySelector('.input1').style.color='white';
       document.querySelector('.input1').style.borderColor='white';

       document.querySelector('.button1').style.backgroundColor=' #339933';
       document.querySelector('.button1').style.color='white';
       document.querySelector('.button1').style.borderColor='white';

       document.querySelector('.button2').style.backgroundColor=' #339933';
       document.querySelector('.button2').style.color='white';
       document.querySelector('.button2').style.borderColor='white';

        document.querySelector('.m3').textContent='Congratulations 🥳🥇';
        if(highScore<score){
        highScore=score;
        document.querySelector('.m5_1').textContent=highScore;
      }
        congratulationFlag=1;
      }
     
      else{
          if(data>randomNo)
          document.querySelector('.m3').textContent='Too High😕';
          else if(data<randomNo)
          document.querySelector('.m3').textContent='Too Low😣';
         score=score-1;
      }
      document.querySelector('.m4_1').textContent=trys;
      document.querySelector('.score').textContent=score;
    }
    else if((score==0&&trys==20)&&(congratulationFlag==0)){
        document.body.style.backgroundColor = " red";
        retry=1;
        congratulationFlag=1;
        document.querySelector('.m3').textContent='RETRY🚫🚫';
    }
    
    
});
