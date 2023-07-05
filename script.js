
document.getElementById('advice_btn').addEventListener('click', generateAdvice)

function generateAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById('advice_id').textContent = `ADVICE # ${data.slip.id}`
            document.getElementById('advice').textContent = `${data.slip.advice}`
        })
}
