// var list = document.querySelector("#list");
var submitbtn = document.querySelector("#submit-btn");
var inputtext = document.querySelector("#enterTodo");
let uid = 0;
var removebtn;
var editbtn;
// console.log(list, submit, input)

function addTodo() {
  // e.preventDefault();
  let text = inputtext.value;
  console.log(text);
  // console.log("clicked");
  if (text == "") {
    alert("please enter some text in the field below");
  } else {
    const li = document.createElement("li");
    list.append(li);
    li.innerText = text;
    uid = uid + 1;
    li.setAttribute("id", "uid");
    li.prepend(uid);

    removebtn = document.createElement("button");
    removebtn.innerText = "Delete";
    removebtn.setAttribute("type", "button");
    removebtn.setAttribute("class", "btn btn-danger");

    editbtn = document.createElement("button");
    editbtn.innerText = "Edit";
    editbtn.setAttribute("type", "button");
    editbtn.setAttribute("class", "btn btn-primary");

    li.append(removebtn);
    li.append(editbtn);
    removebtn.addEventListener("click", function (e) {
      e.stopPropagation();
      let target = e.target;
      target.parentElement.remove();
    });
    editbtn.addEventListener("click", function (e) {
      e.stopPropagation();
      inputtext.value = e.target.parentElement.innerText;
      console.log(text)
    });

    li.classList.add("list-group-item");
    li.onclick = function () {
      if (li.classList.contains("disabled")) {
        li.classList.remove("disabled");
      } else {
        li.classList.add("disabled");
      }
    };
  }
  inputtext.value = ""
}

// addTodo();v
submitbtn.addEventListener("click", (e) => {
  e.preventDefault();
  addTodo();
});

// list.addEventListener("click", function (e) {
//   if (e.target && e.targetName == "li") {
//     console.log(e.target.innerText + "was");
//   }
// });
// let deletebtn = document.getElementsByClassName("btn-danger");
// console.log(removebtn)

// removebtn.addEventListener("click", function () {

//     let li = document.getElementById(uid);
//     li.remove();
// });
