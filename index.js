var list = document.querySelector('#list');
var submitbtn = document.querySelector('#submit-btn')
var inputtext = document.querySelector('#enterTodo');

// console.log(list, submit, input)

function addTodo (){
    // e.preventDefault();
    let text = inputtext.value;
    console.log(text)
    console.log('clicked')
    if (text == ''){
        alert('please enter some text in the field below')
    }
    else{
        // let todo2 = document.createElement('li');
        // let text2 = document.createTextNode(text)
        // // list.appendchild(todo)
        // // let todo = `${text}`
        // todo2.appendChild(text2)
        // todo2.classList.add('list-group-item')
        // list.append(todo2)
       const li = document.createElement('li')
       list.append(li)
       li.innerText = text;
       li.classList.add('list-group-item')
       li.onclick = function() {
        if(li.classList.contains('disabled')){
            li.classList.remove('disabled')
        }
        else{
            li.classList.add('disabled')
        }
       }
    }
}

submitbtn.addEventListener('click', (e)=>{
    e.preventDefault()
    addTodo()
})

list.addEventListener('click', function(e){

    if (e.target && e.targetName == 'li'){
        console.log(e.target.innerText + "was")
    }

})