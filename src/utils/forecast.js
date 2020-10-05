const request = require('request')

const forecast = (longitude, lattitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=e84335bfe287541b8f64d53355caf613&%20query=' + longitude + ',' + lattitude + '&units=f'
    request({ url: url, json: true }, (error, response) => {

        if (error) {
            callback('Cnnot cannot to the Internet', undefined)
        } else if (response.body.error) {
            callback('There is an issue withn the coordinates', undefined)
        } else {


            callback(undefined, 'it\'s currently  ' + response.body.current.temperature + ' degree Fahrenheit' + ' \n The u-v Index is ' + response.body.current.uv_index + ' \n The chance of rain is ' + response.body.current.precip + ' \n The wind speed is: ' + response.body.current.wind_dir)

        }
    })


}

module.exports = forecast