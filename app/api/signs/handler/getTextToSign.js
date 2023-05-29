const { Sign } = require('../../../db/models');

module.exports = async (req, res) => {
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
            data.push({ character: sign.character, image: sign.image });
        } else {
            return res.status(400).json({
                error: `Character ${character} not found`,
            });
        }
    }

    return data;
}