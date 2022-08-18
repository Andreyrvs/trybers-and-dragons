abstract class Race {
  constructor(private _name: string, private _dexterity: number) {
    this.name = _name;
    this.dexterity = _dexterity;
  }
  
  public get name() : string {
    return this._name;
  }
  
  public set name(value : string) {
    this._name = value;
  }
  
  public get dexterity() : number {
    return this._dexterity;
  }
  
  public set dexterity(value : number) {
    this._dexterity = value;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  public abstract get maxLifePoints(): number; 
}

export default Race;