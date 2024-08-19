import {plants as data} from "./data.mjs";

class Plant{
    
    constructor(elem, data){
        this.name = data.name;
        this.health = data.health;
        this.damage = data.damage;
        this.speed = data.speed * 1000; //s->ms conversion

        this.elem = elem;
        this.elem.querySelector("img").src = `/img/${data.img}`;
        this.elem.classList.add("plant");

        this.placed = false;
    }

    action(){}

    init(loopAction = true){
        if(loopAction){
            setInterval(this.action, this.speed);
        }
        else{
            setTimeout(this.action, this.speed);
        }
    }

    handleFollowMouse(event){
        if(!this.placed){
            this.elem.style.position = "absolute";
            this.elem.style.left = event.pageX;
            this.elem.style.top = event.pageY;
        }
    }

    handleDrop(event){
        this.placed = true;
    }
}

class Sunflower extends Plant{
    constructor(elem){
        super(elem, data.sunflower);
    }
    action(){
        
    }
}
class Peashooter extends Plant{
    constructor(){
        super(elem, data.peashooter);
    }
    shoot(){

    }
}
class CherryBomb extends Plant{
    construction(){
        super(elem, data.cherrybomb);
    }
    explode(){

    }
}