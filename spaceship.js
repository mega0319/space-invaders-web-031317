class Spaceship{
  constructor(name, crew, phasers, shields){
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.crew = crew
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.docked = crew.length ? false : true
    this.phasersCharge = "uncharged"

    if (crew.length > 0){
      crew.forEach(function(member){
      member.currentShip = this
    }.bind(this))
  }
}
}
