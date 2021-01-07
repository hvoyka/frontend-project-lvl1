#!/usr/bin/env node

import cli from '../src/cli.js';

const BrainEven = () => {
  cli.greeting();
  cli.evenRules();
  let correctAnswers = 0;
  while (correctAnswers <= 3) {
    const randNum = Math.floor(Math.random() * 100);
    const answer = cli.evenQuestion(randNum);
    if ((randNum % 2 === 0 && answer === 'yes') || (randNum % 2 !== 0 && answer === 'no')) {
      cli.evenCorrect();
      correctAnswers += 1;
      if (correctAnswers === 3) {
        cli.evenGrats();
        break;
      }
    } else {
      cli.evenWrong(answer);
      break;
    }
  }
};
BrainEven();
export default BrainEven;
