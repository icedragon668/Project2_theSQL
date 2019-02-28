const db = require('./models');

console.log("Copy?")

const seedMonster = [
    {
"mobName": "goblin", //ref by name
"mobStats": "1,1,10", //atk, spd, hp
"lootTable": "potion", //ref name
"LocationId": "1"
    } //associated to a location
]

const seedLoc = [
    {
        "locationName": 'Forest'
    } //associate mobs, traps
]

const seedItem = [
    {
        "itemName": "potion",
        "itemType": "chest",
        "itemProperties": "1,-5" //price, damage

    }
]

const seedTrap = [
    {
        "trapName": "branchFall",
        "trapEffect": "-3", //damage
    } //associate location
]

const seedPlayer = [
    {
        "username": "bob",
        "password": "pass",
        "encounterCount": 0,
        "stats": "2,1,20",//atk, spd, hp, itembuffs
        "inventory": "potion,2;" //string, calls name,amount;
    }
]

/*
const seedEncounters = [  //maybe not needed
    {
        //events have options while encouters do not
        //players: eg monster or npc
        //path: thing happens
    }
]

const seedChar = [
    {
        id: id,
        name: name,
        attack: 1,
        speed: 1,
        hp: 1,
        luck: 1,
        toHit: 1,
        dodge: 1, 
        inventory: 1,//string to parse
        stock: 1
    }
]

const seedShop =[{
    id,
    name,
    inventory, //string of item ids //think array
    stock, //sting of amounts //think array
    markup
}]

const seedAchieve = [{
    trigger,
    reward
}]
*/


db.sequelize.sync({ force: true }).then(function () {
    db.Mob.bulkCreate(seedMonster)
        .then(function (rows) {
            console.log(`\n\nINSERTED into database\n\n`);
            db.sequelize.close();
        })
        .catch(function (err) {
            console.log("\n\nERROR:", err);
        });
})


db.sequelize.sync({ force: true }).then(function () {
    db.Location.bulkCreate(seedLoc)
        .then(function (rows) {
            console.log(`\n\nINSERTED into database\n\n`);
            db.sequelize.close();
        })
        .catch(function (err) {
            console.log("\n\nERROR:", err);
        });
})


db.sequelize.sync({ force: true }).then(function () {
    db.Item.bulkCreate(seedItem)
        .then(function (rows) {
            console.log(`\n\nINSERTED into database\n\n`);
            db.sequelize.close();
        })
        .catch(function (err) {
            console.log("\n\nERROR:", err);
        });
})

db.sequelize.sync({ force: true }).then(function () {
    db.Player.bulkCreate(seedPlayer)
        .then(function (rows) {
            console.log(`\n\nINSERTED into database\n\n`);
            db.sequelize.close();
        })
        .catch(function (err) {
            console.log("\n\nERROR:", err);
        });
})

db.sequelize.sync({ force: true }).then(function () {
    db.Trap.bulkCreate(seedTrap)
        .then(function (rows) {
            console.log(`\n\nINSERTED into database\n\n`);
            db.sequelize.close();
        })
        .catch(function (err) {
            console.log("\n\nERROR:", err);
        });
})