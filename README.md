# Todo List Web Application

A simple and responsive Todo List web application built using **HTML, CSS, and JavaScript**.  
This project uses **LocalStorage** to store tasks in the browser so data is not lost on refresh.

---

## 🚀 Features

- Add new tasks
- Delete tasks
- Mark tasks as completed
- Persistent storage using LocalStorage
- Data stored in JSON format
- Simple and clean UI

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Browser LocalStorage API
- JSON format for data handling

---

## 💾 How LocalStorage Works in This Project

Tasks are stored in the browser using LocalStorage.

### Example of stored data (JSON format):

```json
[
  {
    "id": 1,
    "task": "Learn JavaScript",
    "completed": false
  },
  {
    "id": 2,
    "task": "Build Todo App",
    "completed": true
  }
]
