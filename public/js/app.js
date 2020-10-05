let weatherForm = document.querySelector('form')
let search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let location = search.value
    fetch('/weather?address=' + location).then((response) => {

        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {

                document.querySelector('#forecaste').textContent = data.forecaste
                document.querySelector('#location').textContent = data.location
            }
        })

    })



})