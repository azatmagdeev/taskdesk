import {Task} from "./task.js";
import {tasks} from "./task.js";
import {renderList} from "./list.js";

export const inputBlock = document.createElement('div');

const input = document.createElement('input');

const button = document.createElement('button');
button.textContent = 'Добавить';
button.addEventListener('click',()=>{
    const str_len = input.value.length;
    if(str_len > 3){
        const task = new Task(input.value);

        tasks.push(task);
        console.log(tasks);
        renderList();

        input.value = '';
    }
})

inputBlock.appendChild(input);
inputBlock.appendChild(button);
