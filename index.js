
function newElement() {
    // var li = document.createElement("li");
    // var inputValue = document.getElementById("addTodo").value;
    // var t = document.createTextNode(inputValue);
    // li.appendChild(t);
    // if (inputValue === '') {
    //   alert("Input is Empty");
    // } else {
    //   document.getElementById("list").appendChild(li);
    // }
    // document.getElementById("addTodo").value = "";
  
    // var span = document.createElement("SPAN");
    // var txt = document.createTextNode("\u00D7");
    // span.className = "close";
    // span.appendChild(txt);
    // li.appendChild(span);
  
    // for (i = 0; i < close.length; i++) {
    //   close[i].onclick = function() {
    //     var div = this.parentElement;
    //     div.style.display = "none";
    //   }
    // }

    var input= document.getElementById('addtodo')

    var submit = document.getElementById('submit')

    var todoList = document.getElementById('todoList')

    let todos = []; 

    submit.addEventListener('submit', 
    function(event){
      event.preventDefault();
      addTodo(input.value)

    }
    
    )

    function addTodo(item){

      if(item=='')
        alert("please do not leave the box empty")
      else{
        
        const todo= {
          ID: Date.now(),
          name: item,
          completed: false,

        }
        todos.push(todo);
        addToLocalStorage(todos);

        input.value= "";


      }
    }








  }