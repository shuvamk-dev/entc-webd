const logging = (a) => {
  return console.log(a + 3);
};
const getNumber = (a) => {
  switch (a) {
    case 11:
      a = "j";
      return a;
    case 12:
      a = "q";
      return a;
    case 13:
      a = "k";
      return a;
    case 1:
      a = "A";
      return a;
    default:
      return a;
  }
};

const getSource = (n) => {
  switch (n) {
    case 1:
      return "club.png";
    case 2:
      return "diamond.png";
    case 3:
      return "spade.png";
    default:
      return "heart.png";
  }
};
const cardGenerate = () => {
  let temporaryNumber = Math.floor(Math.random() * 13) + 1; //1-13
  let cardType = Math.floor(Math.random() * 4) + 1;
  let cardSource = getSource(cardType);
  let ans = getNumber(temporaryNumber);
  console.log(ans);
  document.getElementById("cardDeck").src = cardSource;
  document.getElementById("cardNumber").innerHTML = ans;
};
