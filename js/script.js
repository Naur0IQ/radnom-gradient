// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f
let hexCode1 = "";
let hexCode2 = "";
function getRandomGradient(){
    for(let i=0;i<6;i++) {
        let randomGradient1 = Math.floor(Math.random() * hexColorCodes.length);
        let randomGradient2 = Math.floor(Math.random() * hexColorCodes.length);
        hexCode1 = hexCode1 + hexColorCodes[randomGradient1];
        hexCode2 = hexCode2 + hexColorCodes[randomGradient2];
    }
    return hexCode1, hexCode2;
} 

function innerHexCode() {
    getRandomGradient();    
    document.getElementById("hex-code1").innerHTML = hexCode1;
    document.getElementById("hex-code2").innerHTML = hexCode2;
    document.getElementById("body").style.background = "linear-gradient(to right, #" + hexCode1 +", #" + hexCode2 + ")";
    hexCode1 = "";
    hexCode2 = "";
}

const hexColorCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
