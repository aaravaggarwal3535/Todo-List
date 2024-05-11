let plus = document.getElementById("plusbtn")
let minus = document.getElementById("minusbtn")
let blank = document.getElementById("clearbtn")

const add = async () => {
  document.getElementsByClassName("prompt")[0].innerHTML = `<label for="name">ID?:</label>
      <input type="text" id="id" name="name" required/> <label for="name">ToDo?:</label>
      <input type="text" id="currentTodo" name="name" required/> <label for="name">date?:</label>
      <input type="text" id="date" name="name" required/> <label for="name">Time?:</label>
      <input type="text" id="time" name="name" required/> <button id="ok" type="button">
          ok
      </button>`
  let click = document.getElementById("ok")
  const ok = async () => {
    const tempoId = document.getElementById("id");
    let id = await tempoId.value;
    for (i = 0; i <= localStorage.length; i++) {
      let item = localStorage.key(i)
      if (item == id) {
        const tempoDate = document.getElementById("date");
        let date = await tempoDate.value;
        const timeTodo = document.getElementById("time");
        let time = await timeTodo.value;
        const tempoTodo = document.getElementById("currentTodo");
        let todo = await tempoTodo.value;
        localStorage.setItem(id, ` ${todo} , Date: ${date} , Time: ${time}`)
        document.getElementsByClassName("prompt")[0].innerHTML = ""
        window.location.reload();
      }
      else {
        const tempoDate = document.getElementById("date");
        let date = await tempoDate.value;
        const timeTodo = document.getElementById("time");
        let time = await timeTodo.value;
        const tempoTodo = document.getElementById("currentTodo");
        let todo = await tempoTodo.value;
        localStorage.setItem(id, ` ${todo} , Date: ${date} , Time: ${time}`)
        document.getElementsByClassName("prompt")[0].innerHTML = ""
        window.location.reload();
      }
    }
  }
  click.addEventListener("click", ok)

}

const subract = async () => {
  document.getElementsByClassName("prompt")[0].innerHTML = `<label for="name">ID:</label>
  <input type="text" id="id" name="name" required/> <button id="ok" type="button">
      ok
  </button>`
  let click = document.getElementById("ok")
  const ok = async () => {
    const tempoId = document.getElementById("id");
    let id = await tempoId.value;
    localStorage.removeItem(id)
    document.getElementsByClassName("prompt")[0].innerHTML = ""
    window.location.reload();
  }
  click.addEventListener("click", ok)
}

const clear = async () => {
  let confirmation = confirm("Are you Sure You Want to REMOVE all ToDo?")
  if (confirmation) {
    localStorage.clear()
    window.location.reload();
    alert("All ToDo Removed")
  }
  else {
    alert("Feel Safe All your Todo Are Still There")
  }
}

plus.addEventListener('click', add)
minus.addEventListener('click', subract)
blank.addEventListener('click', clear)

ihtml = ""
let length = localStorage.length
for (i = 0; i < length; i++) {
  x = localStorage.key(i);
  ihtml += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">ID: ${x}</h5>
      <p class="card-text">ToDo: ${localStorage.getItem(x)}</p>
    </div>
  </div>`
}
document.getElementsByClassName("todoHolder")[0].innerHTML = ihtml