document.addEventListener("DOMContentLoaded", () => {
  Api.getTasks()
})

const myForm = document.getElementById("todo_form")

myForm.addEventListener("submit", (e) => {
  e.preventDefault()
  var xhttp = new this.XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/todos", true);

  xhttp.onload = function (e) {
    let container = document.getElementById("container");
    let response = JSON.parse(event.target.response);
    container.insertAdjacentHTML("beforeend", Api.createResponse(response));
  };
  var formData = new this.FormData(document.getElementById("todo_form"));
  xhttp.send(formData);
  document.getElementById("task_input").value = "";
})

function deleteResponse(responseId) {
  Api.deleteTask(responseId)
}
