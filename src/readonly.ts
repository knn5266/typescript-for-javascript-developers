export {};

class visaCard {
  constructor(public readonly owner: string){
  }
}

let myVisaCard = new visaCard('はむさん')
console.log(myVisaCard.owner)
// myVisaCard.owner = 'HAM'
// console.log(myVisaCard.owner)