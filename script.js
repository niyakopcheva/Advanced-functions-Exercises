document.getElementById('add-button').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();
    const list = document.getElementById('todo-list');
    let newTask = document.createElement('li');
    newTask.textContent = task;
    list.appendChild(newTask);
    let removeBtn = document.createElement('button');
    removeBtn.className = 'remove-button';
    removeBtn.textContent = 'Remove';
    newTask.appendChild(removeBtn);
    input.value = '';

    removeBtn.addEventListener('click', function(){
        const currentTask = removeBtn.parentElement;
        currentTask.remove();
    });
  });

