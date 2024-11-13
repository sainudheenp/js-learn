// variables

const addbtn = document.getElementById('add-task')
const inputTask = document.getElementById('input-task')
const container = document.getElementById('container')

document.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        l()
    }
})

addbtn.addEventListener('click', l = () => {
    console.log("created element")
    let taskdiv = document.createElement('div');
    taskdiv.classList.add('task');
    let li = document.createElement('li');
    li.innerHTML = `${inputTask.value}`
    taskdiv.appendChild(li);

    let checkbutton = document.createElement("button");
    checkbutton.innerHTML = `<i class="fa-solid fa-check"><i>`;
    checkbutton.classList.add('checkTask');
    taskdiv.appendChild(checkbutton)

    let deletebutton = document.createElement("button");
    deletebutton.innerHTML = `<i class="fa-solid fa-remove"><i>`;
    deletebutton.classList.add('deleteTask')
    taskdiv.appendChild(deletebutton)

    if (inputTask.value == "") {
        alert('please enter a task')
    } else {
        container.appendChild(taskdiv)
    }
    inputTask.value = "";

    checkbutton.addEventListener('click',()=>{
      checkbutton.parentElement.style.textDecoration ="line-through"  

    })
    deletebutton.addEventListener("click",(e)=>{
        let target = e.target;
        target.parentElement.remove()
    })
})

