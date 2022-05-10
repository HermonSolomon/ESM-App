const generateRandomSequence = (QuestionList) => {
  const arr = [];

  for (let i = 0; i < QuestionList.length; i++) {
    arr.push(i);
  }
  const shuffledArr = (array) => array.sort(() => 0.5 - Math.random());
  return shuffledArr(arr);
};

export default generateRandomSequence;
