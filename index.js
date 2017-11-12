// https://api.github.com/users/jbjw/hardware-sandbox?client_id=614cf765aafa0a3485f1&client_secret=3c3e30ac16f44dee20c9d30cc9f83e7dbc7508dc'

// https://api.github.com/repositories
//
// "https://api.github.com/users/jbjw"
//
// https://api.github.com/repos/jbjw/hardware-sandbox
//
// https://api.github.com/repos/jbjw/hardware-sandbox/contributors
//
// /repos/:owner/:repo/stats/contributors

fetch( "https://api.github.com/repos/jbjw/hardware-sandbox/stats/contributors" ).then( function (data) {
	data.json().then( function (json) {
		// console.log(json[0].author.login)
		for ( let week of json[0].weeks ) {
			var date = new Date(week.w*1000)
			var dateString = `${date.getFullYear()} ${date.getMonth()} ${date.getDate()}`

			// var root = document.querySelector("#root")

			var div = document.createElement("div")
			div.classList.add("datum")

			div.style.backgroundColor = utils.chooseColor()
			// div.style.backgroundColor = `rgba(${200}, ${100}, ${0}, ${0.5})`
			root.appendChild(div)
			div.addEventListener( "click", function (e) {
				// console.log(root)
				// console.log(div)
				root.removeChild(e.target)
			} )

			// document.body.appendChild(div)

			var dateP = document.createElement("p")
			dateP.textContent = dateString
			dateP.classList.add("date")
			div.appendChild( dateP )

			var aP = document.createElement("p")
			aP.textContent = `adds ${week.a}`
			aP.classList.add("adds")
			div.appendChild( aP )

			var cP = document.createElement("p")
			cP.textContent = `creates ${week.c}`
			cP.classList.add("creates")
			div.appendChild( cP )

			var dP = document.createElement("p")
			dP.textContent = `deletes ${week.d}`
			dP.classList.add("deletes")
			div.appendChild( dP )

		}
	} )
} )
