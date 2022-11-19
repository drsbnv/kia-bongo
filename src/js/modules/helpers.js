(() => {
	const $$ = function (selector) {
		const elements = document.querySelectorAll(selector);
		const methods = {};
		if(!methods.length) return elements;
		return methods;
	};
	window.$$ = $$;
})();
