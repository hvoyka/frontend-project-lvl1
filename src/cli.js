import readlineSync from 'readline-sync';

const greeting = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
};

const questionEven = (num) => {
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('`Your answer: ');
  return answer;
};

export { greeting, questionEven };
