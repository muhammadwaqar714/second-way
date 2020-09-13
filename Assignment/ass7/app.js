var list=document.getElementById('list')


function addItem(){
    var todo=document.getElementById('todo')
//create li tag
    var li=document.createElement('li')
    var liText=document.createTextNode(todo.value)
    li.appendChild(liText)
    list.appendChild(li)
    todo.value=""


    //create delet button 
    var delBtn=document.createElement('button')
    var delText=document.createTextNode('Delete')
    delBtn.appendChild(delText)
    li.appendChild(delBtn)


    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deletItem(this)")

    
}

function deletItem(e){


e.parentNode.remove()

}

    // create button to  detel all item

    function deleAll(){

        list.innerHTML=""
    }