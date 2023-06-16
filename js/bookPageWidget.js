let tabAuthor = document.getElementById('tab_author');
let tabReviews = document.getElementById('tab_reviews');
let widgetAuthor = document.querySelector('.widget_inner_author');
let widgetReviews = document.querySelector('.widget_inner_reviews');
tabAuthor.onclick = function() {
    widgetReviews.classList.add('widget_hide');
    widgetAuthor.classList.remove('widget_hide');
    tabReviews.classList.remove('widget_tabs_link_active');
    tabAuthor.classList.add('widget_tabs_link_active');
};
tabReviews.onclick = function() {
    widgetAuthor.classList.add('widget_hide');
    widgetReviews.classList.remove('widget_hide');
    tabReviews.classList.add('widget_tabs_link_active');
    tabAuthor.classList.remove('widget_tabs_link_active');
};