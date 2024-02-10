const express = require('express');

const router = express.Router();

const CLIENT_ID = "1205963282226085968";
const CLIENT_SECRET = "6-tSHXRxgkRY1fXnQA4WUgW99rEf2WrJ";
const redirect = encodeURIComponent('http://localhost:3000/api/discord/callback');

router.get('/login', (req, res) => {
  res.redirect(`https://discordapp.com/api/oauth2/authorize?client_id=${CLIENT_ID}&scope=identify&response_type=code&redirect_uri=${redirect}`);
});

module.exports = router;