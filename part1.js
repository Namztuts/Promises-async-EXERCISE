const url = 'http://numbersapi.com';

//1.
const faveNumber = 4;
async function partOne() {
   let response = await axios.get(`${url}/${faveNumber}`);
   console.log(response);
}
partOne();

//2.
const faveNumbers = [1, 2, 3];
async function partTwo() {
   let response = await axios.get(`${url}/${faveNumbers}`);
   $('body').append('<ul></ul>');
   for (let i in response.data) {
      $('ul').append(`<li>${response.data[i]}</li>`);
   }
}
partTwo();

//3.
async function partThree() {
   let response = await Promise.all(
      Array.from({ length: 4 }, () => {
         return axios.get(`${url}/${faveNumber}`);
      })
   );
   $('body').append('<ol></ol>');
   response.forEach((fact) => {
      $('ol').append(`<li>${fact.data}</li>`);
   });
}
partThree();
