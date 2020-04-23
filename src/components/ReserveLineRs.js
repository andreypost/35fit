import React from 'react';
import photo_1 from '../images/pattern/stroke_9_0.png';
import photo_2 from '../images/pattern/stroke_9_1.png';

export default class ReserveLineRs extends React.Component {
    constructor(props) {
        super(props)
        this.state = { userTime: null }
    }
    componentDidMount() {
        // document.querySelector('.frsTrainDateGl').innerHTML = localStorage.getItem('userTime')
        import('./data').then(result => {
            this.setState({ userTime: result.data.userTime })
        })
    }
    render() {
        return (
            <article className="reserveGlRs">
                <section>
                    <div className="flex wrap">
                        <h1 className="selfEnd">Reservation</h1>
                        <img src={photo_1} className="imgFstGlRs" alt="" />
                        <img src={photo_2} className="imgSecGlRs" alt="" />
                    </div>
                    <div className="stepRndGlRs flex justEnd alignStart">
                        <div className={'column ' + this.props.children[0]}>
                            <i className="flex"><h4 className={this.props.children[3]}>1</h4></i>
                            <h6 className={this.props.children[3]}>DATE &amp; TIME</h6>
                            <p className="frsTrainDateGl">{this.state.userTime}</p>
                        </div>
                        <div className={'column ' + this.props.children[1]}>
                            <i className="flex"><h4 className={this.props.children[4]}>2</h4></i>
                            <h6 className={this.props.children[4]}>MEMBER</h6>
                            {this.props.children[6]}
                        </div>
                        <div className={'column ' + this.props.children[2]}>
                            <i className="flex"><h4 className={this.props.children[5]}>3</h4></i>
                            <h6 className={this.props.children[5]}>CONFIRMATION</h6>
                            {this.props.children[7]}
                        </div>
                    </div>
                </section>
            </article>
        )
    }
}
