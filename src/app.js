const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')


///defining paths

const partialPath = path.join(__dirname, '../templates/partials')

///setting up engines
app.use(express.static(path.join(__dirname, '../public')))
app.set('views', path.join(__dirname, '../templates/views'));
hbs.registerPartials(partialPath)

app.set('view engine', 'hbs')

app.get('', (req, res) => {

    res.render('index', {
        title: 'weather App',
        name: 'Shah Aadil'
    })
})

app.get('/about', (req, res) => {

    res.render('about', { title: 'about', name: 'shah aadil' })
})


app.get('/help', (req, res) => {

    res.render("help", { title: 'help', name: 'shah aadil' })

})


app.get('/weather', (req, res) => {

    if (!req.query.address) {

        return res.send({

            error: "Please Provide the address"
        })
    }

    res.send({
        address: req.query.address
    })

})


app.get('/help/*', (req, res) => {

    res.render("404", { name: '4040', title: '404 Error' })

})

app.get('*', (req, res) => {

    res.render("404", { name: '4040', title: '404 Error' })

})

app.listen(3000, () => {

    console.log("Server Stated")
})