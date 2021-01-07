import readlineSync from 'readline-sync';

const cli = {
  greeting() {
    this.userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${this.userName}!`);
  },
  evenRules() {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  },
  evenQuestion(num) {
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('`Your answer: ');
    return answer;
  },
  evenCorrect() {
    console.log('Correct!');
  },
  evenGrats() {
    console.log(`Congratulations, ${this.userName}!`);
  },
  evenWrong(answer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answer === 'yes' ? 'no' : 'yes'}'.
      Let's try again, ${this.userName}!`);
  },
};

export default cli;
