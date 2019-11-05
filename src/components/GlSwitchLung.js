/* eslint-disable eqeqeq */
import React from 'react';

// function LungBlock(props) {
//     return (
//         <div className="switchLGl flex" onClick={props.onClick}>
//             <div className="relative">
//                 <ul className="linksSwGl column">
//                     <li>EN</li>
//                     <li>EST</li>
//                     <li>DEU</li>
//                 </ul>
//             </div>
//             <i className="arrowUpGl"></i>
//             <i className="arrowDnGl"></i>
//         </div>
//     );
// }

class GlSwitchLung extends React.Component {
    handleClick = (ev) => {
        let switchGl = document.querySelector('.switchLGl')
        let up = switchGl.querySelector('.arrowUpGl')
        let down = switchGl.querySelector('.arrowDnGl')
        let cont = switchGl.querySelector('.linksSwGl')

        let base = switchGl.querySelector('.linksSwGl > li')
        up.classList.toggle('disBlockGl')
        down.classList.toggle('nonBlockGl')
        for (let li of switchGl.querySelectorAll('li')) {
            li.classList.toggle('disBlockGl')
        }
        let target = ev.target.closest('li')
        if (target == base) {
            return
        } else if (target) {
            cont.prepend(target)
        }
    }
    render() {
        return (
            <div className="switchLGl flex" onClick={this.handleClick}>
                <div className="relative">
                    <ul className="linksSwGl column">
                        <li>EN</li>
                        <li>EST</li>
                        <li>DEU</li>
                    </ul>
                </div>
                <i className="arrowUpGl"></i>
                <i className="arrowDnGl"></i>
            </div>
        );
    }
}

export default GlSwitchLung;

