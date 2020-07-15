const admin = require("firebase-admin");

// Input: phone property
module.exports = function (req, res) {
	// Verify the user provided a phone number
	if (!req.body.phone) {
		return res.status(422).send({ error: "Bad Input" });
	}

	// Parse the phone number
	// Convert phone number to a string
	// Replace any non digits with an empty string
	const phone = String(req.body.phone).replace(/[^\d]/g, "");

	// Phone number should be a 10 digit number
	if (phone.length !== 10) {
		return res.status(422).send({ error: "Invalid phone number" });
	}

	// Create a new user account using a phone number
	admin
		.auth()
		.createUser({ uid: phone })
		.then((user) => {
			const success = { status: "Account successfully created " };
			return res.send(Object.assign(success, user));
		})
		.catch((err) => res.status(422).send({ error: err }));

	// Respond to the user request, account created
};
