class Api {

  static getTasks() {
    fetch("http://localhost:3000/todos")
    .then(function(response) {
      return response.json()
      })
    .then(function(json) {

      let container = document.getElementById("container");
      for (var i = 0; i < json.length; i++) {
        new Todo(json[i].id, json[i].task)
      }
    })
  }

  static createResponse(response){
    return (
      `<div class="task" id="${response.id}" onclick="deleteResponse('${response.id}')">` + response.task +"<br />" + "</div>"
    );
  }

  static deleteTask(responseId) {
    fetch( `http://localhost:3000/todos/${responseId}`, { method: "delete" } )
    const task = document.getElementById(responseId)
    task.parentNode.removeChild(task)
  }



}
