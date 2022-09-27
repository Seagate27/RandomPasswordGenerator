const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateButton = document.querySelector("#generateButton")
let randomPassOne = document.querySelector("#randomPassOne")
let randomPassTwo = document.querySelector("#randomPassTwo")

generateButton.addEventListener("click", function(){
    for (let i = 0; i < 15; i++) {
        let randomOne = Math.floor(Math.random() * characters.length) 
        let randomTwo = Math.floor(Math.random() * characters.length)
        passOne = characters[randomOne]
        passtwo = characters[randomTwo]
        randomPassOne.textContent += passOne
        randomPassTwo.textContent += passtwo
    }
})