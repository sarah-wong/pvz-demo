import * as data from "plantData";

class Plant{
    constructor(data){
        this.name = data.name;
        this.image = `/img/${data.img}`;
        this.cost = data.cost;
        this.recharge = data.recharge * 1000; //s->ms conversion
        this.health = data.health;
        this.damage = data.damage;
        this.speed = data.speed * 1000; //s->ms conversion
    }
    async doAction(msg="does action"){
        console.log(`${this.name}: msg`);
    }
}

class Sunflower extends Plant{
    constructor(){
        super(data.sunflower)
    }
}