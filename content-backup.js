/* Main background colour */
let background = ['uiScrollableAreaBody']; //, '_4sp8', '_6ckg', '_17pz', '_293j', '_5r8a._5r8b', '_3z51'
let backgroundLight = ['_29_7._52mr', '__6j._43kk']; // #373737
let backgroundDark = ['_1ht2']; //#141414
let backgroundTransparent = ['_hh7._6ybn._2f5r'];
let borderRightDark = ['uiScrollableAreaBody'];
let textOffWhite = ['_29_7._52mr']; //#f9f9f9

function setEl() {
    // Backgrounds
    for (let i = 0; i < background.length; i++) {
        let element = document.getElementsByClassName(background[i]);
        element[0].style.backgroundColor = '#212121';
    }
    for (let i = 0; i < backgroundLight.length; i++) {
        let element = document.getElementsByClassName(backgroundLight[i]);
        element[0].style.backgroundColor = '#373737';
    }
    for (let i = 0; i < backgroundDark.length; i++) {
        let element = document.getElementsByClassName(backgroundDark[i]);
        element[0].style.backgroundColor = '#141414';
    }
    for (let i = 0; i < backgroundTransparent.length; i++) {
        let element = document.getElementsByClassName(backgroundTransparent[i]);
        element[0].style.backgroundColor = 'rgba(255, 255, 255, 0)';
    }

    // Borders
    for (let i = 0; i < borderRightDark.length; i++) {
        let element = document.getElementsByClassName(backgroundDark[i]);
        element[0].style.borderRight = '1px solid black';
    }

    // Text colouring
    for (let i = 0; i < textOffWhite.length; i++) {
        let element = document.getElementsByClassName(textOffWhite[i]);
        element[0].style.color = '#f9f9f9';
    }
}

window.onload = setEl;