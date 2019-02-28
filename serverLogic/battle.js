// const charStr = ("2,1,15,Bob,0")
// const mobStr = ('1,1,10,goblin,2,potion') //change to item id later

module.exports = (req) => {

    console.log(req, "sup")


parseStats = (toon) => {
    toonArray = toon.split(",")
    const toonObj = {
        atk: toonArray[0],
        spd: toonArray[1],
        hp: toonArray[2],
        name: toonArray[3],
        loot: toonArray[5],
        gold: toonArray[4]
    }
    return toonObj
    //grab (hopefully) either toon and parse out the stats
    //string.parse on ,
    //array -> object optional for easy of following
}

rng = (max) => {
    return Math.floor(Math.random() * 100 * max)
}
render = (res) => {
    //console.log()
    let result = (`<p>${res.a}, ${res.b}<p><p>Current Hp: ${charChp}`)

    return result

}

const fight = (char1, mob1) => {
    const mob = parseStats(mob1);
    const char = parseStats(char1);

    let charChp = Number(char.hp)
    let mobChp = Number(mob.hp)
    const mobIni = rng(mob.spd)
    const charIni = rng(char.spd)
    const results = []

    if (mobIni > charIni) {
        charChp -= mob.atk
        results.a = (`The ${mob.name} hits ${char.name} for ${mob.atk}.`)
        if (charChp > 0) {
            mobChp -= char.atk
            results.b = (`${char.name} hits ${mob.name} for ${char.atk}.`)
            render(results)
        } else {
            console.log('dead')
            //lose()
        }
    } else {
        mobChp -= char.atk
        results.a = (`${char.name} hits ${mob.name} for ${char.atk}.`)
        if (mobChp > 0) {
            charChp -= mob.atk
            results.b = (`The ${mob.name} hits ${char.name} for ${mob.atk}.`)
            render(results)
        } else {
            console.log('win')
            //win()
        }
    }
    //render( => fight() or run())
}

const onClickF = (e) => {
    // e.preventDefault()
    fight(char, mob)
}



run = () => {
    const mobIni = rng(mob.spd)
    const charIni = rng(char.spd)
    if (charIni >= mobIni) {

    }
    //.spd chance
}

win = () => {
    //give rewards
}

lose = () => {
    //lose (?)
}



}