
document.addEventListener("DOMContentLoaded", init)

const submitForm = document.querySelector('#create-task-form')
const taskList = document.querySelector('#tasks')
const sortButton = document.querySelector('.sort')
const taskField = document.querySelector('[name="new-task-description"]')
let taskPriority = document.querySelector('[name="task-priority"]')

function init(){

  submitForm.addEventListener('submit', addTask)
  function addTask(e){
    const priorityLabelMap = ['high', 'medium', 'low']
    e.preventDefault()
    const taskInfo = taskField.value
    let taskNumber = parseInt(taskPriority.value)-1
    let priority = priorityLabelMap[taskNumber]

      const template = `<li class="${priority} task" data-value="${taskNumber}">${taskInfo}<button class="delete">x</button></li>`

      taskList.innerHTML += template
      submitForm.reset();
  }

  document.body.addEventListener('click', function(e){
    if (e.target.className === 'delete'){
       e.target.parentElement.remove();
    }
  })

  sortButton.addEventListener('click', function(e){
    e.preventDefault()
    const allTasks = document.querySelectorAll('.task')
    const allTasksArray = [...allTasks]
    const sortedTasks = allTasksArray.sort(function(a, b){
      return parseInt(a.dataset.value) - parseInt(b.dataset.value)
    })
    taskList.innerHTML = ''
    sortedTasks.forEach(function(task){
      taskList.innerHTML += task.outerHTML;
    })
  })
}
