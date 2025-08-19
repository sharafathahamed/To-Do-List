const input= document.getElementById("task-inp");
const addBtn= document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click",()=> {
    const taskText = input.value.trim();
    if(taskText === ""){
        alert("Pl.");
        return;
    }
    const li=document.createElement("li");
    li.className="task";
    li.innerHTML=`
    <span>${taskText}</span>
    <div>
      <button class="complete">✔️</button>
      <button class="delete">🗑️</button>
    </div>
    `;
    li.querySelector(".complete").addEventListener("click",()=>{
        li.classList.toggle("completed");
    });
    li.querySelector(".delete").addEventListener("click", ()=>{
        li.remove();
    });
    taskList.appendChild(li);
    input.value="";
})
function importclock(){
    const clock = document.getElementById("clock");
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours:hours;
    minutes = minutes < 10 ? "0" + minutes: minutes;
    seconds = seconds < 10 ? "0" + seconds :seconds;

    const timeString =`${hours}:${minutes}:${seconds}`;
    clock.textContent = timeString;
}
setInterval(importclock,1000);
importclock();