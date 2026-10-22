# 🔐 VaultKey — Password Studio

### A password generator built with JavaScript.

A sleek, responsive password generator built with HTML, Tailwind CSS, and JavaScript. Customize password length, choose character types, generate passwords, and evaluate password strength using a dynamic strength indicator. Copy generated passwords to the clipboard with a single click.

**Live Demo:** [VaultKey Password Studio](https://suprio-dev.github.io/VaultKey/)

---

## ✨ Features

- Generate random passwords with customizable length
- Adjust password length from 4 to 20 characters
- Include uppercase letters, lowercase letters, numbers, and symbols
- Select character categories based on your preferences
- **Calculate password strength dynamically**
- **Display a visual password strength bar**
- **Update strength levels based on password characteristics**
- Copy generated passwords to the clipboard with one click
- Reset password settings and return to the default state
- Display generated passwords dynamically
- Interactive password length slider
- Responsive user interface
- Modern dark UI with violet accents and subtle gradients
- Asynchronous clipboard operations using `async/await`
- Exclude similar characters

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| Tailwind CSS | Styling and responsive UI |
| JavaScript | Password generation, strength calculation, and DOM manipulation |
| DOM API | Handling user inputs and updating UI elements |
| Clipboard API | Copying generated passwords |
| Regular Expressions | Evaluating password characteristics |
| Conditional Statements | Determining password strength levels |

---

## 🔄 How It Works

```text
Open VaultKey
     ↓
Choose Password Length
     ↓
Select Character Categories
     ↓
Build Character Pool
     ↓
Generate Random Password
     ↓
Calculate Password Strength
     ↓
Update Strength Bar and Label
     ↓
Display Generated Password
     ↓
Copy Password to Clipboard
```

VaultKey uses the selected character categories to build a character pool. JavaScript generates a password based on the chosen length and displays the result in the interface.

The password strength evaluator analyzes characteristics such as length and character variety to determine a strength level. The visual strength bar updates dynamically to provide immediate feedback about the generated password.

The Clipboard API allows users to copy the generated password with a single click.

---

## 🔐 Password Generation Logic

VaultKey uses JavaScript to collect the selected character categories and generate a password of the requested length.

Example:

```js
let characterPool = [];

if (uppercase.checked) {
  characterPool.push(...uppercaseLetters);
}

if (lowercase.checked) {
  characterPool.push(...lowercaseLetters);
}

if (numbers.checked) {
  characterPool.push(...numberArray);
}

if (symbols.checked) {
  characterPool.push(...symbolsArray);
}

let password = "";

for (let i = 0; i < Number(lengthSlider.value); i++) {
  let randomIndex = Math.floor(
    Math.random() * characterPool.length
  );

  password += characterPool[randomIndex];
}
```

The generated password is displayed dynamically according to the selected length and character options.

**Note:** This example illustrates the basic generation logic. It uses `Math.random()` and does not guarantee that every selected character category appears in the generated password. For security-sensitive use, a cryptographically secure random number generator and category validation should be implemented.

---

## 📊 Password Strength Evaluation

VaultKey evaluates the generated password and displays a corresponding strength indicator.

The evaluation can consider factors such as:

- **Password length:** Longer passwords generally provide more possible combinations.
- **Character variety:** Using uppercase letters, lowercase letters, numbers, and symbols can increase the number of possible combinations.
- **Strength indicator:** A visual bar and label communicate the calculated strength level.
- **Dynamic feedback:** The strength indicator updates when a new password is generated or the password changes.

The strength bar provides a quick visual representation of the password's estimated strength.

**Note:** A strength indicator is an estimate, not a guarantee of security. Password length, randomness, uniqueness, and resistance to guessing are important factors. A password containing several character types is not automatically strong if it is predictable.

---

## 📋 Clipboard Integration

VaultKey uses the browser's Clipboard API to copy generated passwords.

```js
await navigator.clipboard.writeText(password);
```

The `writeText()` method writes the password to the clipboard, allowing users to paste it wherever needed.

Clipboard access generally requires a secure context, such as HTTPS or localhost, and may depend on browser permissions.

---

## 🎯 Why I Built It

This project was built to practice working with:

- DOM manipulation
- Event listeners and button interactions
- User input and checkbox validation
- Arrays and the spread operator
- Conditional statements and loops
- Random number generation
- String manipulation
- Regular expressions
- Password strength evaluation
- Dynamic progress indicators
- Clipboard API integration
- Promises and `async/await`
- Dynamic UI updates with JavaScript
- Responsive UI development with Tailwind CSS

---

## 🚀 Run Locally

Clone the repository:

```bash
git clone https://github.com/suprio-dev/VaultKey.git
cd VaultKey
```

Open `index.html` using VS Code Live Server or another local development server.

No external API key is required.

---

## 📌 Project Status

**In Progress — v1.0**

Built as a hands-on project to strengthen my JavaScript fundamentals and explore password generation, password strength evaluation, array manipulation, DOM interactions, clipboard operations, and responsive UI development.

More features and improvements may be added in future versions.