function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class RPGCharacter {
  constructor(name, power, intelligence, luck) {
    this.name = name;
    this.power = power;
    this.intelligence = intelligence;
    this.luck = luck;
  };
  fight(enemy) {
    if (enemy.power > this.power) {
      console.log(enemy.name);
    }
    if (enemy.power < this.power) {
      console.log(this.name);
    }
    if ((enemy.power = this.power)) {
      console.log("Remis!");
    }
  };
  playChess(enemy) {
    if (enemy.intelligence > this.intelligence) {
      console.log(enemy.name);
    }
    if (enemy.intelligence < this.intelligence) {
      console.log(this.name);
    }
    if ((enemy.intelligence = this.intelligence)) {
      console.log("Remis!");
    }
  };
  tossCoin(enemy) {
    if (enemy.luck > this.luck) {
      console.log(enemy.name);
    }
    if (enemy.luck < this.luck) {
      console.log(this.name);
    }
    if ((enemy.luck = this.luck)) {
      console.log("Remis!");
    }
  };

}

class Dwarf extends RPGCharacter {
  constructor(name) {
    super(name);
    this.race = "dwarf";
    this.power = getRandomIntInclusive(40, 100);
    this.intelligence = getRandomIntInclusive(40, 80);
    this.luck = getRandomIntInclusive(40, 100);
  }
};

class Orc extends RPGCharacter {
  constructor(name) {
    super(name);
    this.race = "orc";
    this.power = getRandomIntInclusive(50, 100);
    this.intelligence = getRandomIntInclusive(5, 20);
    this.luck = getRandomIntInclusive(1, 100);
  }
};

class Elf extends RPGCharacter {
  constructor(name) {
    super(name);
    this.race = "elf";
    this.power = getRandomIntInclusive(30, 80);
    this.intelligence = getRandomIntInclusive(60, 100);
    this.luck = getRandomIntInclusive(20, 100);
  }
};

const dwarf = new Dwarf("Durin Kamienny Topór");
const orc = new Orc("Urk'har Niszczyciel");
const elf = new Elf("Naylee z Nieśmiertelnego Lasu");

console.log(dwarf);
console.log(orc);
console.log(elf);

orc.fight(elf);
elf.playChess(dwarf); 
dwarf.tossCoin(elf);




