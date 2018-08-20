
$(document).ready(function() {
//variables
var crystals = ["./assets/images/blueGem.jpg", "./assets/images/greenGem.jpg", "./assets/images/orangeGem.jpg", "./assets/images/purpleGem.jpg"];
var targetNumber = [];
var collectedNumber = 0;
var values = [3, 5, 7, 10];
var wins = 0;
var losses = 0;


//function to shuffle array
function shuffle (o) {
    for(let i = 0; i < o.length * 2; i++) {
      // Get a random index into o, modding to stay withing array length.
      const index = parseInt(Math.random() * o.length * 10, 10) % o.length;
      // Pull that random value out and stick it on the front of the array.
      o.unshift(o.splice(index, 1)[0])
    }
    return o;
  };

//shuffle gems and values
function shuffleArrays() {
    shuffle(values);
    shuffle(crystals);
};

//generate random target number
function numGen() {
targetNumber = Math.floor(Math.random() * 100) + 20;
$("#correctNumber").text(targetNumber);
collectedNumber = 0;
$("#yourNumber").text(collectedNumber);
};

//call numGen function
numGen();

//generate random numbers for each crystal, that swap places and values every round
function crystalGen() {

    $("#crystals").empty();

    shuffleArrays();

    for (var z = 0; z < values.length; z++) {

        var crystalImage = $("<img class = 'crystal-image'>");

        crystalImage.attr("src", crystals[z]);

        crystalImage.attr("data-crystalValue", values[z]);

        $("#crystals").append(crystalImage);
    };

    //onclick function for crystals
    $("img.crystal-image").on("click", function() {

        var crystalValue = ($(this).attr("data-crystalValue"));
        crystalValue = parseInt(crystalValue);

        collectedNumber += crystalValue;

        $("#yourNumber").text(collectedNumber);

        //game win/lose if/else
        if (collectedNumber === targetNumber) {

            wins++;

            $("#wins").text(wins);

            alert("You won! Great job!")

            numGen();

            crystalGen();

        } else if (collectedNumber > targetNumber) {

            losses++;

            $("#losses").text(losses);

            alert("Woops! You lose. Try again!");

            numGen();

            crystalGen();

        };

    });

};

//hide instructions box, generate crystals to start game
$("#instructions").click(function(){
    $(this).fadeOut("slow");
    crystalGen();
});

});