import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private energy: EnergyType = 'mana';
  private static _instance = 0;

  constructor(name: string) {
    super(name);
    Mage._instance += 1;
  }

  get energyType(): EnergyType {
    return this.energy;
  }

  static createdArchetypeInstances(): number {
    return this._instance;
  }
}