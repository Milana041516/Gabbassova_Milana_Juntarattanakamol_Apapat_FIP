//Buttons
var buttons = document.getElementsByClassName("buy-now-btn");
  for (var i = 0; i < buttons.length; i++) { 
    buttons[i].onclick = function() {
      location.href = "buy-now.html";
    };
  }

  var buttons = document.getElementsByClassName("our-story-btn");
  for (var i = 0; i < buttons.length; i++) { 
    buttons[i].onclick = function() {
      location.href = "our-story.html";
    };
  }

  var buttons = document.getElementsByClassName("merch-btn");
  for (var i = 0; i < buttons.length; i++) { 
    buttons[i].onclick = function() {
      location.href = "merch.html";
    };
  }

  var buttons = document.getElementsByClassName("quiz-btn");
  for (var i = 0; i < buttons.length; i++) { 
    buttons[i].onclick = function() {
      location.href = "quiz.html";
    };
  }