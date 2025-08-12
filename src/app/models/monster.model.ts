import { MonsterType } from "../utils/monster.utils";

export class Monster {
  id: number = -1;
  name: string ="Monster";
  hp: number = 40;
  image:string = "assets/pik.jpg";
  type: MonsterType = MonsterType.ELECTRIC;
  figureCaption : string = "N°001 Monster";

  attackName : string = "Geo Impact";
  attackStrenght : number = 60;
  attackDescription : string = "This is a long description etc"

  copy(): Monster{
    return Object.assign(new Monster(), this)
  }
}
