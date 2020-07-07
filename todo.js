class Todo {

  constructor(id, task) {
    this.id = id
    this.task = task
    this.renderTask()
  }


   renderTask(){
    let container = document.getElementById("container");
    container.insertAdjacentHTML("beforeend",this.createTask(this));
  }


  createTask(response) {
    return (
      `<div class="task" id="${response.id}" onclick="deleteResponse('${response.id}')">` +
      response.task +
      "<br />" +
      "</div>"
    );
  }


}
