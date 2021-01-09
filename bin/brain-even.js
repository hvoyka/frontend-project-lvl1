#!/usr/bin/env node

import cli from '../src/cli.js';

const BrainEven = () => {
  cli.greeting();
  cli.rules('even');
  let correctAnswers = 0;
  while (correctAnswers <= 3) {
    const randNum = Math.floor(Math.random() * 100);
    const answer = cli.question(randNum);
    const correct = randNum % 2 === 0 ? 'yes' : 'no';
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
BrainEven();
export default BrainEven;
