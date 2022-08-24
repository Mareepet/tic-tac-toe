// var X = document.querySelector('.player-X')
// var Y = document.querySelector('.player-Y')
// let Winning_combinations = [
//      [0, 1, 2],
//      [3, 4, 5],
//      [6, 7, 8],
//      [0, 3, 6],
//      [1, 4, 7],
//      [2, 5, 8],
//      [0, 4, 8],
//      [2, 4, 6]
 
// ];
// var playerx = 'x'
// var player = 'o'


//   let board = document.querySelector('.board')
//    cellOne.addEventListener('click',function(event) {
//     let cell = event.target
//      if (cell.tagName === 'DIV') {
//       cell.style.backgroundColor = 'red'
//      }
//      if ( cellOne.children[0].style.backgroundColor ===  'red' &&  cellOne.children[1].style.backgroundColor === 'red' &&  cellOne.children[2].style.backgroundColor === 'red' ) {
     
//     for( let i = 0; i < cellOne.children.length; i++ ) {
//         cellOne.children[i].style.backgroundColor = "green"
//      }
//     }

// })
//     //  if ( cell.children[3].style.backgroundColor ===  'red' &&  cell.children[4].style. backgroundColor === 'red' &&  cell.children[5].style.backgroundColor === 'red' ) {
     
//     //      for( let i = 0; i < cell.children.length; i++ ) {
//     //         cell.children[i].style.backgroundColor = "green"
//     //         }
//     //        }
//     //    })
    //  if ( boxes.children[0].style.backgroundColor ===  'red' &&  boxes.children[1].style.  backgroundColor === 'red' &&  boxes.children[2].style.backgroundColor === 'red' ) {
    //     for( let i = 0; i < boxes.children.length; i++ ) {
    //         boxes.children[i].style.backgroundColor = "green"
    //      }
    //     }
    // }) 

    // this is Rosaline code:-

//     var players = ['X','O']
//     var number = 1;
//     var boxes = document.querySelector('.board')
//     // var boxes = document.querySelector('.c1')
//     var cell = document.querySelectorAll('.cell')
//     console.log(cell)
//     boxes.addEventListener('click',function(event) {
//     let box = event.target
//      if (box.tagName === "DIV") {
//         // for (let i=0; i< cell.length; i++) {
//         if (number % 2 === 0) {
//             // console.log(players[0])
//             cell[i].textContent = players[0]
//             number++

//         } else {
//             // console.log(players[1])
//             cell[i].textContent = players[1]
//             number++
//         } // box.style.backgroundColor = 'red' ;
//     }
// }

    //  if ( boxes.children[0].style.backgroundColor ===  'red' &&  boxes.children[1].style.backgroundColor === 'red' &&  boxes.children[2].style.backgroundColor === 'red' ) {

    //      for( let i = 0; i < 3; i++ ) {
    //          boxes.children[i].style.backgroundColor = "green"
    //       }
    //     }
    //     })

    //     var boxes = document.querySelector('.board')
    // boxes.addEventListener('click',function(event) {
    // let  box = event.target
    // if (box.tagName === "DIV") {
    //     box.style.backgroundColor = 'red' ;
    // }
    //  if ( boxes.children[3].style.backgroundColor ===  'red' &&  boxes.children[1].style.backgroundColor === 'red' &&  boxes.children[2].style.backgroundColor === 'red' ) {

    //      for( let i = 0; i < boxes.children.length; i++ ) {
    //          boxes.children[i].style.backgroundColor = "green"
    //       }
    //     }
    //     })







        // let Winning_combinations = [
        //     //      [0, 1, 2],
        //     //      [3, 4, 5],
        //     //      [6, 7, 8],
        //     //      [0, 3, 6],
        //     //      [1, 4, 7],
        //     //      [2, 5, 8],
        //     //      [0, 4, 8],
        //     //      [2, 4, 6]
             
        //     // ];

 //refrence from pablo

// var players = ['X','O']
// var counter = 1;
// var boxes = document.querySelector('.board')
// // var boxes = document.querySelector('.c1')
// // for (let i=0; i< cell.length; i++) {
// var cell = document.querySelectorAll('.cell')
// console.log(cell)
// boxes.addEventListener('click',function(event) {
// let box = event.target
//     if (box.tagName === "DIV") {
    
//         if (counter % 2 === 0) {
//             // console.log(players[0])
//             box.textContent = players[0]
//             counter++

//         } else {
//             // console.log(players[1])
//             box.textContent = players[1]
//             counter++
//         } // box.style.backgroundColor = 'red' ;
//     }
// }) 
// // }
var gameOver = document.querySelector('.game-End')  
var reset = document.querySelector('.reset')
var result = document.querySelector('.result')
var players = ['X','O']
var counter = 0;
//    var points = 0;

// reset.addEventListener('click',resetGame);  

var boxes = document.querySelector('.board')
// var boxes = document.querySelector('.c1')
// for (let i=0; i< cell.length; i++) {
var cell = document.querySelectorAll('.cell')
console.log(cell)

boxes.addEventListener('click',function(event) { 
// if (boxes.children.innerText != '')return;
let box = event.target 
// if (boxes.children.innerText != '')return;
if (box.tagName === "DIV") {

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





if ( boxes.children[0].innerText === 'X' &&  boxes.children[1].innerText === 'X' &&  boxes.children[2].innerText === 'X' ) {
// for( let i = 0; i < boxes.children.length; i++ ) {
//      boxes.children[i].style.backgroundColor = "green"
boxes.children[0].style.backgroundColor = 'green' ;
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

if (counter == 9) {
   result.textContent = "OhOO! IT'S A TIE "
   gameOver.style.display ='flex' 
}   

 


} ) 

    //  function resetGame() {
    // gameOver.style.display = "none";
    // boxes.children.innerText='';

    //  }



// let cell1 = boxes.children[0].innerText
// let cell2 = boxes.children[1].innerText
// let cell3 = boxes.children[2].innerText
// let cell4 = boxes.children[3].innerText
// let cell5 = boxes.children[4].innerText
// let cell6 = boxes.children[5].innerText
// let cell7 = boxes.children[6].innerText
// let cell8 = boxes.children[7].innerText
// let cell9 = boxes.children[8].innerText

// if(cell1===cell2 && cell2===cell3){
//     console.log('win')
//   } 
//   if (cell4!=' '&& cell4==cell5 && cell5==cell6) {
//        console.log('win')
//   }


// (cell4=!''&& cell4==cell5 && cell5==cell6))
// (cell7=!'' &&  cell7==cell8 && cell8==cell9) ||
// (cell1=!'' &&  cell1==cell4 && cell4==cell7) ||
// (cell2=!'' &&  cell2==cell5 && cell5==cell8) ||
// (cell3=!'' &&  cell3==cell6 && cell6==cell9) ||
// (cell1=!'' &&  cell1==cell5 && cell5==cell9) ||
// (cell3=!'' &&  cell3==cell5 && cell5==cell7) 


// }) 


