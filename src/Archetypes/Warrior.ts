import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private energy: EnergyType = 'stamina';
  private static _instance = 0;

  constructor(name: string) {
    super(name);
    Warrior._instance += 1;
  }

  get energyType(): EnergyType {
    return this.energy;
  }

  static createdArchetypeInstances(): number {
    return this._instance;
  }
}