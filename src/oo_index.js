
document.addEventListener("DOMContentLoaded", init)

const submitForm = document.querySelector('#create-task-form')
const taskList = document.querySelector('#tasks')
const taskField = document.querySelector('[name="new-task-description"]')

function init(){
  submitForm.addEventListener('submit', addTask)
  function addTask(e){
    e.preventDefault()
    const taskInfo = taskField.value
      const template = `<li>${taskInfo}<button class="delete">x</button></li>`
      taskList.innerHTML += template
      submitForm.reset();
  }

  document.body.addEventListener('click', function(e){
    if (e.target.className === 'delete'){
       e.target.parentElement.remove();
    }
  })
}
