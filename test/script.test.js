const {
    generateRandomQuestion,
    displayQuestion,
    checkAnswer,
    showNextQuestion
  } = require('../script');

// Test for generateRandomQuestion function
test('generateRandomQuestion function generates a random question', () => {
    const question = generateRandomQuestion();
    expect(question).not.toBeNull();
    expect(question.question).toBeDefined();
    expect(question.options).toBeDefined();
    expect(question.answer).toBeDefined();
    expect(question.explanation).toBeDefined();
  });
  
  // Test for displayQuestion function
  test('displayQuestion function displays the question and options', () => {
    const question = {
      question: 'Choose two words with a semantic relationship:',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      answer: 2,
      explanation: 'Explanation for the correct answer.',
    };
  
    displayQuestion(question);
  
    const questionElement = document.getElementById('question');
    const optionsElements = document.getElementsByClassName('option');
  
    expect(questionElement.textContent).toBe(question.question);
    expect(optionsElements.length).toBe(question.options.length);
  
    for (let i = 0; i < optionsElements.length; i++) {
      expect(optionsElements[i].textContent).toBe(question.options[i]);
    }
  });
  
  // Test for checkAnswer function
  test('checkAnswer function checks the user-selected answer', () => {
    const question = {
      question: 'Choose two words with a semantic relationship:',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      answer: 2,
      explanation: 'Explanation for the correct answer.',
    };
  
    displayQuestion(question);
  
    const selectedOption = document.getElementsByClassName('option')[1];
    const feedbackElement = document.getElementById('feedback');
    const explanationElement = document.getElementById('explanation');
    const nextBtn = document.getElementById('next-btn');
  
    checkAnswer(question, selectedOption);
  
    expect(feedbackElement.textContent).toBe('Correct!');
    expect(explanationElement.textContent).toBe(question.explanation);
    expect(nextBtn.disabled).toBe(false);
  });
  
  // Test for showNextQuestion function
  test('showNextQuestion function displays the next question', () => {
    const question1 = {
      question: 'Question 1',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      answer: 2,
      explanation: 'Explanation for the correct answer.',
    };
  
    const question2 = {
      question: 'Question 2',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      answer: 1,
      explanation: 'Explanation for the correct answer.',
    };
  
    showNextQuestion(question1);
    expect(document.getElementById('question').textContent).toBe(question1.question);
  
    showNextQuestion(question2);
    expect(document.getElementById('question').textContent).toBe(question2.question);
  });
  