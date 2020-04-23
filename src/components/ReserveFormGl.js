import React from 'react';

export default class ReserveFormGl extends React.Component {
    componentDidMount() {
        const CreateSelect = (x) => {
            if (!x) return
            let i, j, selElmnt, a, b, c;
            for (i = 0; i < x.length; i++) {
                selElmnt = x[i].getElementsByTagName('select')[0]
                a = document.createElement('div')
                a.setAttribute('class', 'selSelectdGl')
                a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML
                x[i].append(a)
                b = document.createElement('div')
                b.setAttribute('class', 'selItemsGl selHideGl')
                for (j = 1; j < selElmnt.length; j++) {
                    c = document.createElement('div')
                    c.innerHTML = selElmnt.options[j].innerHTML
                    c.addEventListener('click', function (e) {
                        let y, i, k, s, h;
                        s = this.parentNode.parentNode.getElementsByTagName('select')[0]
                        h = this.parentNode.previousSibling
                        for (i = 0; i < s.length; i++) {
                            if (s.options[i].innerHTML === this.innerHTML) {
                                s.selectedIndex = i
                                h.innerHTML = this.innerHTML
                                y = this.parentNode.getElementsByClassName('sameSelectedGl')
                                for (k = 0; k < y.length; k++) {
                                    y[k].removeAttribute('class')
                                }
                                this.setAttribute('class', 'sameSelectedGl')
                                break
                            }
                        }
                        h.click()
                    })
                    b.append(c)
                }
                x[i].append(b)
                a.addEventListener('click', function (e) {
                    e.stopPropagation()
                    closeAllSelect(this)
                    this.nextSibling.classList.toggle('selHideGl')
                    this.classList.toggle('selArwActGl')
                })
            }
        }
        const closeAllSelect = (elmnt) => {
            var x, y, i, arrNo = []
            x = document.getElementsByClassName('selItemsGl')
            y = document.getElementsByClassName('selSelectdGl')
            if (!x && !y) return
            for (i = 0; i < y.length; i++) {
                if (elmnt === y[i]) {
                    arrNo.push(i)
                } else {
                    y[i].classList.remove('selArwActGl')
                }
            }
            for (i = 0; i < x.length; i++) {
                if (arrNo.indexOf(i)) {
                    x[i].classList.add('selHideGl')
                }
            }
        }
        CreateSelect(document.getElementsByClassName('customSelGl'))
        document.addEventListener('click', closeAllSelect)
    }
    render() {
        return (
            <form action="" id="profileFormGl" className="column alignStart">
                <h4 className="darkblue">Personal information</h4>
                <div className="flex justBet">
                    <fieldset className="fieldsetGl alignLf">
                        <legend>First name:</legend>
                        <input className="inputFiedGl" placeholder="First name" required="required" type="text" name="customer_form[name]" id="customer_form_name" />
                    </fieldset>
                    <i className="emptySpaceGl"></i>
                    <fieldset className="fieldsetGl alignLf">
                        <legend>Surname:</legend>
                        <input className="inputFiedGl" placeholder="Surname" required="required" type="text" name="customer_form[surname]" id="customer_form_surname" />
                    </fieldset>
                </div>
                <div className="flex justBet">
                    <fieldset className="customSelGl fieldsetGl alignLf relative">
                        <legend>Gender:</legend>
                        <select required="required" name="customer_form[gender]" id="customer_form_gender">
                            <option value=""></option>
                            <option value="0">Female</option>
                            <option value="1">Male</option>
                        </select>
                    </fieldset>
                    <fieldset className="fieldsetGl alignLf">
                        <legend>Date of birth:</legend>
                        <input className="inputFiedGl" placeholder="DD/MM/YYYY" pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}" required="required" type="text" name="customer_form[birthdate]" id="customer_form_birthdate" />
                    </fieldset>
                </div>
                <h4 className="darkblue">Contact information</h4>
                <div className="flex justBet">
                    <fieldset className="customSelGl fieldsetGl alignLf relative">
                        <legend>Country:</legend>
                        <select required="required" name="customer_form[country]" id="customer_form_country">
                            <option value=""></option>
                            <option value="2648">Estonia</option>
                        </select>
                    </fieldset>
                    <fieldset className="customSelGl fieldsetGl alignLf relative">
                        <legend>City:</legend>
                        <select required="required" name="customer_form[city]" id="customer_form_city">
                            <option value=""></option>
                            <option value="4370">Tallinn</option>
                            <option value="4683">Tartu</option>
                            <option value="4684">Narva</option>
                            <option value="4685">Pärnu</option>
                            <option value="4690">Rae</option>
                            <option value="4691">JŌELÄHTME </option>
                            <option value="4692">Saku</option>
                            <option value="4698">Paide</option>
                        </select>
                    </fieldset>
                </div>
                <div className="flex justBet">
                    <fieldset className="fieldsetGl alignLf">
                        <legend>Address:</legend>
                        <input className="inputFiedGl" placeholder="Street, house, flat" required="required" type="text" name="customer_form[address]" id="customer_form_address" />
                    </fieldset>
                    <fieldset className="fieldsetGl alignLf">
                        <legend>Postal code:</legend>
                        <input className="inputFiedGl" placeholder="1041" pattern="[0-9]{4,}" type="text" name="customer_form[postal_code]" id="customer_form_postal_code" />
                    </fieldset>
                </div>
                <div className="flex justBet">
                    <fieldset className="fieldsetGl fieldPartGl alignLf">
                        <legend>E-mail:</legend>
                        <input className="inputFiedGl" placeholder="E-mail address" required="required" type="email" name="customer_form[email]" id="customer_form_email" />
                    </fieldset>
                    <fieldset className="fieldsetGl fieldPartGl alignLf">
                        <legend>Phone number:</legend>
                        <input className="inputFiedGl" placeholder="Phone number" required="required" type="tel" name="customer_form[phone]" id="customer_form_phone" />
                    </fieldset>
                </div>
                <h4 className="darkblue">Safety first</h4>
                <div className="flex justBet">
                    <fieldset className="fieldsetGl fieldPartGl alignLf">
                        <legend>Emergency contact:</legend>
                        <input className="inputFiedGl" placeholder="Name and Surname" required="required" type="text" name="customer_form[emergency_contact]" id="customer_form_emergency_contact" />
                    </fieldset>
                    <fieldset className="fieldsetGl fieldPartGl alignLf">
                        <legend>Phone number:</legend>
                        <input className="inputFiedGl" placeholder="Emergency contact number" required="required" type="tel" name="customer_form[emergency_phone]" id="customer_form_emergency_phone" />
                    </fieldset>
                </div>
                <div className="flex justBet">
                    <fieldset className="fieldsetGl textareaGl alignLf">
                        <legend>Medical restrictions (if any)</legend>
                        <textarea className="inputFiedGl" placeholder="Write here..." name="customer_form[medical_restrictions]" id="customer_form_medical_restrictions"></textarea>
                    </fieldset>
                </div>
                <h4 className="darkblue">Legal second</h4>
                <div className="termGl">
                    <label className="contRdGl">I have read & accepted <a href="_termcond.html" className="lightgreen"> Terms and Conditions</a>
                        <input type="radio" required="required" name="termGl" />
                        <span className="checkMrGl"></span>
                    </label>
                    <label className="contRdGl">I have read & accepted <a href="_safemachguide.html" className="lightgreen"> Safety on machines guide</a>
                        <input type="radio" required="required" name="saveGl" />
                        <span className="checkMrGl"></span>
                    </label>
                </div>
                {this.props.children}
            </form>
        );
    }
}
