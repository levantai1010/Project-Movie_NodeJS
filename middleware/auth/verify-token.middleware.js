const jwt = require('jsonwebtoken');
// Kiểm tra người dùng đã đăng nhập hay chưa
const authenticate = (req, res, next) => {
    const token = req.header("token");
    try {
        const secretKey = "haoPN";
        const decode = jwt.verify(token, secretKey);
        req.user = decode;
        next(); //Chạy tiếp các middleware khác
    } catch (error) {
        res.status(401).send("Bạn chưa đăng nhập");
    }

};

const authorize = (arayRole) => (req, res, next) => {
    const { user } = req;
    if (arayRole.findIndex((role) => user.role === role) > -1) {
        next();

    } else {
        res.status(403).send("Bạn không có quyền");
    }
}
module.exports = {
    authenticate,
    authorize
}