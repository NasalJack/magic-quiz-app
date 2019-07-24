'use strict';

const FEEDBACK = {
  answered: 0,
  correctly: 0
};
  
const SET = [
  [
    {question: 'What color would a plains land card be considered?', op1: 'Colorless', op2: 'Yellow', op3: 'White', op4: 'None of the Above', correctAnswer: 'option-1'},
    {question: 'How many legendaries of the same name can you have in your deck?', op1: '1', op2: '2', op3: '3', op4: '4', correctAnswer: 'option-4'},
    {question: 'What is the minimum deck size of a Commander deck?', op1: '60 cards', op2: '40 cards', op3: '100 cards', op4: '80 cards', correctAnswer: 'option-3'},
    {question: 'Which of the following Magic: The Gathering computer or video game came first?', op1: 'Magic Duels', op2: 'Magic Arena', op3: 'Magic Online', op4: 'Magic Tactics', correctAnswer: 'option-3'},
    {question: 'The keyword \'Vigilance\' has been featured most often on which color of cards?', op1: 'Blue', op2: 'White', op3: 'Green', op4: 'Yellow', correctAnswer: 'option-2'}
  ],
  [
    {question: 'What are the five one letter abbreviations that represent the five colors of Magic: The Gathering?', op1: 'ROYGB', op2: 'WRUGB', op3: 'YBWGR', op4: 'QWERT', correctAnswer: 'option-2'},
    {question: 'Which of these is not a color of card in Magic: The Gathering?', op1: 'Blue', op2: 'Colorless', op3: 'Purple', op4: 'Black', correctAnswer: 'option-3'},
    {question: 'What is the minimum deck size of a standard deck?', op1: '60 cards', op2: '40 cards', op3: '100 cards', op4: 'There is no limit', correctAnswer: 'option-1'},
    {question: 'In what decade was Magic: The Gathering first released?', op1: '2010s', op2: '2000s', op3: '1990s', op4: '1980s', correctAnswer: 'option-3'},
    {question: 'How many total legendaries of the same name can be in play in a 1v1 game?', op1: '1', op2: '2', op3: '4', op4: '8', correctAnswer: 'option-2'}
  ],
  [
    {question: 'What color pair is flying most often associated with?', op1: 'Blue/Green', op2: 'Blue/White', op3: 'Green/White', op4: 'Red/Black', correctAnswer: 'option-2'},
    {question: 'Which color pair is deathtouch most often associated with?', op1: 'Green/Black', op2: 'White/Red', op3: 'Red/Blue', op4: 'Blue/White', correctAnswer: 'option-1'},
    {question: 'What color is haste most often associated with?', op1: 'Black', op2: 'Red', op3: 'Blue', op4: 'White and Green', correctAnswer: 'option-2'},
    {question: 'What color are most elf cards?', op1: 'Blue', op2: 'Black', op3: 'Red', op4: 'Green', correctAnswer: 'option-4'},
    {question: 'What color are most zombie cards?', op1: 'Blue', op2: 'Black', op3: 'Red', op4: 'Green', correctAnswer: 'option-2'}
  ],
  [
    {question: 'Blue cards are known for which type of spells?', op1: 'Beefy Creatures', op2: 'Direct Damage', op3: 'Counterpsells', op4: 'Exile Effects', correctAnswer: 'option-3'},
    {question: 'Black cards are known for which type of spells?', op1: 'Destroy Effects', op2: 'Counterspells', op3: 'Beefy Creatures', op4: 'Artifacts', correctAnswer: 'option-1'},
    {question: 'White cards are known for which type of spells?', op1: 'Exile Effects', op2: 'Artifacts', op3: 'Counterspells', op4: 'Beefy Creatures', correctAnswer: 'option-1'},
    {question: 'Red cards are known for which type of spells?', op1: 'Counterspells', op2: 'Artifacts', op3: 'Direct Damage', op4: 'Destroy Effects', correctAnswer: 'option-3'},
    {question: 'Green cards are known for which type of spells?', op1: 'Exile Effects', op2: 'Destroy Effects', op3: 'Beefy Creatures', op4: 'Direct Damage', correctAnswer: 'option-3'}
  ],
  [
    {question: 'How long is this quiz?', op1: '1 Question', op2: '2 Questions', op3: '3 Questions', op4: '20 Questions', correctAnswer: 'option-1'},
  ]
];
  
function randomSetSelector() {
  let min=0;
  let max=SET.length;
  return Math.floor(Math.random() * (+max - +min) + +min);
}
  
  
let QUESTIONS = SET[randomSetSelector()];
  
  
function renderQuestion(questionNumber) {
  $('.option-1').prop('value', `${QUESTIONS[questionNumber].op1}`);
  $('.option-2').prop('value', `${QUESTIONS[questionNumber].op2}`);
  $('.option-3').prop('value', `${QUESTIONS[questionNumber].op3}`);
  $('.option-4').prop('value', `${QUESTIONS[questionNumber].op4}`);
  $('.question').html(QUESTIONS[questionNumber].question);
  $('.answer-option').removeClass('correct green red disabled').addClass('incorrect');
  $(`.${QUESTIONS[questionNumber].correctAnswer}`).addClass('correct').removeClass('incorrect');
  $('.tally').html(`Question ${FEEDBACK.answered+1} of ${QUESTIONS.length}`);
  console.log(`rendered question ${questionNumber+1}`);
}
  
function startQuiz() {
  $('.start-button').click(function() {
    console.log('start quiz button pressed');
    renderQuestion(0);
    $('.start-page').addClass('hidden');
    $('.question-page').removeClass('hidden');
  });
}
  
function answerResponse() {
  
  $('.options').on('click', '.correct', event => {
    console.log('question answered incorrectly');
    $('.correct').addClass('green');
    $('.answer-option').addClass('disabled');
    $('.positive').removeClass('hidden');
    console.log('correct option chosen');
    FEEDBACK.answered++;
    FEEDBACK.correctly++;
    $('.pop-up').children('p').html('That\'s Correct!');
    console.log(`FEEDBACK.answered is ${FEEDBACK.answered} and FEEDBACK.correctly is ${FEEDBACK.correctly}`);
  });
  
  $('.options').on('click', '.incorrect', event => {
    console.log('question answered incorrectly');
    $('.incorrect').addClass('red');
    $('.correct').addClass('green');
    $('.answer-option').addClass('disabled');
    $('.negative').removeClass('hidden');
    console.log('incorrect option chosen');
    FEEDBACK.answered++;
    console.log(`${FEEDBACK.correctly} correct answers out of ${FEEDBACK.answered} questions`);
    $('.pop-up').children('p').html(`No, the correct answer was ${$(`.${QUESTIONS[FEEDBACK.answered-1].correctAnswer}`).prop('value')}.`);
    console.log(`FEEDBACK.answered is ${FEEDBACK.answered} and FEEDBACK.correctly is ${FEEDBACK.correctly}`);
  });
  
}
  
function continueQuiz() {
  
  $('.proceed').click(function() {
    console.log(`proceed button pressed, FEEDBACK.answered is ${FEEDBACK.answered} and QUESTIONS.length is ${QUESTIONS.length}`);
    $('.pop-up').addClass('hidden');
    if (FEEDBACK.answered < QUESTIONS.length) {
      renderQuestion(FEEDBACK.answered);
    } else {
      $('.question-page').addClass('hidden');
      $('.final-page').removeClass('hidden');
      $('.results-percentage').html(`${FEEDBACK.correctly/FEEDBACK.answered*100}%`);
      $('.results-words').html(`You answered ${FEEDBACK.correctly} out of ${FEEDBACK.answered} questions correctly`);
    }
  });
}
  
function restartQuiz() {
  $('.restart').click(function() {
    console.log('quiz restarted');
    QUESTIONS = SET[randomSetSelector()];
    $('.final-page').addClass('hidden');
    FEEDBACK.answered=0;
    FEEDBACK.correctly=0;
    renderQuestion(0);
    $('.question-page').removeClass('hidden');
  });
}
  
  
function loadQuiz() {
  console.log('page loaded');
  startQuiz();
  answerResponse();
  continueQuiz();
  restartQuiz();
}
  
$(loadQuiz);