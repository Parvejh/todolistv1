# To-Do List React App Documentation

## Overview
This is a simple To-Do List application built with React. It allows users to:
- Add new tasks
- View a list of tasks
- Delete tasks (mark as completed)

---

## File Structure
- `App.js` - Main component managing state and rendering the UI
- `Components/TaskItem.js` - Child component representing a single task item

---

## Key Components and Functionality

### App Component (`App.js`)
- Uses React `useState` hooks to manage:
  - `taskArray` (array of tasks)
  - `taskInput` (current input text)

- **Adding a Task:**
  - `handleSubmit` is triggered on form submission.
  - Prevents default form behavior.
  - Trims whitespace from input.
  - If input is not empty, adds it to `taskArray`.
  - Clears the input field after adding.

- **Deleting (Completing) a Task:**
  - `completeTaskHandler` receives the index of the task to delete.
  - Creates a shallow copy of `taskArray` using spread operator (`[...]`).
  - Uses `splice` to remove the task at the given index from the copied array.
  - Updates state with the new array to trigger re-render.

- **Rendering:**
  - Displays a form with an input field and submit button.
  - Renders a list of `TaskItem` components, passing down the task, its index (`id`), and the `completeTaskHandler` function.

---

### TaskItem Component (`Components/TaskItem.js`)

- Props:
  - `id` - the index of the task in the list.
  - `task` - the task text.
  - `completeTask` - function to delete/complete a task.

- Renders each task inside an `<li>`.
- Provides two buttons:
  - **Done** button calls `completeTask(id)` to delete the task.
  - **Delete** button can be added similarly for removing tasks if needed.

---

## Usage Instructions

1. Run `npm install` (or `yarn install`) to install dependencies.
2. Start the app using `npm start` or `yarn start`.
3. Type your task in the input field and press "Create Task!" to add it.
4. Click "Done" next to any task to remove it from the list.

---

## Notes & Best Practices

- State is updated immutably to ensure React recognizes changes and re-renders UI.
- `splice` is used safely by operating on a shallow copy of the array to avoid mutating original state.
- `key` prop in list rendering is important for React to optimize rendering but should not be used as a prop inside child components.
- Consider using unique IDs for tasks in larger apps to prevent issues with list reordering.

---

## Potential Improvements

- Add task editing capability.
- Mark tasks as completed without deleting.
- Persist tasks to local storage or backend.
- Add validation or notification for empty input.
- Improve accessibility and styling.

---

## Author

[Parvej Hussain]

---

