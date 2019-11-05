import React from 'react';

class GlSetRateLine extends React.Component {
    componentDidMount() {
        let elems = document.querySelectorAll('.greyLineGl')
        if (!elems) return
        for (let elem of elems) {
            let line = elem.querySelector('.greenLineGl')
            let pers = elem.nextElementSibling.firstChild.innerHTML
            line.style.width = pers + '%'
        }
    }
    render() {
        return (
            <div className="greyLineGl">
                <div className="greenLineGl"></div>
            </div>
        );
    }
}
export default GlSetRateLine;