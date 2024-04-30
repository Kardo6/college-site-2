"use strict";

const languageChange = document.querySelector('.choose-language');
const languageList = document.querySelector('.search-bar--languages')

function languageListener(e) {
    if (!languageList.classList.contains('search-bar--languages--change')) {
        languageList.classList.add('search-bar--languages--change');
    } else {
        languageList.classList.remove('search-bar--languages--change');
    }
}

languageChange.addEventListener('click', languageListener);