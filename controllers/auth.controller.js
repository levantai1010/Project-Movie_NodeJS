const { User } = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken');
const sigIn = async (req, res) => {

    const { email, password } = req.body;
    // res.send({ email, password });
    try {

        const userLogin = await User.findOne({ where: { email } });
        if (userLogin) {
            // so sanh password
            const isAuth = bcryptjs.compareSync(password, userLogin.password);
            // res.send(isAuth);
            if (isAuth) {
                // Tạo token
                const payload = {
                    id: userLogin.id,
                    email: userLogin.email,
                    role: userLogin.role,
                };

                const secretKey = "haoPN";
                const token = jwt.sign(payload, secretKey, { expiresIn: 60 * 60 });

                res.status(200).send({ message: "Dang nhap thanh cong", token });
            } else {
                res.status(400).send("Sai mat khau");
            }
        } else {
            res.status(404).send("email khong ton tai");
        }
        res.send({ email, password });
    } catch (error) {
        res.status(500).send(error);
    }

};

module.exports = {
    sigIn,
};