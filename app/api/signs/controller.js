const { Sign } = require('../../db/models');

const textToSign = async (req, res) => {
    let { letters } = req.query;

    if (!letters) {
        return res.status(400).json({
            error: 'Missing letters',
        });
    }

    letters = letters.toUpperCase();

    const signs = await Sign.findAll({
        where: {
            letter: letters.split(''),
        },
    });

    if (!signs.length) {
        return res.status(400).json({
            error: 'No signs found',
        });
    }
    
    const images = signs.map((sign) => sign.image);

    return res.status(200).json({
        signs: images,
    });
}

module.exports = { textToSign };