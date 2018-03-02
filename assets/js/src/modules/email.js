(function(window, document){

	//This is the email address in base64 encoding.
	//It's delibrately stored like this to minimise spam from bots.
	const EMAIL_ADDRESS = "ZGVha2luc2VjQGdtYWlsLmNvbQ=="

	/**
	 * Sets the email address for a given DOM element.
	 * @param {Element} el The DOM element to set the email address in.
	 */
	const setEmail = (el) => {
		el.innerHTML = `<a href="mailto:${window.atob(EMAIL_ADDRESS)}">` +
			`${window.atob(EMAIL_ADDRESS)}</a>`
	}

	/**
	 * Fired on initialisation. Hooks and replaces all [data-hook=email]
	 * DOM elements with a human readable email address.
	 * @return {Void}
	 */
	const onInit = () => {
		let els = document.querySelectorAll('[data-hook=email]')
		if (els.length < 1)
			return

		for (let el of els)
			setEmail(el)
	}

	module.exports = this
	onInit()

})(window, document)
