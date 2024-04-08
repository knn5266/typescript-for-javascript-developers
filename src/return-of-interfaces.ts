export {};

class Mahotsukai{}
class Spuryo{}

class Taro extends Mahotsukai{}

interface Kenja {  ionazun(): void;
}
interface Senshi{ hougeki(): void;}

class Jiro implements Kenja, Senshi{
  ionazun(): void {
  console.log('ionazun')
  }
  hougeki(): void {
    console.log('hougeki')
  }
}

const jiro = new Jiro()
jiro.ionazun()
jiro.hougeki()