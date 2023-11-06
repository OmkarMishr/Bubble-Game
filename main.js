function BubbleMaker(){
        var cullter = ''
    
    for(i=1;i<=133;i++){
        var rn = Math.floor(Math.random()*10)
        cullter += `<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector('.pbottom').innerHTML = cullter;
    }
    var timer = 60;
    function runTimer(){
        setInterval(function(){
            if(timer>0){
                timer--;
                document.querySelector('#timerval').textContent = timer;
            }
            else{
                clearInterval(timer);
                document.querySelector('.pbottom').innerHTML = '<h1>Game Over<br>Press F5 to replay</h1>';        
            }
        },1000)
    }
    var hitrn ;
    function getNewHit(){
        hitrn = Math.floor(Math.random()*10);
        document.querySelector('#hitval').textContent = hitrn ;
    }
    var score = 0;
    function increaseScore(){
        score += 10;
        document.querySelector('#scorevalue').textContent = score;
    
    }
    document.querySelector('.pbottom').addEventListener("click",function(details){
        var clickedNum = Number(details.target.textContent);
        if (hitrn == clickedNum){
            increaseScore();
            BubbleMaker();
            getNewHit();
        }
    
    });
    runTimer();
    BubbleMaker();
    getNewHit();
    