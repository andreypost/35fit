/* eslint-disable eqeqeq */
import React from 'react';
import photo_1 from '../images/icons/icon_4_2.png';
import photo_2 from '../images/icons/icon_4_1.png';

export default class CalendarGl extends React.Component {
	componentDidMount() {
		let currentModal = null,
			calendarGl = document.querySelector('.calendarGl'),
			contDeskTabl = calendarGl.querySelector('.contCalenDeskGl'),
			contMobTable = document.querySelector('.calenMobGl'),
			changeMonGl = document.getElementById('changeMonGl'),
			now = new Date(),
			year = now.getFullYear(),
			month = now.getMonth(),
			date = now.getDate(),
			arrMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			countMonth = 0
		const showModal = (modal) => {
			if (currentModal) {
				hideModal(modal)
				currentModal = null
			}
			let width = document.documentElement.clientWidth
			document.body.style.overflow = 'hidden'
			document.body.style.paddingRight = document.documentElement.clientWidth - width + 'px'
			currentModal = true
			modal.style.display = 'block'
			modal.onclick = (e) => {
				let target = e.target.closest('.closeButtGl')
				if (!target) return
				if (target.classList == 'closeButtGl') hideModal(modal)
			}
			document.addEventListener('keydown', (e) => {
				if (e.key == 'Escape') hideModal(modal)
			})
			document.addEventListener('click', (e) => {
				if (e.target == modal) hideModal(modal)
			})
		}
		const hideModal = (modal) => {
			modal.style.display = 'none'
			document.body.style.overflow = ''
			document.body.style.overflowY = ''
			document.body.style.paddingRight = 0 + 'px'
		}
		const calendarMob = (container) => {
			if (!container) return
			container.innerHTML = ''
			let blocks = document.querySelector('.blockDateGl'),
				arrDay = ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
				currentYear = new Date(year, month),
				dd = currentYear.getDate(),
				lastD = new Date(year, month + 1, 0).getDate()

			const setBlocks = () => {
				if (year == new Date().getFullYear() &&
					month == new Date().getMonth()) {
					for (let j = date, i = 0; j <= lastD; j++) {
						container.append(blocks.cloneNode(true))
						container.querySelectorAll('.dateStJs')[i].innerHTML = j
						container.querySelectorAll('.dayStJs')[i].innerHTML = arrDay[getD(now)]
						arrDay.push(arrDay.shift())
						document.querySelector('.dateModGl').innerHTML = j
						container.querySelectorAll('.iconCalenMobGl')[i].dataset.turn = 'on'
						container.querySelectorAll('.iconCalenMobGl')[i].dataset.number = j
						showModClockChoose(container.querySelectorAll('.iconCalenMobGl')[i], j)
						i++
					}
				} else {
					for (let j = dd, i = 0; j <= lastD; j++) {
						container.append(blocks.cloneNode(true))
						container.querySelectorAll('.dateStJs')[i].innerHTML = j
						container.querySelectorAll('.dayStJs')[i].innerHTML = arrDay[getD(currentYear)]
						arrDay.push(arrDay.shift())
						document.querySelector('.dateModGl').innerHTML = j
						container.querySelectorAll('.iconCalenMobGl')[i].dataset.turn = 'on'
						container.querySelectorAll('.iconCalenMobGl')[i].dataset.number = j
						showModClockChoose(container.querySelectorAll('.iconCalenMobGl')[i], j)
						i++
					}
				}

			}
			setBlocks()
			document.getElementById('loadDatesGl').onclick = (e) => {
				e.preventDefault()
				container.classList.toggle('showMoreDates')
				document.body.classList.toggle('overHid')
				document.querySelector('.firstTxGl').classList.toggle('showTextGl')
				document.querySelector('.lastTxGl').classList.toggle('showTextGl')
			}
		}
		const createCalendar = (container) => {
			if (!container) return
			let d = new Date(year, month)
			let table = '<table><tr><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th><th>S</th></tr><tr>'
			for (let i = 0; i < getD(d); i++) {
				table += '<td></td>'
			}
			let num = 1
			while (d.getMonth() == month) {
				table += '<td>' + num + '</td>'
				if (getD(d) % 7 == 6) {
					table += '</tr><tr>'
				}
				d.setDate(d.getDate() + 1)
				num++
			}
			if (getD(d) != 0) {
				for (let i = getD(d); i < 7; i++) {
					table += '<td></td>'
				}
			}
			container.innerHTML = table += '</tr></table>'
			setGreyColorTd(container)
		}
		const getD = (d) => {
			let day = d.getDay()
			if (day == 0) day = 7
			return day - 1;
		}
		const setM = (month) => {
			let mString = arrMonths[month]
			let monL = document.querySelectorAll('.monthStJs')
			for (let i = 0; i < monL.length; i++) {
				monL[i].innerHTML = mString
			}
		}
		const setY = (year) => {
			let yL = document.querySelectorAll('.yearStJs')
			for (let i = 0; i < yL.length; i++) {
				yL[i].innerHTML = year
			}
		}
		const setGreyColorTd = (elem) => {
			let td = elem.querySelectorAll('td')
			if (!td) return
			let num = 1
			for (let i = 0; i < td.length; i++) {
				if (td[i].innerHTML) {
					td[i].dataset.number = num++
					if (year == new Date().getFullYear() &&
						month == new Date().getMonth() &&
						td[i].innerHTML < new Date().getDate()) {
						td[i].style.color = 'grey'
					} else {
						td[i].dataset.turn = 'on'
						hoverTd(td[i])
						showModClockChoose(td[i], td[i].innerHTML)
					}
				}
			}
		}
		const hoverTd = (td) => {
			let textTd = document.querySelector('.txFirstTdGl').cloneNode(true),
				currTd = null
			// let h3 = textTd.querySelector('h3')
			td.onmouseover = () => {
				if (td.dataset.turn == 'off') return
				if (currTd) return
				currTd = td
				td.classList.add('onHoverTdGl')
				textTd.style.display = 'flex'
				// if (client_id === '') {
				// h3.style.visibility = 'hidden';
				// }
				td.append(textTd)
			}
			td.onmouseout = (e) => {
				if (currTd) {
					if (!e.relatedTarget || !td.contains(e.relatedTarget)) {
						td.classList.remove('onHoverTdGl')
						textTd.style.display = 'none'
						currTd = null
					}
				}
			}
		}
		const showModClockChoose = (td, ddMod) => {
			let arrWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
				modal = document.getElementById('modCalenGl'),
				content = modal.querySelector('.modCalenContGl')
			// let h3 = content.querySelector('h3')
			// if (client_id === '') {
			// h3.style.visibility = 'hidden';
			// }
			td.onclick = () => {
				if (td.dataset.turn == 'off') return
				document.querySelector('.dateModGl').innerHTML = ddMod
				document.querySelector('.weekSetGl').innerHTML = arrWeek[new Date(year, month, ddMod).getDay()]
				showModal(modal)

				content.onclick = (e) => {
					let target = e.target.closest('.plusHrGl,.minusHrGl,.plusMinGl,.minusMinGl,.closeGl,#selectTmGl')
					if (!target) return
					let hour = +content.querySelector('.hourGl').innerHTML
					let min = +content.querySelector('.minGl').innerHTML
					if (target.classList == 'plusHrGl') {
						hour += 1
						if (hour > 23) return
						if (hour < 10) hour = '0' + hour
						target.nextElementSibling.innerHTML = hour
					} else if (target.classList == 'minusHrGl') {
						hour -= 1
						if (hour < 0) return
						if (hour < 10) hour = '0' + hour
						target.previousElementSibling.innerHTML = hour
					} else if (target.classList == 'plusMinGl') {
						min += 30
						if (min > 30) min = '00'
						target.nextElementSibling.innerHTML = min
					} else if (target.classList == 'minusMinGl') {
						min -= 30
						if (min < 0) min = 30
						if (min == 0) min = '0' + min
						target.previousElementSibling.innerHTML = min
					} else if (target.id == 'selectTmGl') {
						setTdVisited(td)
						hideModal(modal)
						if (window.location.href.includes('reserve_choose')) {
							const correctTime = (time) => {
								let d = time.getDate()
								if (d < 10) d = '0' + d
								let m = time.getMonth() + 1
								if (m < 10) m = '0' + m
								let h = time.getHours()
								if (h < 10) h = '0' + h
								let mn = time.getMinutes()
								if (mn < 10) mn = '0' + mn
								return (d + '.' + m + ' / ' + h + '.' + mn)
							}
							// localStorage.setItem('userTime', correctTime(new Date(year, month, ddMod, hour, min)))
							import('./data').then(result => {
								result.data.userTime = correctTime(new Date(year, month, ddMod, hour, min))
							})
							setTimeout(() => window.location.assign("#/reserve_identify"), 500)
						}
						// if (window.location.href.includes('reserve_choose_time') || window.location.href.includes('schedule')|| window.location.href.includes('main')) {
						// var lang = window.location.pathname.split('/')[1];
						// if (client_id !== '') {
						// window.location.assign('/'+lang+'/reserve_choose_time/create_reserve?reserve_start='+encodeURIComponent(reserve_start));
						// } else {
						// window.location.assign('/'+lang+'/reserve_identity?reserve_start='+encodeURIComponent(reserve_start));
						// }
					} else if (target.classList == 'closeGl') {
						hideModal(modal)
					}
					document.addEventListener('keydown', (e) => {
						if (e.key == 'Escape') hideModal(modal)
					})
					document.addEventListener('click', (e) => {
						if (e.target == modal) hideModal(modal)
					})
				}
			}
		}
		const setTdVisited = (td) => {
			let secondTxTd = document.querySelector('.txSecondTdGl').cloneNode(true)
			secondTxTd.style.display = 'flex'
			for (let item of calendarGl.querySelectorAll('[data-number]')) {
				if (td.dataset.number == item.dataset.number) {
					if (item.classList == 'iconCalenMobGl') {
						item.parentNode.querySelector('h3').classList.add('darkblue')
						item.parentNode.querySelector('p').style.fontWeight = 'bold'
					} else {
						item.append(secondTxTd)
					}
					item.dataset.turn = 'off'
				}
			}
		}
		changeMonGl.onclick = (ev) => {
			let target = ev.target.closest('.minusMonGl, .plusMonGl')
			if (!target) return
			if (target.classList == 'minusMonGl') {
				if (month <= new Date().getMonth() && year == new Date().getFullYear()) return
				month -= 1
				if (month < 0 && year != new Date().getFullYear()) {
					month = 11
					year -= 1
				}
				countMonth--
			} else if (target.classList == 'plusMonGl' && countMonth < 6) {
				month += 1
				if (month > 11) {
					month = 0
					year += 1
				}
				countMonth++
			}
			if (month > new Date().getMonth() && year == new Date().getFullYear()) {
				document.querySelector('.minusMonGl').style.background = 'url(' + photo_1 + ')';
				document.querySelector('.minusMonGl').style.transform = 'rotate(0.5turn)';
			} else if (month == new Date().getMonth() && year == new Date().getFullYear()) {
				document.querySelector('.minusMonGl').style.background = 'url(' + photo_2 + ')';
				document.querySelector('.minusMonGl').style.transform = 'rotate(0)';
			}
			setY(year)
			setM(month)
			createCalendar(contDeskTabl)
			calendarMob(contMobTable)
		}
		setY(year)
		setM(month)
		createCalendar(contDeskTabl)
		calendarMob(contMobTable)
	}
	render() {
		return (
			<>
				<section className="calendarGl">
					<article id="onTopGl" className="flex wrap">
						<div className="flex" id="changeMonGl">
							<i className="minusMonGl"></i>
							<h3 className="monthStJs"> </h3>
							<h3 className="yearStJs"> </h3>
							<i className="plusMonGl"></i>
						</div>
						<div className="gonsioriGl alignLf">
							<p className="relative"><span></span>Gonsiori 33<br /><span> Tallinn, Estonia</span></p>
						</div>
					</article>
					<div className="contCalenDeskGl"></div>
					<div className="calenMobGl"></div>
					<a href="#onTopGl" id="loadDatesGl" className="margTop alignCtr">
						<button className="white"><span className="firstTxGl">Load more dates</span><span className="lastTxGl">Hide dates</span></button>
					</a>
				</section>
				<div id="modCalenGl">
					<div className="column alignCtr modCalenContGl shadow relative">
						<div className="flex">
							<div className="monDatGl one">
								<h6 className="weekSetGl"> </h6>
								<h5 className="monthStJs"> </h5>
								<h2 className="dateModGl"> </h2>
								<div className="closeGl">
									<i className="closeButtGl"></i>
								</div>
							</div>
							<div className="bestTrainGl flex one">
								<h3 className="alignLf four">Your best day for training</h3>
							</div>
						</div>
						<div className="flex">
							<div className="chooseGl one">
								<p>Choose time</p>
								<div className="flex">
									<h4 className="column"><span className="plusHrGl"></span><span className="hourGl">19</span><span className="minusHrGl"></span></h4>
									<h5>:</h5>
									<h4 className="column"><span className="plusMinGl"></span><span className="minGl">00</span><span className="minusMinGl"></span></h4>
								</div>
								<i id="selectTmGl" className="green">Select</i>
							</div>
							<div className="peopleIconGl column one">
								<i></i>
								<div>
									<h3>5 <span>of 12</span></h3>
									<p>people have booked this time</p>
								</div>
							</div>
						</div>
						<div className="closeGl">
							<i className="closeButtGl"></i>
						</div>
					</div>
				</div>
				<div className="flex blockDateGl">
					<h6 className="dayStJs"> </h6>
					<h3 className="dateStJs"> </h3>
					<p className="monthStJs"> </p>
					<i className="iconCalenMobGl"></i>
				</div>
				<div className="txFirstTdGl column">
					<i className="selfStart"></i>
					<h3 className="alignLf">A very good day!</h3>
					<h6>Choose time</h6>
				</div>
				<div className="txSecondTdGl column">
					<i className="selfStart"></i>
					<h3 className="alignLf">Your best day for training</h3>
				</div>
				<div className="txThirdTdGl column">
					<i className="selfStart"></i>
					<h3 className="alignLf">Bit longer rest. But OK</h3>
				</div>
			</>
		);
	}
}
