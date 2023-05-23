// Function to load the questions from the JSON file
const loadQuestions = async () => {
    try {
      const response = await fetch('questions.json');
      const data = await response.json();
      return data.questions;
    } catch (error) {
      console.error('Error loading questions:', error);
      return [];
    }
  };
  
// Function to select a random question
const selectRandomQuestion = (questions) => {
    return questions[Math.floor(Math.random() * questions.length)];
  };
  
const displayQuestion = (question) => {
    const questionElement = document.getElementById('question');
    const wordPairElement = document.getElementById('word-pair');
    const optionsElement = document.getElementById('options');
    const explanationElement = document.getElementById('explanation');
    const newQuestionButton = document.getElementById('new-question');
    const isCorrectElement = document.getElementById('is-correct');
  
    questionElement.textContent = question.question;
    wordPairElement.textContent = question.word_pair;
    // Clear previous options
    optionsElement.innerHTML = '';
    let correctSelected = false;
    // Clear previous explanation and hide it
    explanationElement.textContent = '';
    explanationElement.style.display = 'none';
    isCorrectElement.textContent = '';
    isCorrectElement.style.display = 'none';
    // Hide the new question button
    newQuestionButton.style.display = 'none';
  
    // Add event listener to the New Question button
    newQuestionButton.addEventListener('click', generateNewQuestion);

    // Create and append options
    question.options.forEach((option) => {
      const optionElement = document.createElement('li');
      optionElement.textContent = option.option;
      optionElement.addEventListener('click', () => {
        if (!correctSelected) {
          displayExplanation(option.is_correct, option.explanation, newQuestionButton);
          correctSelected = option.is_correct;
          
          // Disable click event listeners on other options
          question.options.forEach((otherOption) => {
            if (otherOption !== option) {
              otherOption.disabled = true;
            }
          });
        }
      });
      optionsElement.appendChild(optionElement);
    });
  };
  
// Function to display the explanation
const displayExplanation = (correct, explanation, newQuestionButton) => {
  const explanationElement = document.getElementById('explanation');
  const isCorrectElement = document.getElementById('is-correct');
  
  // Clear previous style classes
  explanationElement.classList.remove('correct', 'wrong');
  
  explanationElement.style.display = 'block';
  isCorrectElement.style.display = 'block';
  explanationElement.textContent = explanation;
  if (correct) {
    isCorrectElement.textContent = "Correct!";
    explanationElement.classList.add('correct');
    newQuestionButton.style.display = 'block';
  } else {
    isCorrectElement.textContent = "Wrong!";
    explanationElement.classList.add('wrong');
  }

  };

// Function to generate a new random question
  const generateNewQuestion = async () => {
    const questions = await loadQuestions();
    const randomQuestion = selectRandomQuestion(questions);
    displayQuestion(randomQuestion);

  };

// Main function to load questions, select a random question, and display it
const startQuiz = async () => {
    const questions = await loadQuestions();
    const randomQuestion = selectRandomQuestion(questions);
    displayQuestion(randomQuestion);
  };
  
// Call the startQuiz function to begin the quiz
startQuiz();
  