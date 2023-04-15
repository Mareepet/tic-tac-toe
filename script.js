

    var gameOver = document.querySelector('.game-End')  
    var reset = document.querySelector('.reset')
    var result = document.querySelector('.result')
    var players = ['X','O']
    var counter = 0;
    
//    var points = 0;

     reset.addEventListener('click',resetGame);  
    //   reset = false;
    // function startGame(boxes) {
        
    var boxes = document.querySelector('.board')
    
    boxes.addEventListener('click',function(event) { 
   
    let box = event.target 
   
    
    if (box.tagName === "DIV") {
    if (box.innerText != '')return;
    if (counter % 2 === 0) {
        // console.log(players[0])
        box.textContent = players[0]
        counter++

    } else {
        // console.log(players[1])
        box.textContent = players[1]
        counter++
    } // box.style.backgroundColor = 'red' ;
    }

    
 // if condition for winning declaration
 

if ( boxes.children[0].innerText === 'X' &&  boxes.children[1].innerText === 'X' &&  boxes.children[2].innerText === 'X' ) {
    // for( let i = 0; i < boxes.children.length; i++ ) {
    //      boxes.children[i].style.backgroundColor = "green"
    boxes.children[0].style.backgroundColor = 'green' ;
    console.log(boxes.children[0]+boxes.children[1]+boxes.children[2])
    boxes.children[1].style.backgroundColor = 'green' ;
    boxes.children[2].style.backgroundColor = 'green' ;
    result.textContent = "Player-X Won"
    gameOver.style.display ='flex'   
}
if ( boxes.children[0].innerText === 'O' &&  boxes.children[1].innerText === 'O' &&  boxes.children[2].innerText === 'O' ) {
    // for( let i = 0; i < boxes.children.length; i++ ) {
    //      boxes.children[i].style.backgroundColor = "green"
    boxes.children[0].style.backgroundColor = 'green' ;
    boxes.children[1].style.backgroundColor = 'green' ;
    boxes.children[2].style.backgroundColor = 'green' ;
    result.textContent = "Player-O Won"
    gameOver.style.display ='flex' 
    
}
if ( boxes.children[3].innerText === 'X' &&  boxes.children[4].innerText === 'X' &&  boxes.children[5].innerText === 'X' ) {
    // for( let i = 0; i < boxes.children.length; i++ ) {
    //      boxes.children[i].style.backgroundColor = "green"
    boxes.children[3].style.backgroundColor = 'green' ;
    boxes.children[4].style.backgroundColor = 'green' ;
    boxes.children[5].style.backgroundColor = 'green' ;
    result.textContent = "Player-X Won"
    gameOver.style.display ='flex' 
    
}
if ( boxes.children[3].innerText === 'O' &&  boxes.children[4].innerText === 'O' &&  boxes.children[5].innerText === 'O' ) {
    // for( let i = 0; i < boxes.children.length; i++ ) {
    //      boxes.children[i].style.backgroundColor = "green"
    boxes.children[3].style.backgroundColor = 'green' ;
    boxes.children[4].style.backgroundColor = 'green' ;
    boxes.children[5].style.backgroundColor = 'green' ;
    result.textContent = "Player-O Won"
    gameOver.style.display ='flex' 
    
}
if ( boxes.children[6].innerText === 'X' &&  boxes.children[7].innerText === 'X' &&  boxes.children[8].innerText === 'X' ) {
    // for( let i = 0; i < boxes.children.length; i++ ) {
    //      boxes.children[i].style.backgroundColor = "green"
    boxes.children[6].style.backgroundColor = 'green' ;
    boxes.children[7].style.backgroundColor = 'green' ;
    boxes.children[8].style.backgroundColor = 'green' ;
    result.textContent = "Player-X Won"
    gameOver.style.display ='flex' 
    
}
if ( boxes.children[6].innerText === 'O' &&  boxes.children[7].innerText === 'O' &&  boxes.children[8].innerText === 'O' ) {
    // for( let i = 0; i < boxes.children.length; i++ ) {
    //      boxes.children[i].style.backgroundColor = "green"
    boxes.children[6].style.backgroundColor = 'green' ;
    boxes.children[7].style.backgroundColor = 'green' ;
    boxes.children[8].style.backgroundColor = 'green' ;
    result.textContent = "Player-O Won"
    gameOver.style.display ='flex' 
    
}
if ( boxes.children[0].innerText === 'X' &&  boxes.children[3].innerText === 'X' &&  boxes.children[6].innerText === 'X' ) {
    // for( let i = 0; i < boxes.children.length; i++ ) {
    //      boxes.children[i].style.backgroundColor = "green"
    boxes.children[0].style.backgroundColor = 'green' ;
    boxes.children[3].style.backgroundColor = 'green' ;
    boxes.children[6].style.backgroundColor = 'green' ;
    result.textContent = "Player-X Won"
    gameOver.style.display ='flex' 
    
}
if ( boxes.children[0].innerText === 'O' &&  boxes.children[3].innerText === 'O' &&  boxes.children[6].innerText === 'O' ) {
    // for( let i = 0; i < boxes.children.length; i++ ) {
    //      boxes.children[i].style.backgroundColor = "green"
    boxes.children[0].style.backgroundColor = 'green' ;
    boxes.children[3].style.backgroundColor = 'green' ;
    boxes.children[6].style.backgroundColor = 'green' ;
    result.textContent = "Player-O Won"
    gameOver.style.display ='flex' 
    
}
if ( boxes.children[1].innerText === 'X' &&  boxes.children[4].innerText === 'X' &&  boxes.children[7].innerText === 'X' ) {
    // for( let i = 0; i < boxes.children.length; i++ ) {
    //      boxes.children[i].style.backgroundColor = "green"
    boxes.children[1].style.backgroundColor = 'green' ;
    boxes.children[4].style.backgroundColor = 'green' ;
    boxes.children[7].style.backgroundColor = 'green' ;
    result.textContent = "Player-O Won"
    gameOver.style.display ='flex' 
    
}
if ( boxes.children[1].innerText === 'O' &&  boxes.children[4].innerText === 'O' &&  boxes.children[7].innerText === 'O' ) {
    // for( let i = 0; i < boxes.children.length; i++ ) {
    //      boxes.children[i].style.backgroundColor = "green"
    boxes.children[1].style.backgroundColor = 'green' ;
    boxes.children[4].style.backgroundColor = 'green' ;
    boxes.children[7].style.backgroundColor = 'green' ;
    result.textContent = "Player-O Won"
    gameOver.style.display ='flex' 
    
}
if ( boxes.children[2].innerText === 'X' &&  boxes.children[5].innerText === 'X' &&  boxes.children[8].innerText === 'X' ) {
    // for( let i = 0; i < boxes.children.length; i++ ) {
    //      boxes.children[i].style.backgroundColor = "green"
    boxes.children[2].style.backgroundColor = 'green' ;
    boxes.children[5].style.backgroundColor = 'green' ;
    boxes.children[8].style.backgroundColor = 'green' ;
    result.textContent = "Player-X Won"
    gameOver.style.display ='flex' 
    
}
if ( boxes.children[2].innerText === 'O' &&  boxes.children[5].innerText === 'O' &&  boxes.children[8].innerText === 'O' ) {
    // for( let i = 0; i < boxes.children.length; i++ ) {
    //      boxes.children[i].style.backgroundColor = "green"
    boxes.children[2].style.backgroundColor = 'green' ;
    boxes.children[5].style.backgroundColor = 'green' ;
    boxes.children[8].style.backgroundColor = 'green' ;
    result.textContent = "Player-O Won"
    gameOver.style.display ='flex' 
    
}
if ( boxes.children[0].innerText === 'X' &&  boxes.children[4].innerText === 'X' &&  boxes.children[8].innerText === 'X' ) {
    // for( let i = 0; i < boxes.children.length; i++ ) {
    //      boxes.children[i].style.backgroundColor = "green"
    boxes.children[0].style.backgroundColor = 'green' ;
    boxes.children[4].style.backgroundColor = 'green' ;
    boxes.children[8].style.backgroundColor = 'green' ;
    result.textContent = "Player-X Won"
    gameOver.style.display ='flex' 
    
}
if ( boxes.children[0].innerText === 'O' &&  boxes.children[4].innerText === 'O' &&  boxes.children[8].innerText === 'O' ) {
    // for( let i = 0; i < boxes.children.length; i++ ) {
    //      boxes.children[i].style.backgroundColor = "green"
    boxes.children[0].style.backgroundColor = 'green' ;
    boxes.children[4].style.backgroundColor = 'green' ;
    boxes.children[8].style.backgroundColor = 'green' ;
    result.textContent = "Player-O Won"
    gameOver.style.display ='flex' 
    
}
if ( boxes.children[2].innerText === 'X' &&  boxes.children[4].innerText === 'X' &&  boxes.children[6].innerText === 'X' ) {
    // for( let i = 0; i < boxes.children.length; i++ ) {
    //      boxes.children[i].style.backgroundColor = "green"
    boxes.children[2].style.backgroundColor = 'green' ;
    boxes.children[4].style.backgroundColor = 'green' ;
    boxes.children[6].style.backgroundColor = 'green' ;
    result.textContent = "Player-X Won"
    gameOver.style.display ='flex' 
    
}
if ( boxes.children[2].innerText === 'O' &&  boxes.children[4].innerText === 'O' &&  boxes.children[6].innerText === 'O' ) {
    // for( let i = 0; i < boxes.children.length; i++ ) {
    //      boxes.children[i].style.backgroundColor = "green"
    boxes.children[2].style.backgroundColor = 'green' ;
    boxes.children[4].style.backgroundColor = 'green' ;
    boxes.children[6].style.backgroundColor = 'green' ;
    result.textContent = "Player-O Won"
    gameOver.style.display ='flex' 
    
}
     // in here if condition for tie
    // if (result.textContent != "Player-O Won" && result.textContent != "Player-X Won" && counter === 9) {
    //    result.textContent = "OhOO! IT'S A TIE "
    //    gameOver.style.display ='flex' 
    // //    if(boxes.children.innerText==='string'){
    // //    resetGame();
    // //    }
    // }   
    if (counter === 9 && !gameOver.style.display) {
      result.textContent = "OhOO! IT'S A TIE!"
      gameOver.style.display ='flex'  
  }
} ) 
    
     function resetGame() {   
     gameOver.style.display = "";
     boxes.children[0].innerText ='', boxes.children[0].style.backgroundColor = '';
     boxes.children[1].innerText ='', boxes.children[1].style.backgroundColor = '';
     boxes.children[2].innerText ='', boxes.children[2].style.backgroundColor = '';
     boxes.children[3].innerText ='', boxes.children[3].style.backgroundColor = '';
     boxes.children[4].innerText ='', boxes.children[4].style.backgroundColor = '';
     boxes.children[5].innerText ='', boxes.children[5].style.backgroundColor = '';
     boxes.children[6].innerText ='', boxes.children[6].style.backgroundColor = '';
     boxes.children[7].innerText ='', boxes.children[7].style.backgroundColor = '';
     boxes.children[8].innerText ='', boxes.children[8].style.backgroundColor = '';
      counter = 0;
     
    }
    


