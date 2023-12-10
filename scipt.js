function playMusic() {
    var song = new Audio("past_lives.mp3")
    song.play()
}

function check() {
    playMusic()
    if (studentName.value == '' || biology.value == '' || physics.value == '' || chemistry.value == '' || math.value == '' || geo.value == '' || studentID.value == '' || eng.value == '')  {
        empty.style.display = "block"
    }
    else {
        var confirming = confirm  ("are you sure you want to proceed")
        if (confirming == true){
            empty.style.display = "none"

            var sum = Number(biology.value) + Number(physics.value) + Number(chemistry.value) + Number(math.value) + Number(geo.value) + Number(eng.value)

            var cumulative = (sum/600) * 100 .toFixed(2)

            if ( biology.value > 100 || physics.value > 100 || chemistry.value > 100 || math.value > 100 || geo.value > 100 || eng.value > 100)  {
                alert("scores cannot be more than 100")
                
            }
            else {
                introduction.innerHTML = "Welcome " + document.getElementById('studentName').value
            note.innerHTML = "It is my utmost pleasure to sincerely appreciate your efforts for this semester. Please, find below how you have performed. Best regards👋."

             if(cumulative >= 0 && cumulative <40) {
                result.innerHTML = "Your score is " + cumulative + "%. Unfortunately, you will not be progressing to the next level. I will suggest you reconsider your intent to study in our noble institution. Thank you and best wishes."
                result.style.color = "red"
            } 
            else if (cumulative >= 40 && cumulative < 60) {
                result.innerHTML = "Your score is " + cumulative + "%. Well done, however, this is not good enough. Please try harder next year, " + studentName.value
            }
            else if (cumulative >= 65 && cumulative < 90) {
                result.innerHTML = "Your score is " + cumulative + "%. Well done, however, this is not good enough. Please try harder next year, " + studentName.value
                result.style.color = "orange"
            }

            else if (cumulative >= 90 && cumulative < 100) {
                result.innerHTML = "Your score is " + cumulative + "%. Well done, this is a good result, keep it up, " + studentName.value
                result.style.color = "green"
            }
            }

            

            document.getElementById('biology').value = ""
            document.getElementById('studentName').value = ""
            document.getElementById('physics').value = ""
            document.getElementById('chemistry').value = ""
            document.getElementById('math').value = ""
            document.getElementById('geo').value = ""
            document.getElementById('eng').value = ""
            document.getElementById('studentID').value = ""


        }
    }
    
}