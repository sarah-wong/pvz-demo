const plants = {
    sunflower : {
        name : "Sunflower",
        img : "sunflower.webp",
        cost : 50,
        recharge : 7.5,
        health : 6,
        damage : 0,
        speed : 24
    },
    peashooter : {
        name : "Peashooter",
        img : "peashooter.webp",
        cost : 100,
        recharge : 7.5,
        health : 6,
        damage : 1,
        speed : 1.5
    },
    cherrybomb : {
        name : "Cherry Bomb",
        img : "cherry-bomb.webp",
        cost : 150,
        recharge : 50,
        health : Number.POSITIVE_INFINITY,
        damage : 90,
        speed : 1
    },
    wallnut : {
        name : "Wall-nut",
        img : "wall-nut.webp",
        cost : 50,
        recharge : 30,
        health : 72,
        damage : 0,
        speed : 0
    },
    potatomine : {
        name : "Potato Mine",
        img : "potato-mine.webp",
        cost : 25,
        recharge : 30,
        health : 6,
        damage : 90,
        speed : 15
    },
    snowpea : {
        name : "Snow Pea",
        img : "snow-pea.webp",
        cost : 175,
        recharge : 7.5,
        health : 6,
        damage : 1,
        speed : 1.5
    }
}
const zombies = {
    normal : {
        health : 10,
        armor : 0
    },
    conehead : {
        health : 10,
        armor : 18
    },
    buckethead : {
        health : 10,
        armor : 55
    }
}

export {plants, zombies};