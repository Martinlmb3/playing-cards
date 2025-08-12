export enum MonsterType {
  PLANT = "plant",
  ELECTRIC = "electric",
  FIRE = "fire",
  WATER = "water",
}

export interface IMonsterProperties{
  imageUrl: string;
  color: string;
}

export const MonsterTypeProperties: {[key:string]: IMonsterProperties} = {
  [MonsterType.PLANT]:{
    imageUrl:'/public/assets/plant.jpg',
    color:'rgba(135,255,124)',
  },
  [MonsterType.FIRE]:{
    imageUrl:'/public/assets/fire.jpg',
    color:'rgba(255,104,104)',
  },
  [MonsterType.WATER]:{
    imageUrl:'/public/assets/water.jpg',
    color:'rgba(56,153,248,1)',
  },
  [MonsterType.ELECTRIC]:{
    imageUrl:'/public/assets/electric.jpg',
    color:'rgba(255,255,104)',
  }
}
