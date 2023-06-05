import Race from './Race';

export default class Dwarf extends Race {
  private _maxLife = 80;
  private static _instance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._instance += 1;
  }

  get maxLifePoints(): number {
    return this._maxLife;
  }

  static createdRacesInstances(): number {
    return this._instance;
  }
}