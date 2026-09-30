const API_URL = "http://localhost:5000/api/tasks";
const status = document.getElementById("status"),
  list = document.getElementById("taskList");
async function loadTasks() {
  status.textContent = "Loading...";
  list.innerHTML = "";
  try {
    const r = await fetch(API_URL);
    if (!r.ok) throw new Error(`HTTP Error: ${r.status}`);
    const tasks = await r.json();
    status.textContent = "";
    tasks.forEach((t) => {
      const li = document.createElement("li");
      li.textContent = `${t.title} - ${t.completed ? "Completed" : "Pending"}`;
      list.appendChild(li);
    });
  } catch (e) {
    status.textContent =
      "Error: Unable to load tasks. Please check the server.";
    console.error(e);
  }
}
loadTasks();
