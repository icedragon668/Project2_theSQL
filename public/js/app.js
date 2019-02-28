
//////vvv TEMP DELETE OR REFACTOR vvv//////
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
//////^^^ TEMP DELETE OR REFACTOR ^^^//////

const sign = $(document).ready(function () {
    $('.modal').modal();
});

const locationList = function(e) {
    e.preventDefault();

    let list = document.getElementById('locationList');
    if (list.style.visibility === 'hidden') {
      list.style.visibility = 'visible';
    } else {
      list.style.visibility = 'hidden';
    }
  };

const expandList = document.querySelector('.collapsible.expandable');
const instance = M.Collapsible.init(expandList, {
    accordion: false
   });

const newLocation = function (e) {
    e.preventDefault();

    let newPage = document.getElementById('townPage');
    newPage.style.display = "none";
    console.log("work pls")
}

$('.btnbtn').on('click', sign);
$('#exploreBtn').on('click', locationList)
$('.newMap').on('click', newLocation)
