function switchOff(){
    document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    document.getElementById("switch-status").textContent = "Switched Off"
    document.getElementById("onButton").style.backgroundColor = "#22c55e"
    document.getElementById("offButton").style.backgroundColor = "#cbd2d9"
}

function switchOn(){
    document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    document.getElementById("switch-status").textContent = "Switched On"
    document.getElementById("offButton").style.backgroundColor = "#e12d39"
    document.getElementById("onButton").style.backgroundColor = "#cbd2d9"
}


let a = 900.5
let b = 9.02

console.log(typeof(a));
console.log(typeof(b));