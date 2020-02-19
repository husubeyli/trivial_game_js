var panel = $("#quiz-area");

// Question set
var questions = [{
  question: "What was the first full length CGI movie?",
  answers: ["A Bug's Life", "Monsters Inc.", "Toy Story", "The Lion King"],
  correctAnswer: "Toy Story"
}, {
  question: "Which of these is NOT a name of one of the Spice Girls?",
  answers: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
  correctAnswer: "Fred Spice"
}, {
  question: "Which NBA team won the most titles in the 90s?",
  answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
  correctAnswer: "Chicago Bulls"
}, {
  question: "Which group released the hit song, \"Smells Like Teen Spirit\"?",
  answers: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
  correctAnswer: "Nirvana"
}, {
  question: "Which popular Disney movie featured the song, \"Circle of Life\"?",
  answers: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
  correctAnswer: "The Lion King"
}, {
  question: "Finish this line from the Fresh Prince of Bel-Air theme song: \"I whistled for a cab and when it came near, the license plate said...\"",
  answers: ["Dice", "Mirror", "Fresh", "Cab"],
  correctAnswer: "Fresh"
}, {
  question: "What was Doug's best friend's name?",
  answers: ["Skeeter", "Mark", "Zach", "Cody"],
  correctAnswer: "Skeeter"
}, {
  question: "What was the name of the principal at Bayside High in Saved By The Bell?",
  answers: ["Mr.Zhou", "Mr.Driggers", "Mr.Belding", "Mr.Page"],
  correctAnswer: "Mr.Belding"
}];

// Variable that will hold the setInterval
var timer;

let correct = 0;
let incorrect = 0;
let counter = 10 * questions.length;

function startGame(){

  timer = setInterval(countdown, 1000)

  $("#sub-wrapper").prepend(`<h2>Time Remaining: <span id='counter-number'>${counter}</span> Seconds</h2>`)
  for(let i=0; i<questions.length; i++){
    panel.append('<h2>' + questions[i].question + '</h2>')

    for(let j=0; j< questions[i].answers.length; j++){
      let label = document.createElement('label');
      label.append(document.createTextNode(questions[i].answers[j]))
      label.setAttribute('for', questions[i].answers[j])
      let inp = document.createElement('input')
      inp.id = questions[i].answers[j]
      inp.classList.add('questions')
      inp.setAttribute('type', 'radio');
      inp.setAttribute('name', 'question-' + i);
      inp.dataset['input_dataset'] = questions[i].answers[j]
      panel.append(inp)
      panel.append(label)
    }
  }
  panel.append(`<button onclick='endGame()' id='done'>Done</button>`)
}

function endGame(){
  let input_list = $('.questions:checked')
  // let input_list = $('.questions').is('checked')
  for(let i =0; i < input_list.length; i++){
    if(input_list[i].dataset['input_dataset'] === questions[i].correctAnswer){
      correct++
    } else {
      incorrect++
    }
  }

  result()
  
}


//  buna bax yeniden
// function done(){
//   $('.questions:checked').forEach(function(value, index){
//     // let input_list = $('.questions:checked')
//     if(value === questions[index].correctAnswer){
//       correct++
//     } else {
//       incorrect++
//     }
//   })
//   result()
// }


function result(){

  clearInterval(timer)

  $('#sub-wrapper h2').remove()
  panel.html("<h2>All Done!</h2>");
  panel.append("<h3>Correct Answers: " + correct + "</h3>");
  panel.append("<h3>Incorrect Answers: " + incorrect + "</h3>");
  panel.append("<h3>Unanswered: " + (questions.length - (incorrect + correct)) + "</h3>");
}

function countdown(){
  counter--
  $('#counter-number').html(counter)
  if(counter === 0){
    endGame();
  }
}


$('#start').click(function(){
  startGame()
})



