export {};

abstract class Animal{
  abstract cry(): string
}

class Lion extends Animal{
  cry(): string {
    return 'roar'
  }
}

class Tyger extends Animal{  cry(): string {
  return 'grrr'
}}
