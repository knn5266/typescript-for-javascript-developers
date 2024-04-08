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