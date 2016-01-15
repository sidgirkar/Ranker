var schoolsAndScores = {}; // Objects act as dictionaries in JavaScript.
var schoolCount = 0; // No length function for Object keys in JS.
var rankingIDs = ["#p1", "#p2", "#p3", "#p4", "#p5", "#p6", "#p7", "#p8", "#p9", "#p10"]; // IDs of ranking displays.

$(function() {
  $("#rankings").hide(); // Initially, rankings should not be shown.

  $("#update").click(function() { // Creates a table with 10 highest scorers.
    getAndUpdateSchools(Object.keys(schoolsAndScores));
    $("#rankings").show("slow"); // Specifies a "slow" animation.
  });

  $("#b10").click(function() {
    var winner = $("#s10").val();
    addOrChangeSchool(winner, 1);
  });

  $("#b9").click(function() {
    var winner = $("#s9").val();
    addOrChangeSchool(winner, 2);
  });

  $("#b8").click(function() {
    var winner = $("#s8").val();
    addOrChangeSchool(winner, 3);
  });

  $("#b7").click(function() {
    var winner = $("#s7").val();
    addOrChangeSchool(winner, 4);
  });

  $("#b6").click(function() {
    var winner = $("#s6").val();
    addOrChangeSchool(winner, 5);
  });

  $("#b5").click(function() {
    var winner = $("#s5").val();
    addOrChangeSchool(winner, 6);
  });

  $("#b4").click(function() {
    var winner = $("#s4").val();
    addOrChangeSchool(winner, 7);
  });

  $("#b3").click(function() {
    var winner = $("#s3").val();
    addOrChangeSchool(winner, 8);
  });

  $("#b2").click(function() {
    var winner = $("#s2").val();
    addOrChangeSchool(winner, 9);
  });

  $("#b1").click(function() {
    var winner = $("#s1").val();
    addOrChangeSchool(winner, 10);
  });

  function getAndUpdateSchools(allSchools) { // Displays the ten best schools.
    var max = 0;
    var maxSchool = "";
    var schoolsInOrder = [];
    var allSchoolsCopy = allSchools; // Best to make changes to a copy of the original array.

    while ((allSchoolsCopy.length !== 0) && (schoolsInOrder.length < 10)) {
      for (var i = 0; i < allSchoolsCopy.length; i++) {
        currentScore = schoolsAndScores[allSchoolsCopy[i]];
        if (currentScore >= max) { // Replaces the max value and max school with the current values.
          max = currentScore;
          maxSchool = allSchoolsCopy[i];
        }
      }
      schoolsInOrder.push(maxSchool); // Adds the best school, and resets for the next loop.
      allSchoolsCopy.splice(allSchoolsCopy.indexOf(maxSchool), 1); // Removes the school from the array.
      max = 0;
      maxSchool = "";
    }
    for (var i = 0; i < schoolsInOrder.length; i++) { // Updates the headings with the new scores.
      $(rankingIDs[i]).text((i+1) + ".\t" + schoolsInOrder[i] + "\t->\t" + schoolsAndScores[schoolsInOrder[i]]);
    }
  }
});

function addOrChangeSchool(school, value) { // Creates a new school or increases its score.
  if (schoolsAndScores.hasOwnProperty(school)) {
    schoolsAndScores[school] += value;
  }
  else {
    schoolsAndScores[school] = value;
    schoolCount++;
  }
}
