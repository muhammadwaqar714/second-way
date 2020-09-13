function myresult(){
    score=0;
    var rightAns=document.getElementById("ans2")

    if(rightAns.checked==true){
        score++;
    alert("q1 answer is right")

    }
    
    else{
        alert("q1 answer is wrong")
    }

//q-2

    var rightAns=document.getElementById("q2ans3")

    if(rightAns.checked==true){
        score++;
    alert("q2 answer is right")

    }
    
    else{
        alert("q2 answer is wrong")
    }



    //q-3

    var rightAns=document.getElementById("q3ans1")

    if(rightAns.checked==true){
        score++;
    alert("q3 answer is right")

    }
    
    else{
        alert("q3 answer is wrong")
    }
    // q-4
    var rightAns=document.getElementById("q4ans3")

    if(rightAns.checked==true){
        score++;
    alert("q4 answer is right")

    }
    
    else{
        alert("q4 answer is wrong")
    }

    alert("Your total score is :" + score)








}