const request = require('request')
const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2hhaDk5IiwiYSI6ImNrOWlnZHZ2cTAwM2Mza2xyazJqNHY4Y3QifQ.MQK7repXg9eKOUYG8jd69Q'

    request({ url: url, json: true }, (error, response) => {

        if (error) {
            callback('Unable to Connect to Location services', undefined)

        } else if (response.body.features.length === 0) {
            callback('unable to find location', undefined)
        } else {

            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name


            })
        }

    })
}
module.exports = geocode