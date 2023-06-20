'use strict';

//работа input в виде звездочек на странице книги в отзыве
let rating = document.querySelector(".rating");
let stars = document.querySelectorAll(".stars .star");

for(let star of stars){
    star.onclick = function(evt){
        evt.preventDefault();
        rating.selectedIndex = star.textContent
        removeAllStars(stars,"filled_star");
        fillStars(star, stars,"filled_star");
    }
    star.onmouseover = function(evt){

        fillStars(evt.target, stars, "hovered");
    }
    star.onmouseout = function(evt){
        removeAllStars(stars, "hovered");
    }
}

function removeAllStars(stars, type){
    for(let star of stars){
        if(star.classList.contains(type)){
            star.classList.remove(type);
        }
    }
}

function fillStars(selected, stars, type){
    for(let i = 0; i < selected.value; i++){
        stars[i].classList.add(type);
    }
}