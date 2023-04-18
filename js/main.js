function clickFunction(){
    alert("Hello, world")
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let introTitle = document.getElementById("hacker_title")


document.querySelector('#hacker_title').onmouseover = event => {
    let iterations = 0;
    
    //alert("I've been hit")
    console.log("I've been hit")

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
        .map((letter, index) =>  {
            if(index < iterations){
                return event.target.dataset.value[index];
            }
            return letters[ Math.floor(Math.random() * 26)]
        })
        .join("");

        if(iterations >= event.target.dataset.value.length) clearInterval(interval);

        iterations += 1 / 3;
    }, 30)
}

const items = document.querySelectorAll('.item');

items.forEach(item => {
  item.addEventListener('mouseover', () => {
    items.forEach(item => {
      item.classList.remove('active');
    });
    item.classList.add('active');
  });
});

// Remove the "active" class when the mouse leaves the item
items.forEach(item => {
  item.addEventListener('mouseleave', () => {
    item.classList.remove('active');
  });
});

var currentCard = 1;
var totalCards = $(".carouselcard").length;

function moveCards(direction) {
  if (direction == "next" && currentCard < totalCards) {
    $(".carousel-wrapper").css("transform", "translateX(-" + (currentCard * 100) + "%)");
    currentCard++;
  } else if (direction == "previous" && currentCard > 1) {
    $(".carousel-wrapper").css("transform", "translateX(-" + ((currentCard - 2) * 100) + "%)");
    currentCard--;
  }
}

$(".next-button").click(function() {
  moveCards("next");
});

$(".previous-button").click(function() {
  moveCards("previous");
});

const cards = document.querySelectorAll('.expandcard');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('expanded');
  });

  card.addEventListener('mouseleave', () => {
    card.classList.remove('expanded');
  });
});
