
//Restart game button
var restart = document.querySelector("#btn");


//Grabs all the swuares
var squares = document.querySelectorAll('td');


//Clear all the squares
function clearBoard(){
  for (var i = 0; i < squares.length; i++) {
  squares[i].textContent =' ';
  }
}

restart.addEventListener('click',clearBoard);

//Check the squares markers
/*var cellOne = document.querySelector('#one')
var cellTwo = document.querySelector('#two')


cellOne.addEventListener('click',function(){
  if(cellOne.textContent === ''){
    cellOne.textContent = 'X';
  }else if (cellOne.textContent === 'X') {
    cellOne.textContent = 'O';
  }else {
    cellOne.textContent = '';
  }
})*/


function changeMaker(){
  if (this.textContent == '') {
    this.textContent = 'X';
  }else if (this.textContent === 'X') {
    this.textContent = 'O';
  }else{
    this.textContent = '';
  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',changeMaker)
}


//for loop to add event listener
