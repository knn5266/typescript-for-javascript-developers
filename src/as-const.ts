export {};

let name = 'Atsushi';

name = 'Ham';

let nickname = 'Ham' as const
// nickname = 'Hamtaro'

let profile ={
  name: 'Atsushi',
  height: 178
}as const

// profile.name ='Hamtaro'
// profile.height = 180