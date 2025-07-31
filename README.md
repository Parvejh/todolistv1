# To-Do List React App

A simple and functional To-Do List application built with React and Tailwind CSS, supporting the following features:

    ✅ Add new tasks

    ✏️ Edit existing tasks

    ✅ Mark tasks as complete

    ❌ Prevent edits on completed tasks

🚀 Features

    Add Tasks: Users can enter a task title and an optional description.

    Edit Tasks: Click "Edit" to load task data into the form and update it.

    Mark Complete: Completed tasks are styled differently and become read-only.

    Form Reuse: The same form is reused for both creating and editing tasks.

    Responsive & Clean UI: Styled using Tailwind CSS for a modern look.

## File Structure
- `App.js` - Main component managing state and rendering the UI
- `Components/TaskItem.js` - Child component representing a single task item

📁 Project Structure

📦 to-do-app/
├── 📁 src/
│   ├── 📁 Components/
│   │   └── TaskItem.jsx   # Reusable component for individual tasks
│   ├── App.jsx            # Main app logic and state management
│   └── index.js           # Entry point
├── 📄 package.json
└── 📄 README.md           # You're here!

⚙️ How It Works
🧠 State Management

    taskArray: Holds all task objects { name, description, isCompleted }

    taskInput / descInput: Controlled inputs for task title and description

    editIndex: Tracks which task (if any) is in edit mode

🧾 Task Structure

Each task is stored as an object:

{
  name: "Buy groceries",
  description: "Milk, Eggs, Bread",
  isCompleted: false
}

🛠️ Getting Started
1. Clone the repository

git clone https://github.com/your-username/todo-react-app.git
cd todo-react-app

2. Install dependencies

npm install

3. Run the app

npm run dev


## Author

[Parvej Hussain]

---




