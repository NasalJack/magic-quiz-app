const newQuiz = [];
let QUESTIONTALLY = 0;

function handleSubmit() {
  $('#quizCreator').submit(function(event) {
    event.preventDefault();
    console.log("A quiz has been Submitted");
    newQuiz.length=0;
    console.log("newQuiz emptied");
    for (let i=0; i<QUESTIONTALLY+1; i++) {
      newQuiz.push(
        {question: $(`.q${i}`).children('.q').val(), op1: $(`.q${i}`).children('.op1').val(), 
        op2: $(`.q${i}`).children('.op2').val(), op3: $(`.q${i}`).children('.op3').val(), 
        op4: $(`.q${i}`).children('.op4').val(), correctAnswer: $(`.q${i}`).children('.selector').val()
        }
      )
    }
    console.log(newQuiz);
    $('.op').val('');
    $('.q').val('');
  })
}

function addQuizQuestion() {
  $('.repeater').click(function() {
    QUESTIONTALLY++;
    console.log(`QUESTIONTALLY is now ${QUESTIONTALLY}`);
    $('.repeater').before(`
      <fieldset class="q${QUESTIONTALLY}">
        <legend>Question ${QUESTIONTALLY+1}</legend>
        Question: <input class="q" type="text" required><br>
        Option1: <input class="op op1" type="text" required><br>
        Option2: <input class="op op2" type="text" required><br>
        Option3: <input class="op op3" type="text" required><br>
        Option4: <input class="op op4" type="text" required><br>
        Correct Answer: <select class="selector" required>
          <option value="option-1">Option1</option>
          <option value="option-2">Option2</option>
          <option value="option-3">Option3</option>
          <option value="option-4">Option4</option>
        </select>
      </fieldset>
    `)
    console.log(`Question ${QUESTIONTALLY+1} added`)
  })
}

function onPageLoad() {
  handleSubmit();
  addQuizQuestion();
  console.log("page loaded");
}

$(onPageLoad);