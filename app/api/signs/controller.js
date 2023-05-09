const { Sign } = require('../../db/models');

const textToSign = async (req, res) => {
    let { text } = req.query;

    if (!text) {
        return res.status(400).json({
            error: 'Missing text',
        });
    }

    const characters = text.split('');
    const data = [];

    for (const character of characters) {
        const sign = await Sign.findOne({ where: { character } });
        if (sign) {
            // push character and image field
            data.push({ character: sign.character, image: sign.image });
        } else {
            return res.status(400).json({
                error: `Character ${character} not found`,
            });
        }
    }

    return res.status(200).json({
        data,
    });
}

module.exports = { textToSign };