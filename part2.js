let url = 'https://deckofcardsapi.com/api/deck';

//1.
async function partOne() {
   let response = await axios.get(`${url}/new/draw`);
   let { suit, value } = response.data.cards[0];
   console.log('partOne: ', `You pulled the ${value} of ${suit}`);
}
partOne();

//2.
let cardOne = null; //initialize cardOne to use it within both requests
async function partTwo() {
   let cardOne = await axios.get(`${url}/new/draw`);
   let deckID = cardOne.data.deck_id;
   let cardTwo = await axios.get(`${url}/${deckID}/draw`);
   [cardOne, cardTwo].forEach(function (card) {
      let { suit, value } = card.data.cards[0];
      console.log('partTwo: ', `You pulled the ${value} of ${suit}`);
   });
}
partTwo();

//3.
async function partThree() {
   let $button = $('#draw');
   let $cards = $('#cards');
   let response = await axios.get(`${url}/new/shuffle/`);

   $button.on('click', async function () {
      let deckID = response.data.deck_id;
      let cardData = await axios.get(`${url}/${deckID}/draw`);
      let cardImg = cardData.data.cards[0].image;
      $cards.append(
         $('<img>', {
            src: cardImg,
         })
      );
   });
}
partThree();
