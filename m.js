intro.innerHTML = "Welcome " + document.getElementById('studentName').value
note.innerHTML = "It is my utmost pleasure to sincerely appreciate your efforts for this semester. Please, find below how you have performed. Best regards👋."

if(cumulative >= 0 && cumulative <40) {
    result.innerHTML = "Your score is " + cumulative + "%. Unfortunately, you will not be progressing to the next level. I will suggest you reconsider your intent to study in our noble institution. Thank you and best wishes."
} else if (cumulative >= 40 && cumulative < 60) {
    result.innerHTML = "Your score is " + cumulative + "%. Well done, however, this is not good enough. Please try harder next year, " + studentName.value
}