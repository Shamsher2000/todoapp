window.addEventListener('load',()=>{
    const form=document.querySelector('#new-task-form');
    const input=document.querySelector('#new-task-input');
    const list_element=document.querySelector('#task-ele');
    const date=document.querySelector("#new-task-date")
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        const task=input.value;
        if(!task)
        {
            alert("enter the task plzz");
            return;
        }
        if(!date.value)
        {
            alert("enter the task Date");
            return;
        }
        console.log(task);
        const task_element=document.createElement("div");
        task_element.classList.add("Each-task");

        const task_content=document.createElement("div");
        task_content.classList.add("task-content");

        const input_data=document.createElement("input");
        input_data.classList.add("text");
        input_data.setAttribute("readonly","true");
        input_data.value=task;


        const input_date=document.createElement("input");
        input_date.setAttribute("type","date");
        // input_date.setAttribute("max","2030-12-31");
        input_date.setAttribute("min","2018-01-01");
        input_date.classList.add("input-date");
        input_date.value=date.value;
        input_date.setAttribute("readonly","true");
        
        task_content.appendChild(input_date);
        task_content.appendChild(input_data);
        
        const action_buttons=document.createElement("div");
        action_buttons.classList.add("actions");

        const delete_button=document.createElement("button");
        delete_button.classList.add("delete-task");
        delete_button.innerText="Delete";

        const edit_bnutton=document.createElement("button");
        edit_bnutton.classList.add("edit-task");
        edit_bnutton.innerText="Edit";


        action_buttons.appendChild(edit_bnutton);
        action_buttons.appendChild(delete_button);
       
        task_element.appendChild(task_content);
        task_element.appendChild(action_buttons);

        list_element.appendChild(task_element);
        input.value="";
        date.value="";


        edit_bnutton.addEventListener("click",()=>{
            if(edit_bnutton.innerText.toLowerCase()=="edit")
            {
                input_data.removeAttribute("readonly");
                edit_bnutton.innerText="Save";
                input_data.focus();
                input_date.removeAttribute("readonly");
                input_date.focus();
                // input_date.value=new Date();
            }
            else{
                edit_bnutton.innerText="Edit";
                input_data.setAttribute("readonly",'true');
                input_date.setAttribute("readonly",'true');
                edit_bnutton.innerText="Edit";
            }
        })
        delete_button.addEventListener("click",()=>{
            list_element.removeChild(task_element);
            return;
        })
    })
    
    
})
const clear=document.querySelector('#clear-button');

    clear.addEventListener("click",()=>{
        const list_element=document.querySelector('#task-ele');
        list_element.innerHTML='';
        // while (list_element.firstChild)
        //     list_element.removeChild(list_element.lastChild);
    });


