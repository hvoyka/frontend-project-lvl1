import { questionEven } from '../src/cli.js';

const even = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswers = 0;
  while (correctAnswers <= 3) {
    const randNum = Math.floor(Math.random() * 100);
    const answer = questionEven(randNum);
    if ((randNum % 2 === 0 && answer === 'yes') || (randNum % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
      correctAnswers += 1;
      if (correctAnswers === 3) {
        console.log('Congratulations, Bill!');
        break;
      }
    } else {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
      Let's try again, Bill!`);
      break;
    }
  }
};

export default even;
