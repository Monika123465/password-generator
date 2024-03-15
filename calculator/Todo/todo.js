let form = document.querySelector(".form")
let button = document.querySelector('.button').addEventListener('click', (e) => {
    e.preventDefault()

    let form = document.querySelector('.form')
    let todo = document.querySelector('.todo').value
    // console.log(input)

    let data = new dataarr(todo)
    let datarrdefine = JSON.parse(localStorage.getItem("dataadded")) || []
    datarrdefine.push(data)
    localStorage.setItem("dataadded", JSON.stringify(datarrdefine))



})
function dataarr(t) {
    this.todo = t

}

let datarrdefine = JSON.parse(localStorage.getItem("dataadded")) || []

let tododiv = document.querySelector('.data')

displayproducts(datarrdefine)
function displayproducts(datarrdefine) {
    document.querySelector('.data').innerHTML = ""

    datarrdefine.forEach((e,index) => {

        let datatodo = document.createElement('div')
        let input = document.createElement('p')
        input.innerText = e.todo

        let task=document.createElement('button')
        task.innerHTML="done"
        task.addEventListener('click',(e)=>{
            // if(task.innerHTML=="Done"){
            //     task.innerHTML="Not done"
            // }else{
            //     task.innerHTML="Done"
            // }
           task.innerHTML =  task.innerHTML == "done" ? "Not done":"done"

        })

        let remove = document.createElement('button')
        remove.innerText = "Remove"
        remove.addEventListener('click',(e)=>{
            datarrdefine.splice(index,1)
            localStorage.setItem("dataadded", JSON.stringify(datarrdefine))

        })
        datatodo.append(input, remove,task)
        tododiv.append(datatodo)


    })

}



