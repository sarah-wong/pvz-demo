class Plant{
    constructor(data){
        this.name = data.name;
        this.image = `/img/${data.name}.webp`;
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