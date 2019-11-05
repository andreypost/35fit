import React from 'react'
import ReactDOM from 'react-dom';
import './normalize.css';
import './index.css';
import { App } from './App';



// <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700,900&display=swap" rel="stylesheet">

ReactDOM.render(<App />, document.getElementById('root'));


















/*
class Thenable {
    constructor(num) {
        this.num = num
    }
    then(res, err) {
        console.log(res)
        setTimeout(() => res(this.num * 3), 1000)
    }
}
new Promise(res => res(4))
.then(res => {
    return new Thenable(res)
})
.then(console.log)



/*
new Promise((res,err) => {
    setTimeout(() => res(1), 1000)
}).then(result => {
    console.log(result)
    return new Promise((res, err) => {
        setTimeout(() => res(result * 2), 1000)
    })
}).then(result => {
    console.log(result)
    return new Promise((res, err) => {
        setTimeout(() => res(result * 2), 1000)
    })
}).then((result) => {
    console.log(result)
    return result * 2
})


/*
let scaleNames = {
    c: 'celsius',
    f: 'fahrenheit'
}
function WaterVerdict(props) {
    if (props.scale >= 100) {
        return <p>Water is boiling!</p>
    }
    return <p>Water is not boiling!</p>
}
function toCelcius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
}
function toFahrenheit(celcius) {
    return (celcius * 9 / 5) + 32
}
function tryConvert(temp, convert) {
    const input = parseFloat(temp)
    if (Number.isNaN(input)) {
        return ''
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString()
}
class TemperatureInput extends React.Component {
    handleChange = (e) => {
        this.props.temperatureChange(e.target.value)
    }
    render() {
        return (
            <fieldset>
                <legend>Enter temp in {scaleNames[this.props.scale]}</legend>
                <input value={this.props.temp} onChange={this.handleChange} />
            </fieldset>
        )
    }
}
class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = { temp: '', scale: 'c' }
    }
    handleCelciusChange = (temp) => {
        this.setState({scale: 'c', temp})
    }
    handleFahrenheitChange = (temp) => {
        this.setState({scale: 'f', temp})
    }
    render() {
        const temp = this.state.temp
        const scale = this.state.scale
        const celcius = scale === 'f' ? tryConvert(temp, toCelcius) : temp
        const fahrenheit = scale === 'c' ? tryConvert(temp, toFahrenheit) : temp
        return (
            <div>
                <TemperatureInput scale={'c'} temp={celcius} temperatureChange={this.handleCelciusChange} />
                <TemperatureInput scale={'f'} temp={fahrenheit} temperatureChange={this.handleFahrenheitChange} />
                <WaterVerdict scale={celcius} />
            </div>

        )
    }
}
ReactDOM.render(<Calculator />, document.getElementById('roof'))


/*
function createCircule(x, y, r) {
    let div = document.createElement('div')
    div.style.width = 0
    div.style.height = 0
    div.style.left = x + 'px'
    div.style.top = y + 'px'
    div.className = 'circle'

    document.body.append(div)

    return new Promise(res => {
        setTimeout(() => {
            div.style.width = r + 'px'
            div.style.height = r + 'px'

            div.addEventListener('transitionend', hand => {
                div.removeEventListener('transitionend', hand)
                res(div)
            })
        }, 0)
    })
}

function go() {
    createCircule(300, 300, 200).then(div => {
        div.classList.add('flex')
        div.append('Hello!')
    })
}

document.querySelector('.monthAq').onclick = function(e) {
    go()
}
*/