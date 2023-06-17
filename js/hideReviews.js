let reviews = document.querySelector('.comment_list');
let moreButton = document.querySelector('.show_all_reviews_button');
moreButton.addEventListener('click', function() {
	reviews.classList.remove('hide_reviews');
    moreButton.classList.add('hidden');
});