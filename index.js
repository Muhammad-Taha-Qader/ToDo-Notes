const Theme = {
    LIGHT: 1,
    DARK: 2,
    DAKR_DEEP: 3
};
let currentTheme= Theme.LIGHT;
let todoItems = [];
let itemsAvliableSoFar;

// Load from local storage
function loadTodos() {
    const todoItems = JSON.parse(localStorage.getItem('todoItems')) || [];
    let i=0; // so that id shouldn't keep gowing over the time the app is used
    todoItems.forEach(todo => {
        if(todo.text!=''){
            const newTodoItem=createNewTodoItem(`i${((i++)+1)}`, todo.checkbox, todo.text);
            const newItemParent= todo.checkbox? document.querySelector('.todoItemChecked') : document.querySelector('.todoItemUnchecked') ;
            newItemParent.appendChild(newTodoItem);
            // itemsAvliableSoFar = Math.max(itemsAvliableSoFar, parseInt(todo.id.slice(1)));
        }
    });
    itemsAvliableSoFar=todoItems.length;//So that id don't get init to 1, in case alreday existing items are there
}

function createNewTodoItem(id, checked, text){
    //Creat new TodoItem div
    let newTodoItem = document.createElement('div');
    newTodoItem.className ='todoItem';

    //Creat new div's iteam chcek box
    let newItemCheckbox = document.createElement('input');
    newItemCheckbox.id=id;
    // newCheckbox.setAttribute('type', 'checkbox');  Or can use following
    newItemCheckbox.type = 'checkbox';
    newItemCheckbox.checked=checked;
    newItemCheckbox.setAttribute('onchange' , 'handleCheckboxChange(this)');

    //Creat new textarea for iteam
    let newItemTextarea = document.createElement('textarea');
    newItemTextarea.setAttribute('data-for', id);
    newItemTextarea.setAttribute('placeholder','Enter description...');
    newItemTextarea.value = text;
    newItemTextarea.setAttribute('oninput','autoResize(this)');

    //Creat new del btn for iteam
    let newIteamdel=document.createElement('button');
    newIteamdel.setAttribute('onclick','removeCurrentTodoItem(this)');
    newIteamdel.innerHTML='<i class="fas fa-trash"></i>';
    newIteamdel.className='delBtn';
    newIteamdel.setAttribute('data-for', id);


    //Putting chcek box and labes inside the div that we created
    newTodoItem.appendChild(newItemCheckbox);
    newTodoItem.appendChild(newItemTextarea);
    newTodoItem.appendChild(newIteamdel);

    //For Storing in JS
    // todoItems.push({ text: text,
    //     checkbox: checked, id: id});
    todoItems = [
        ...todoItems,
        { text: text, checkbox: checked, id: id }
    ];    
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
        //id should never be == todoItems.size at time to new creation of 
        //item as it might be possible that u have let say 6 items and u 
        //del the iteam haeaving id 4 , now size of arr is 5 and if we 
        //creat new iteam base on size we will creat new iteam having 
        //id 6, but it should be either 7 or 4 , So way out is that:
        //either use a var init at each reload with the todoitems.size
        //so that for that session u will a;ways going to have an id that 
        //is +1 and nver rise the confilict and ur load implimentation 
        //should be such that, each that web pag load as each iteam is now
        // newly created then u should re assign then ids  (not use old one)
        // base on the size of the array from 0toSize , resone to not use 
        //the old is in that way u alwasy need to find the max id at each 
        //reload and init ur gloabl var keeping track of id with it and 
        //ur ids will kepp growing over the time the app is used
        //Way2: is to just re assign ids each time when an iteam is del but it's too much work
    
    return newTodoItem;
}

// eslint-disable-next-line no-unused-vars
function addNewTodoItem(){
    const isFirstCardEmpty=document.querySelector('.todoItem');
    if(isFirstCardEmpty!=null && isFirstCardEmpty.querySelector('textarea').value==''){
        alert('Hi! You already has a new ToDo item on top.');
    }else{
        const id = `i${++itemsAvliableSoFar}`;
        const newTodoItem = createNewTodoItem(id, false, '');
        //putting the div(new to do item) in our main todoIteams list/card
        document.querySelector('.todoItemUnchecked').appendChild(newTodoItem);
        }
}

// eslint-disable-next-line no-unused-vars
function removeCurrentTodoItem(myThis){
    const currentTodoIteam=myThis.parentNode;
    const parent=currentTodoIteam.parentNode;
    //For Storing in JS
    //U can use .filter too
    // todoItems.forEach(item => {
    //     if(myThis.getAttribute('data-for')==item.id){
    //         todoItems.pop(element);
    //     }
    // });
    const idToDelete = myThis.getAttribute('data-for'); //id of del btn
    // Filter out the item with the matching id and assign the result directly to todoItems
    todoItems = todoItems.filter(item => item.id != idToDelete);
    //Can be done like this but not efficent:
    // Filter out the item with the matching id and create a new array using the spread operator
    //todoItems = [...todoItems.filter(item => item.id != idToDelete)];
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
    parent.removeChild(currentTodoIteam);
}

// eslint-disable-next-line no-unused-vars
function handleCheckboxChange(myThis){
    let currentTodoIteam=myThis.parentNode;
    if(myThis.id == 'i999998'){
        reConfigInitId(myThis.parentNode);
    }
    let parent=currentTodoIteam.parentNode; //parent==Check/Uncheck div
    if (myThis.checked) {
        parent.removeChild(currentTodoIteam);
        //document.getElementsByClassName("todoItemChecked")[0].appendChild(currentTodoIteam); // Will apend at bottom but we don't want that
        var todoItemCheckedDiv = document.getElementsByClassName('todoItemChecked')[0];
        todoItemCheckedDiv.insertBefore(currentTodoIteam, todoItemCheckedDiv.firstChild);        
    }else{
        parent.removeChild(currentTodoIteam);
        document.getElementsByClassName('todoItemUnchecked')[0].appendChild(currentTodoIteam); 
    }
    //For Storing in JS
    // todoItems.forEach(item => {
    //         if(myThis.id==item.id){
    //             item.checkbox=myThis.checked;
    //         }
    //     });
    todoItems = todoItems.map(item => 
        item.id == myThis.id ? { ...item, checkbox: myThis.checked } : item
    );
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

// eslint-disable-next-line no-unused-vars
function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
    if(textarea.getAttribute('data-for') == 'i999998'){
        reConfigInitId(textarea.parentNode);
        if(textarea.value.length==1){
            todoItems.push({ 
                text: '',
                checkbox: textarea.parentNode.querySelector('input[type="checkbox"]').checked, 
                id: textarea.getAttribute('data-for')
            });
            console.log(todoItems);
        }
    }

    const idToUpdate = textarea.getAttribute('data-for');
    const newText = textarea.value;
    todoItems = todoItems.map(item => 
        item.id === idToUpdate ? { ...item, text: newText } : item
    );
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

// eslint-disable-next-line no-unused-vars
function resetAll(){
    localStorage.clear();
    loadTodos();
    // Refresh the page
    location.reload();
}

// eslint-disable-next-line no-unused-vars
function togalTheme(){
    const todoItemUnchecked=document.getElementsByClassName('todoItemUnchecked')[0];
    const todoItemChecked=document.getElementsByClassName('todoItemChecked')[0];
    const myHtml = document.querySelector('html');
    let themeBtn= document.querySelector('#myNav button');

    if(currentTheme===Theme.LIGHT){
        const classesToRemove = ['bg-gradient-to-r', 'from-purple-950', 'to-fuchsia-900'];
        classesToRemove.forEach(className => myHtml.classList.remove(className));
        console.log(myHtml.classList);
        myHtml.classList.add('bg-gradient-to-r', 'from-slate-800', 'to-slate-900');
        // eslint-disable-next-line no-unused-vars
        themeBtn.innerHTML='<i class="fa-regular fa-moon"></i>';
        currentTheme=Theme.DARK;
    }else if(currentTheme===Theme.DARK){
        todoItemUnchecked.classList.remove('bg-custom-transparent');
        todoItemUnchecked.classList.add('bg-purple-900');
    
        todoItemChecked.classList.remove('bg-custom-green');
        todoItemChecked.classList.add('bg-fuchsia-900');
        themeBtn.innerHTML='<i class="fa-solid fa-star"></i>';
        currentTheme=Theme.DAKR_DEEP;
    }else if(currentTheme===Theme.DAKR_DEEP){
        todoItemUnchecked.classList.add('bg-custom-transparent');
        todoItemUnchecked.classList.remove('bg-purple-900');
    
        todoItemChecked.classList.add('bg-custom-green');
        todoItemChecked.classList.remove('bg-fuchsia-900');

        const classesToRemove = ['bg-gradient-to-r', 'from-slate-800', 'to-slate-900'];
        classesToRemove.forEach(className => myHtml.classList.remove(className));
        console.log(myHtml.classList);
        myHtml.classList.add('bg-gradient-to-r', 'from-purple-950', 'to-fuchsia-900');
        // eslint-disable-next-line no-unused-vars
        themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';
        currentTheme=Theme.LIGHT;
    }
}

function reConfigInitId(item){
    const id = `i${++itemsAvliableSoFar}`;
    item.querySelector('input[type="checkbox"]').id=id;
    item.querySelector('textarea').setAttribute('data-for',`${id}`);
    item.querySelector('button').setAttribute('data-for',`${id}`);
}
// Load todos when the page loads
window.onload = loadTodos;