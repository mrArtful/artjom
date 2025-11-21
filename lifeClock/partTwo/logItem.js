export function createLogItem(time, date) {
  const li = document.createElement("li");

  const timeSpan = document.createElement("span");
  timeSpan.textContent = time;

  const dateSpan = document.createElement("div");
  dateSpan.textContent = date;
  dateSpan.style.display = "none"; // hidden initially
  dateSpan.style.fontSize = "0.9rem";
  dateSpan.style.color = "#555";

  // Show Date button
  const showDateBtn = document.createElement("button");
  showDateBtn.textContent = "Show date";
  showDateBtn.addEventListener("click", () => {
    dateSpan.style.display =
      dateSpan.style.display === "none" ? "block" : "none";

    showDateBtn.textContent =
      dateSpan.style.display === "none" ? "Show date" : "Hide date";
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.background = "#ff6666";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(timeSpan);
  li.appendChild(showDateBtn);
  li.appendChild(deleteBtn);
  li.appendChild(dateSpan);

  return li;
}
