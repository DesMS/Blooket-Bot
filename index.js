const Blooket = require(`blooket`);

(async () => {
	const cli = new Blooket();

	try {
		const login = await cli.login(acc, pass);
	} catch (err) {
		console.log(`Failed to login to "${acc}"`);
	}
})();