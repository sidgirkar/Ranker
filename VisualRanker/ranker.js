var schoolsAndScores = {}; // Objects act as dictionaries in JavaScript.

$(function() {
  $("#update").click(function() { // Creates a table with 10 highest scorers.
    alert("Update!");
  });

  $("#b10").click(function() {
    var winner = $("#s10").val();
    if (schoolsAndScores.hasOwnProperty(winner)) {
      schoolsAndScores[winner] += 1;
    }
    else {
      schoolsAndScores[winner] = 1;
    }
    console.log(schoolsAndScores);
  });

  $("#b9").click(function() {
    var winner = $("#s9").val();
    if (schoolsAndScores.hasOwnProperty(winner)) {
      schoolsAndScores[winner] += 2;
    }
    else {
      schoolsAndScores[winner] = 2;
    }
  });

  $("#b8").click(function() {
    var winner = $("#s8").val();
    if (schoolsAndScores.hasOwnProperty(winner)) {
      schoolsAndScores[winner] += 3;
    }
    else {
      schoolsAndScores[winner] = 3;
    }
  });

  $("#b7").click(function() {
    var winner = $("#s7").val();
    if (schoolsAndScores.hasOwnProperty(winner)) {
      schoolsAndScores[winner] += 4;
    }
    else {
      schoolsAndScores[winner] = 4;
    }
  });

  $("#b6").click(function() {
    var winner = $("#s6").val();
    if (schoolsAndScores.hasOwnProperty(winner)) {
      schoolsAndScores[winner] += 5;
    }
    else {
      schoolsAndScores[winner] = 5;
    }
  });

  $("#b5").click(function() {
    var winner = $("#s5").val();
    if (schoolsAndScores.hasOwnProperty(winner)) {
      schoolsAndScores[winner] += 6;
    }
    else {
      schoolsAndScores[winner] = 6;
    }
  });

  $("#b4").click(function() {
    var winner = $("#s4").val();
    if (schoolsAndScores.hasOwnProperty(winner)) {
      schoolsAndScores[winner] += 7;
    }
    else {
      schoolsAndScores[winner] = 7;
    }
  });

  $("#b3").click(function() {
    var winner = $("#s3").val();
    if (schoolsAndScores.hasOwnProperty(winner)) {
      schoolsAndScores[winner] += 8;
    }
    else {
      schoolsAndScores[winner] = 8;
    }
  });

  $("#b2").click(function() {
    var winner = $("#s2").val();
    if (schoolsAndScores.hasOwnProperty(winner)) {
      schoolsAndScores[winner] += 9;
    }
    else {
      schoolsAndScores[winner] = 9;
    }
  });

  $("#b1").click(function() {
    var winner = $("#s1").val();
    if (schoolsAndScores.hasOwnProperty(winner)) {
      schoolsAndScores[winner] += 10;
    }
    else {
      schoolsAndScores[winner] = 10;
    }
  });
});
