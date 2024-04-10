export {};

type Profile = {
  name: string;
  age: number
}

const me: Profile = {
  name:'Ham',
  age:43
}

me.age++

console.log(me)

type PersonalDateType = Readonly<Profile>
const friend:PersonalDateType ={
  name:'Shigeru',
  age:40
}

// friend.age++

type Yomitorisenyo<T> ={
  readonly[P in keyof T]: T[P]
}
type YomitorisenyoProfile = Yomitorisenyo<Profile>