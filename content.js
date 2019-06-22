function delayCSS() {
    let links = document.getElementsByTagName('link');
    for (let i = 0; i < links.length; i++) {
        if (links[i].rel = "stylesheet" && i > 1){
            // links[i].href = 'https://pastebin.com/raw/J42vxWGJ';
        }
    }
}

setTimeout(delayCSS, 2500);

//
//    "js": ["content.js"],