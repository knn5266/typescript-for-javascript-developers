export {};


class Animal{
constructor(public name: string){}

  run():string {
    return 'I can run'
  }
}
class Lion extends Animal{
  public speed: number
  constructor( name: string, speed: number){
    super(name)

    this.speed = speed
  }
  
  run(): string{
    return `${super.run()} ${this.speed}km/h.`
  }
}

console.log(new Animal('Micky').run())

console.log(new Lion('Shimba', 80).run())

// let animal = new Animal()
// console.log(animal.run())

// let lion = new Lion()
// console.log(lion.run())