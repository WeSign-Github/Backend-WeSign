const firebase = require("../services/firebase");

module.exports = async (req, res, next) => {
    try {
        const headerToken = req.headers.authorization;

        if (!headerToken) {
            return res.status(401).json({ message: "Auth failed!" });
        }

        if (headerToken && headerToken.split(" ")[0] !== "Bearer") {
            return res.status(401).json({ message: "Auth failed!" });
        }

        const token = headerToken.split(" ")[1];

        const decodedToken = await firebase.auth().verifyIdToken(token);

        req.user = decodedToken;
        next();
    } catch (error) {
        res.status(403).json(error);
    }
}
