const removeFrog = () => { body.frogs.find(frog => frog == this).remove() }

const level = () => {
    
}
class Frog {
    constructor() {
        this.size = this.sizeFind()
        this.color = this.colorFind()
    }
    sizeFind(){
       return Math.round(25 + Math.random() * 125)
    }
    colorFind(){
       return `(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`
    }
}
class Body {
    constructor() {
        this.frogs = []
    }
    addFrog(){
        this.frogs.push(new Frog)
    }
}
class Level {
    constructor() {
        this.num = num
        this.amount = frogAmount
    }
}
