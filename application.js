const elementAdditionPosition = "beforeend";

function getTasks() {
  fetch("http://localhost:3000/todos")
  .then(function(response) {
    return response.json()
    })
  .then(function(json) {
    let container = document.getElementById("container");
    for (var i = 0; i < json.length; i++) {
      container.insertAdjacentHTML(elementAdditionPosition,createResponse(json[i]));
    }
  })
}


window.sendForm = function (event) {
  event.preventDefault();
  var xhttp = new this.XMLHttpRequest();
  xhttp.open("POST", "http://localhost:3000/todos", true);
  xhttp.onload = function (event) {
    let container = document.getElementById("container");
    let response = JSON.parse(event.target.response);
    container.insertAdjacentHTML(
      elementAdditionPosition,
      createResponse(response)
    );
  };
  var formData = new this.FormData(document.getElementById("todo_form"));
  xhttp.send(formData);
  document.getElementById("task_input").value = "";
};

function createResponse(response) {
  return (
    `<div class="task" id="${response.id}" onclick="deleteResponse('${response.id}')">` +
    response.task +
    "<br />" +
    "</div>"
  );
}

function edit(id) {
  fetch
}

function deleteResponse(responseId) {
  fetch( `http://localhost:3000/todos/${responseId}`, { method: "delete" } )
  const task = document.getElementById(responseId)
  task.parentNode.removeChild(task)
}
getTasks()
