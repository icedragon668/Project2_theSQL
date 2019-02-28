
//on explore button
// //$.post?
// //send current player info?
// //get results of encounter

const player = {
    playerName: "Tori",
    playerChar: "Bob",
    playerID: 'id', //from session storage
    char: ("2,1,15,Bob,0"), //dummy client data
    mob: ('1,1,10,goblin,2,potion') //dummy db data

}

const onClickF = (e) => {
    e.preventDefault()
    $.post('/api/fight', player)
        .then((res) => {
            console.log(res, "hey")
        })
}

$('.fight').on('click', onClickF)