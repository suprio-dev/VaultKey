let lengthValue = document.querySelector("#lengthValue");
let lengthSlider = document.querySelector("#lengthSlider");
let uppercase = document.querySelector("#uppercase");
let lowercase = document.querySelector("#lowercase");
let numbers = document.querySelector("#numbers");
let symbols = document.querySelector("#symbols");
let excludeSimilar = document.querySelector("#excludeSimilar");
let generateBtn = document.querySelector("#generateBtn");
let passwordOutput = document.querySelector("#passwordOutput");
let copyBtn = document.querySelector("#copyBtn");
let counter = 0, charEnsure = "";
let characterPool = [];

lengthSlider.addEventListener('input', (e) => {
  e.preventDefault();
  lengthValue.textContent = `${lengthSlider.value}`;
})

generateBtn.addEventListener('click', (e) => {
  characterPool = [];
  charEnsure = "";
  counter = 0;
  if (!uppercase.checked && !lowercase.checked && !numbers.checked && !symbols.checked)
    return;
  let response = generatePassword();
  // displayPassword(response);
  passwordOutput.textContent = displayPassword(response).trim();

  copyBtn.addEventListener('click', async (e) => {
    await navigator.clipboard.writeText(passwordOutput.textContent);
    copyBtn.textContent = "✓";
    copyBtn.classList.add(
      "text-violet-400",
      "bg-violet-400/10",
      "border-violet-400/30",
      "scale-105"
    );
  })


})



function generatePassword() {


  if (uppercase.checked) {
    let uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    charEnsure += uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
    counter++;
    characterPool.push(...uppercaseLetters);
    

  }



  if (lowercase.checked) {
    let lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    charEnsure += lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
    counter++;
    characterPool.push(...lowercaseLetters);


  }



  if (numbers.checked) {
    let numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    charEnsure += numberArray[Math.floor(Math.random() * numberArray.length)];
    counter++;
    characterPool.push(...numberArray);


  }





  if (symbols.checked) {
    let symbolsArray = ["!", "@", "#", "$", "%", "&", "*"];
    charEnsure += symbolsArray[Math.floor(Math.random() * symbolsArray.length)];
    counter++;
    characterPool.push(...symbolsArray);


  }

  return characterPool;

}





function displayPassword(response) {
  let password = "";
  for (let i = counter; i < Number(lengthSlider.value); i++) {
    let randomValue = Math.floor(Math.random() * (characterPool.length));
    password += response[randomValue];

  }

  return password + charEnsure;
}

resetBtn.addEventListener('click', (e) => {
  passwordOutput.textContent = `Click
              generate to begin`;
  copyBtn.innerHTML = `<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <rect x="8" y="8" width="12" height="12" rx="2" />
                <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
              </svg>`;
uppercase.checked = false;
    lowercase.checked = false;
    numbers.checked = false;
    symbols.checked = false;
    lengthValue.textContent=`6`;
    lengthSlider.setAttribute("value","6");
})

