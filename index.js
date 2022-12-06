const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordOne = document.getElementById("password-1")
let passwordTwo = document.getElementById("password-2")

function generatePassword() {
    let password = ""
    let randomIndex = 0
    for (let i = 0; i < 16; i++){
        randomIndex = Math.floor(Math.random()*characters.length)
        password += characters[randomIndex]
    }
    return password
}

function render() {
    passwordOne.textContent = generatePassword()
    passwordTwo.textContent = generatePassword()
}