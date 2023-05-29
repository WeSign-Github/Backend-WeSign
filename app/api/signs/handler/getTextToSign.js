const { Sign } = require('../../../db/models');
const { NotFoundError } = require('../../../errors');

module.exports = async (req, res) => {
    let { text } = req.query;
    let data = [];

    if (text) {
        const words = text.split(' ');

        for (const word of words) {
            const sign = await Sign.findOne({ where: { word } });
            if (sign) {
                data.push({ word: sign.word, image: sign.image });
            } else {
                throw new NotFoundError(`Sign for word ${word} not found`);
            }
        }
    } else {
        data = await Sign.findAll();
    }

    return data;
}