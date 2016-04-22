(function () {
  var inputs = document.querySelectorAll("input");

  for (var x = 0; x < inputs.length; x++) {
    inputs[x].addEventListener("click", function () {
      var response = confirm("Do you want to type in this input?");

      if (response) {
        this.parentNode.removeChild(this);
      }
    });
  }

  var mouse = {
    counter: 0
  };

  document.body.addEventListener("mousemove", function () {
    mouse.counter++;

    if (mouse.counter > 20) {
      confirm("You are moving your mouse a lot. You better cool down a bit.");
      mouse.counter = 0;
    }
  });

  document.body.addEventListener("click", function () {
    var node = document.createElement("div");
    node.className = "clicky";
    node.innerHTML = "you just clicked again";
    document.body.appendChild(node);
  });
})();
