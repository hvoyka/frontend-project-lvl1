#!/usr/bin/env node

import cli from '../src/cli.js';

const BrainCalc = () => {
  cli.greeting();
  cli.rules('calc');
  let correctAnswers = 0;
  const signs = ['+', '-', '*'];
  while (correctAnswers <= 3) {
    const randNumOne = Math.floor(Math.random() * 25);
    const randNumTwo = Math.floor(Math.random() * 25);
    const randNumForSign = Math.floor(Math.random() * signs.length);
    const sign = signs[randNumForSign];
    const expression = `${randNumOne} ${sign} ${randNumTwo}`;
    const answer = +cli.question(expression);

    let correct;
    switch (sign) {
      case '+':
        correct = randNumOne + randNumTwo;
        break;
      case '-':
        correct = randNumOne - randNumTwo;
        break;
      case '*':
        correct = randNumOne * randNumTwo;
        break;
      default:
        console.log('Error - incorrect sign');
    }

    if ((correct === answer) || (correct === answer)) {
      cli.correct();
      correctAnswers += 1;
      if (correctAnswers === 3) {
        cli.grats();
        break;
      }
    } else {
      cli.wrong(answer, correct);
      break;
    }
  }
};
BrainCalc();
export default BrainCalc;
