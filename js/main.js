document.addEventListener("keydown", function (event) {
  var square = document.querySelector(".square");
  var squareStyle = getComputedStyle(square);
  var squareTop = parseInt(squareStyle.top);
  var squareLeft = parseInt(squareStyle.left);
  var squareHeight = parseInt(squareStyle.height);
  var squareWidth = parseInt(squareStyle.width);

  if (event.key === 'ArrowUp' && squareTop > 0) {
    squareTop -= 10;
  } else if (event.key === 'ArrowDown' && squareTop < window.innerHeight - squareHeight) {
    squareTop += 10;
  } else if (event.key === 'ArrowLeft' && squareLeft > 0) {
    squareLeft -= 10;
  } else if (event.key === 'ArrowRight' && squareLeft < window.innerWidth - squareWidth) {
    squareLeft += 10;
  }

  square.style.top = squareTop + 'px';
  square.style.left = squareLeft + 'px';

  if (squareLeft <= 0 || squareLeft >= window.innerWidth - 100 || squareTop <= 0 || squareTop >= window.innerHeight - 100) {
    var text = document.createElement("div");
    text.innerHTML = "БЕМС";
    text.style.position = 'absolute';
    text.style.top = '50%';
    text.style.left = '50%';
    text.style.transform = 'translate(-50%, -50%)';
    text.style.color = 'white';
    text.style.fontSize = '32px';
    square.appendChild(text);
    setTimeout(function () {
      square.removeChild(text);
    }, 2000);

    if (event.key === 'ArrowUp') {
      squareTop += 20;
    } else if (event.key === 'ArrowDown') {
      squareTop -= 20;
    } else if (event.key === 'ArrowLeft') {
      squareLeft += 20;
    } else if (event.key === 'ArrowRight') {
      squareLeft -= 20;
    }

    square.style.top = squareTop + 'px';
    square.style.left = squareLeft + 'px';
  }

  if (event.key === " ") {
    square.classList.add("jumping");
    setTimeout(function () {
      square.classList.remove("jumping");
    }, 300);
  }

  if (event.key === "Control") {
    square.classList.add("squatting");
  }
});

document.addEventListener("keyup", function (event) {
  var square = document.querySelector(".square");

  if (event.key === "Control") {
    square.classList.remove("squatting");
  }
});