let background_main = {
    colour: "#161616",
    elements: ['_673w _6ynl', '_3tkv', '_6-xk', '_5iwm _6-_b _150g _58ah', '_6zkb _7t1l _6zkc']
};
let background_elements = [background_main];

function setEl() {
    // Background Colour Loop
    for (let i = 0; i < background_elements.length; i++) {
        for (let j = 0; j < background_elements[i].elements.length; j++) {
            document.getElementsByClassName(background_elements[i].elements[j])[0].style.backgroundColor = background_elements[i].colour;
        }
    }
};

window.onload = setEl;