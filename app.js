function trivia (){
    var answer;
    var difficulty;
    var categorydiv = document.getElementById("category")
    var questiondiv = document.getElementById("question")
    var a1div = document.getElementById("a1")
    var a2div = document.getElementById("a2")
    var a3div = document.getElementById("a3")
    var a4div = document.getElementById("a4")

    fetch("https://opentdb.com/api.php?amount=1&encode=url3986").then(response => response.json()).then(data => {
        data = data.results[0]
        console.log(data)
        var category = decodeURIComponent(data.category)
        var question = decodeURIComponent(data.question)
        var difficulty = data.difficulty

        const q1 = data
        

        if(q1.type === 'multiple'){
            const palist = [decodeURIComponent(q1.correct_answer), decodeURIComponent(q1.incorrect_answers[0]), decodeURIComponent(q1.incorrect_answers[1]), decodeURIComponent(q1.incorrect_answers[2])]
            console.log(palist)
            
            const a1item = palist[Math.floor(Math.random()*palist.length)]
            const index1 = palist.indexOf(a1item);
            if (index1 > -1) {
                palist.splice(index1, 1)
            }
            const a2item = palist[Math.floor(Math.random()*palist.length)]
            const index2 = palist.indexOf(a2item);
            if (index2 > -1) {
                palist.splice(index2, 1)
            }
            const a3item = palist[Math.floor(Math.random()*palist.length)]
            const index3 = palist.indexOf(a3item);
            if (index3 > -1) {
                palist.splice(index3, 1)
            }
            const a4item = decodeURIComponent(palist[0])
            categorydiv.innerHTML = "Category: " + category
            questiondiv.innerHTML = "Question: " + question
            a1div.innerHTML = a1item
            a2div.innerHTML = a2item
            a3div.innerHTML = a3item
            a4div.innerHTML = a4item
            if(a1div.innerHTML === decodeURIComponent(data.correct_answer)) answer = a1div
            if(a2div.innerHTML === decodeURIComponent(data.correct_answer)) answer = a2div
            if(a3div.innerHTML === decodeURIComponent(data.correct_answer)) answer = a3div
            if(a4div.innerHTML === decodeURIComponent(data.correct_answer)) answer = a4div
            console.log(answer)

    
        } else if(q1.type === 'boolean'){
            question = decodeURIComponent(q1.question)
            category = decodeURIComponent(q1.category)

            categorydiv.innerHTML = "Category: " + category
            questiondiv.innerHTML = "Question: " + question
            a1div.innerHTML = "True"
            a2div.innerHTML = "False"
            a3div.innerHTML = ""
            a4div.innerHTML = ""

            if(a1div.innerHTML === decodeURIComponent(data.correct_answer)) answer = a1div
            if(a2div.innerHTML === decodeURIComponent(data.correct_answer)) answer = a2div
        }


        window.setTimeout(function(){
            answer.classList.add("run-animation")
            setTimeout(function(){ answer.classList.remove("run-animation"); }, 3000)
        }, 10000)
    })
}

function flashanswer (ca){
    //console.log("Flashing")
    ca.classList.add("run-animation")
    setTimeout(function(){ ca.classList.remove("run-animation"); }, 3000)
    //console.log("Done flashing")
}

function start (){
    trivia()
    window.setInterval(function(){
        trivia()
    }, 13000)
}