# :mechanical_arm: Gympass Automation

## About
Gympass is a platform that concentrate gyms and lets the user make checkin, book classes and so on. This repository aims to automate this tasks, making it not necessary to open the app to do so.

## ✨ Features
- Book classes
- Cancel classes
- Check in


## 🧬 Technologies
- Cypress

## 📌 Requirements
To run this project, be sure to have installed:
- [Node v14.17.0](https://nodejs.dev/download/)
- [A code editor](https://code.visualstudio.com)

After that, you need to clone this repo:
```bash
git clone https://github.com/LBeghini/gympass-automation.git
```

## ⚙️ Setup
Before running the code, you need to install the dependencies. From a terminal at the root directory of the project, run:
```bash
npm install
```

At the root directory, you will need to create a file named `cypress.env.json` with the following content:
```json
{
  "checkin_gym_name": "",
  "checkin_gym_latitude": -00.000000000000,
  "checkin_gym_longitude": -00.000000000000,
  "checkin_gym_class": "",
  "book_class_gym_name": "",
  "book_class_gym_latitude": -00.000000000000,
  "book_class_gym_longitude": -00.000000000000,
  "book_class_gym_class": "",
  "book_class_time": "00h",
  "login": "your.email@email.com",
  "password": "password123"
}

```

Replace it with your personal information. Checkin and booking are different things, so it is possible to book classes in a different gyms.

>The login and password are the ones you use to your Gympass account.

## ▶️ Running

### 📖 Book class
```bash
npm book
```

### 📘 Cancel class
```bash
npm cancel
```

### ✔️ Checkin class
```bash
npm checkin
```
