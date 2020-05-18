import {tasks} from "./task.js";

export const list = document.createElement('ol');

export function renderList(){
    list.innerHTML = '';
    tasks.map(task=>{
        const li = document.createElement('li');
        li.textContent = task.name + ' ' + task.date.toDateString();
        console.dir(task.date);
        list.appendChild(li);
    });
}
