const express = require('express');
const nanoid = require('nanoid');

const Link = require('../models/Link');

const router = express.Router();

router.get('/:shortURL', async (req, res) => {
	try {
		const result = await Link.findOne({shortURL: req.params.shortURL});

		if (result) {
			return res.status(301).redirect(result.originalURL);
		} else {
			return res.status(404).send({message: "Not found!"});
		}
	} catch (e) {
		return res.status(400).send(e);
	}
});

router.post('/links', async (req, res) => {
	const linkData = req.body;

	linkData.shortURL = nanoid(7);

	const link = new Link(linkData);

	try {
		await link.save();

		return res.send({shortURL: link.shortURL, _id: link._id, originalURL: link.originalURL});
	} catch (e) {
		return res.status(400).send(e);
	}
});


module.exports = router;