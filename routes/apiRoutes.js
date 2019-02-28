const battle = require('../serverLogic/battle')
const db = require("../models");
const path = require('path');

module.exports = (app) => {

app.post('/api/fight', (req,res) =>{
    battle(req.body)
    // battle.fight(req.char,req.mob).then(battle.render(res))
    console.log(battle, res.body, req.body)
})

}