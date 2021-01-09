import readlineSync from 'readline-sync';

const cli = {
  greeting() {
    this.userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${this.userName}!`);
  },
  rules(game) {
    switch (game) {
      case 'even':
        console.log('Answer "yes" if the number is even, otherwise answer "no".');
        break;
      case 'calc':
        console.log('What is the result of the expression?');
        break;
      default:
        console.log('Error - for what game rules you need?');
    }
  },
  question(expression) {
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');
    return answer;
  },
  correct() {
    console.log('Correct!');
  },
  grats() {
    console.log(`Congratulations, ${this.userName}!`);
  },
  wrong(answer, correct) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'. \nLet's try again, ${this.userName}!`);
  },
};

export default cli;
