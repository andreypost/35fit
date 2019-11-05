/* eslint-disable eqeqeq */
import React from 'react';
import { Link } from "react-router-dom";

class JsGlobalModals extends React.Component {
    componentDidMount() {
        let currentModal = null
        let cross = document.getElementById('crossGl')
        let lines = document.getElementById('linesGl')
        const showModal = (modal) => {
            if (currentModal) {
                hideModal(currentModal)
                currentModal = null
            }
            let width = document.documentElement.clientWidth
            document.body.style.overflow = 'hidden'
            document.body.style.paddingRight = document.documentElement.clientWidth - width + 'px'
            currentModal = modal
            currentModal.style.display = 'block'
            lines.style.display = 'none'
            cross.style.display = 'block'
            currentModal.onclick = (ev) => {
                let target = ev.target.closest('.closeButtGl,.contRdGl,.iconDashBlockGl,a')
                if (!target) return
                if (target.classList == 'closeButtGl' || target.classList.contains('iconDashBlockGl')) {
                    hideModal(currentModal)
                } else if (target.classList == 'contRdGl') {
                    ev.preventDefault()
                    let input = target.querySelector('input')
                    input.checked = !input.checked
                } else if (target.tagName == 'A' && (target.href).includes(this.props.pathname)) {
                    hideModal(currentModal)
                }
            }
            document.addEventListener('keydown', function (ev) {
                if (ev.key == 'Escape') {
                    hideModal(currentModal)
                }
            })
            window.addEventListener('click', function (ev) {
                if (ev.target == currentModal) {
                    hideModal(currentModal)
                }
            })
        }
        const hideModal = (modal) => {
            modal.style.display = 'none'
            cross.style.display = 'none'
            lines.style.display = 'block'
            document.body.style.overflow = ''
            document.body.style.overflowY = ''
            document.body.style.paddingRight = 0 + 'px'
        }
        const ShowNavMenu = (options) => {
            let modal = options.modal
            let content = modal.querySelector('#modalNavContGl')
            let navSwitch = options.navSwitch
            let navRight = options.navRight
            let navMenu = options.navMenu
            let cloneNav = navMenu.cloneNode(true)
            let cloneLogin = navRight.cloneNode(true)
            navSwitch.onclick = (ev) => {
                cloneNav.classList.add('navMobileGl')
                cloneLogin.classList.add('loginMobileGl')
                content.append(cloneNav)
                content.append(cloneLogin)
                showModal(modal, ev)
                ModalLoginGl({
                    modal: document.getElementById('modLogGl'),
                    login: content.querySelector('#loginGl')
                })
            }
        }
        ShowNavMenu({
            modal: document.getElementById('modalNavGl'),
            navSwitch: document.getElementById('navSwitchGl'),
            navMenu: document.querySelector('.navLinksGl'),
            navRight: document.querySelector('.navRightGl')
        })
        const ModalLoginGl = (options) => {
            let modal = options.modal
            if (!modal) return
            let login = options.login
            login.onclick = (ev) => {
                showModal(modal, ev)
            }
        }
        ModalLoginGl({
            modal: document.getElementById('modLogGl'),
            login: document.getElementById('loginGl')
        })
        const changeLoginMenu = (buttProf, login) => {
            let client_id = login.dataset.session
            // console.log(client_id)
            let icon = document.querySelector('.specialButtGl')
            if (client_id == '') {
                login.style.display = 'block'
                buttProf.style.display = 'none'
                icon.style.display = 'none'
            } else if (client_id != '') {
                login.style.display = 'none'
                buttProf.style.display = 'block'
                icon.style.display = 'block'
            }
        }
        const showCabinModal = (elem, modal) => {
            elem.onclick = (ev) => {
                showModal(modal, ev)
            }
        }
        let buttProf = document.querySelector('.buttProfGl')
        let loginGl = document.getElementById('loginGl')
        let specialButt = document.querySelector('.specialButtGl')
        let modCabinMenu = document.getElementById('modCabinMenuGl')
        changeLoginMenu(buttProf, loginGl)
        showCabinModal(buttProf, modCabinMenu)
        showCabinModal(specialButt, modCabinMenu)
        const contactModal = (elems) => {
            if (!elems) return
            let modal = document.getElementById('modContactGl')
            for (let elem of elems) {
                elem.onclick = (ev) => {
                    ev.preventDefault()
                    showModal(modal, ev)
                }
            }
        }
        contactModal(document.querySelectorAll('.showContactGl'))
    }
    componentWillUnmount() {
        document.body.style.overflow = ''
        document.body.style.overflowY = ''
        document.body.style.paddingRight = 0 + 'px'
    }
    render() {
        return (
            <div>
                <div id="modalNavGl">
                    <div id="modalNavContGl" className="shadow"></div>
                </div>
                <div id="modLogGl">
                    <div id="modLogContGl" className="flex wrap relative shadow">
                        <div className="closeMdLogGl">
                            <i className="closeButtGl"></i>
                        </div>
                        <div className="column alignCtr bookGl">
                            <h3>Not a member yet?</h3>
                            <Link to="/schedule" className="green">Book your first training</Link>
                        </div>
                        <form method="post" action="" id="logoFormGl" className="column alignCtr">
                            <h2>Welcome to<br />35FIT</h2>
                            <div className="column">
                                <fieldset className="fieldsetGl alignLf">
                                    <legend>E-mail address:</legend>
                                    <input type="email" className="inputFiedGl" placeholder="Enter e-mail address" required />
                                </fieldset>
                                <fieldset className="fieldsetGl fieldPartGl alignLf">
                                    <legend>Password:</legend>
                                    <input type="text" className="inputFiedGl" placeholder="Enter password" required />
                                </fieldset>
                                <label className="contRdGl">Keep me logged in
							        <input type="radio" name="intRdGl" />
                                    <span className="checkMrGl"></span>
                                </label>
                                <button type="submit" form="logoFormGl" className="logoSubGl">Login</button>
                            </div>
                            <Link to="/" className="lightgreen">Forgot password ?</Link>
                        </form>
                    </div>
                </div>
                <div id="modContactGl">
                    <div id="contactContGl" className="flex wrap shadow relative">
                        <div>
                            <i className="closeButtGl"></i>
                        </div>
                        <article className="column alignCtr usContactGl">
                            <h3>Or contact us</h3>
                            <a href="tel: +372 666 9999" className="">- 372 666 9999</a>
                        </article>
                        <form method="post" action="" id="contactFormGl" className="column alignCtr">
                            <h2>Get in touch</h2>
                            <div className="column">
                                <fieldset className="fieldsetGl alignLf">
                                    <legend>Name:</legend>
                                    <input className="inputFiedGl" placeholder="Enter yuor name" type="text" required />
                                </fieldset>
                                <fieldset className="fieldsetGl alignLf">
                                    <legend>Phone number:</legend>
                                    <input className="inputFiedGl" placeholder="Format: 123-456-7890" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                                </fieldset>
                                <fieldset className="fieldsetGl textareaGl alignLf">
                                    <legend>Message:</legend>
                                    <textarea className="inputFiedGl" placeholder="Enter your message" required></textarea>
                                </fieldset>
                            </div>
                            <button type="submit" form="contactFormGl" className="buttBanGreen">Send message</button>
                        </form>
                    </div>
                </div>
                <div id="modPlanGl">
                    <div id="planContGl" className="shadow relative">
                        <div>
                            <i className="closeButtGl"></i>
                        </div>
                        <article className="column">
                            <hgroup>
                                <h3>Details</h3>
                            </hgroup>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex inventore, facilis perferendis eaque, ipsa est quae voluptas aspernatur sapiente unde non mollitia pariatur neque optio ea ipsum dolor molestiae? Rerum!</p>
                        </article>
                    </div>
                </div>
                <div id="modCabinMenuGl">
                    <div className="dashModMenuGl column shadow alignCtr">
                        <div className="iconDashBlockGl flex">
                            <i className="iconGreyProfGl"></i>
                            <h6 className="userNameGl darkblue">Login</h6>
                            <i className="arrowUpGl"></i>
                        </div>
                        <div className="divLineHzGl"></div>
                        <ul className="dashModLinksGl">
                            <li><a href="/" className="lightgreen">Dashboard</a></li>
                            <li><a href="/" className="lightgreen">Classes</a></li>
                            <li><a href="/" className="lightgreen">Progress</a></li>
                            <li><a href="/" className="lightgreen">Contract</a></li>
                            <li><a href="/" className="lightgreen">Profile</a></li>
                        </ul>
                        <div className="divLineHzGl"></div>
                        <a href="/" className="signOutGL">Sign out</a>
                    </div>
                </div>
                {/* <>{this.hideModal()}</> */}
            </div>
        );
    }
}
export default JsGlobalModals;