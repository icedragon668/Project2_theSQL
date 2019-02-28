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