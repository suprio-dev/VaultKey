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
let strengthLabel = document.querySelector("#strengthLabel");
let strengthBar = document.querySelector("#strengthBar");
let errorMessage = document.querySelector("#errorMessage");
let counter = 0, charEnsure = "";
let characterPool = [];
const similarChars = "O0oIl1!S5Z2B8G6q9Duv";


lengthSlider.addEventListener('input', (e) => {
  e.preventDefault();
  lengthValue.textContent = `${lengthSlider.value}`;
})

generateBtn.addEventListener('click', (e) => {
  characterPool = [];
  charEnsure = "";
  counter = 0;
  let isClickedExcludeSimilar = excludeSimilar.checked;
  if (!uppercase.checked && !lowercase.checked && !numbers.checked && !symbols.checked) {
    errorMessage.classList.remove("hidden");
    return;
  }
  errorMessage.classList.add("hidden");
  let response = generatePassword(isClickedExcludeSimilar);
  if (isClickedExcludeSimilar === true) {
    characterPool = characterPool.filter((value) => {
      return !similarChars.includes(value)
    })
    response = characterPool;
  }
  passwordOutput.textContent = displayPassword(response).trim();
  let score = 0;
  password = displayPassword(response).trim();
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (password.length >= 16) score++;

  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (password.length < 8 || score <= 2) {
    strengthLabel.textContent = `Weak`;
    strengthBar.innerHTML = `<span class="h-1.5 flex-1 rounded-full bg-red-500"></span>
              <span class="h-1.5 flex-1 rounded-full bg-white/10"></span>
              <span class="h-1.5 flex-1 rounded-full bg-white/10"></span>
              <span class="h-1.5 flex-1 rounded-full bg-white/10"></span>`;
  } else if (score <= 4) {
    strengthLabel.textContent = `Medium`;
    strengthBar.innerHTML = `<span class="h-1.5 flex-1 rounded-full bg-orange-400"></span>
              <span class="h-1.5 flex-1 rounded-full bg-orange-400"></span>
              <span class="h-1.5 flex-1 rounded-full bg-white/10"></span>
              <span class="h-1.5 flex-1 rounded-full bg-white/10"></span>`;

  } else if (score <= 5) {
    strengthLabel.textContent = `Good`;
    strengthBar.innerHTML = `<span class="h-1.5 flex-1 rounded-full bg-yellow-400"></span>
              <span class="h-1.5 flex-1 rounded-full bg-yellow-400"></span>
              <span class="h-1.5 flex-1 rounded-full bg-yellow-400"></span>
              <span class="h-1.5 flex-1 rounded-full bg-white/10"></span>`;
  } else {
    strengthLabel.textContent = `Strong`;
    strengthBar.innerHTML = `<span class="h-1.5 flex-1 rounded-full bg-emerald-400"></span>
              <span class="h-1.5 flex-1 rounded-full bg-emerald-400"></span>
              <span class="h-1.5 flex-1 rounded-full bg-emerald-400"></span>
              <span class="h-1.5 flex-1 rounded-full bg-emerald-400"></span>`;
  }
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



function generatePassword(isClickedExcludeSimilar) {


  if (uppercase.checked) {
    let uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    if (isClickedExcludeSimilar === true) {
      uppercaseLetters = uppercaseLetters.filter((value) => {
        return !similarChars.includes(value)
      })
    }
    charEnsure += uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
    counter++;
    characterPool.push(...uppercaseLetters);


  }



  if (lowercase.checked) {
    let lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    if (isClickedExcludeSimilar === true) {
      lowercaseLetters = lowercaseLetters.filter((value) => {
        return !similarChars.includes(value)
      })
    }
    charEnsure += lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
    counter++;
    characterPool.push(...lowercaseLetters);


  }



  if (numbers.checked) {
    let numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if (isClickedExcludeSimilar === true) {
      numberArray = numberArray.filter((value) => {
        return !similarChars.includes(value)
      })
    }
    charEnsure += numberArray[Math.floor(Math.random() * numberArray.length)];
    counter++;
    characterPool.push(...numberArray);


  }





  if (symbols.checked) {
    let symbolsArray = ["!", "@", "#", "$", "%", "&", "*"];
    if (isClickedExcludeSimilar === true) {
      symbolsArray = symbolsArray.filter((value) => {
        return !similarChars.includes(value)
      })
    }
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
  errorMessage.classList.add("hidden");
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
  strengthLabel.textContent = `Not generated`;
  strengthBar.innerHTML = `<span class="h-1.5 flex-1 rounded-full bg-white/10"></span>
              <span class="h-1.5 flex-1 rounded-full bg-white/10"></span>
              <span class="h-1.5 flex-1 rounded-full bg-white/10"></span>
              <span class="h-1.5 flex-1 rounded-full bg-white/10"></span>`;
})

