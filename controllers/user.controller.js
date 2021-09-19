const { User } = require("../models")
const bcryptjs = require("bcryptjs");


const getListUser = async (req, res) => {
    try {
        const userList = await User.findAll();
        res.status(200).send(userList);

    } catch (error) {
        res.status(500).send(error);

    }

};
const getUserDetailById = async (req, res) => {

    const { id } = req.params;
    // lấy user có id phù hợp
    try {
        const userDetail = await User.findByPk(id);
        if (userDetail) {
            res.status(200).send(userDetail);
        } else {
            res.status(404).send("Not found !!");
        }

    } catch (error) {
        res.status(500).send(error);
    }
};
const createUser = async (req, res) => {
    const { name, email, password, age, phone, role } = req.body;
    try {
        // Tạo chuỗi ngẫu nhiên
        const salt = bcryptjs.genSaltSync(10);
        // Mã hóa password
        const hashPassword = bcryptjs.hashSync(password, salt);
        const newUser = await User.create({ name, email, password: hashPassword, age, phone, role });
        res.status(201).send(newUser);
    } catch (error) {
        res.status(500).send(error);
    }


};
const removeUser = async (req, res) => {

    const { id } = req.params;
    // lấy user có id phù hợp
    try {
        await User.destroy({
            where: {
                id
            }
        });
        res.status(200).send("Delete successfull");
    } catch (error) {
        res.status(500).send(error);
    }

};
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, age, phone, role } = req.body;
    try {
        await User.update({ name, email, age, phone, role }, {
            where: {
                id
            }
        });
        res.status(200).send("Update successfull");
    } catch (error) {
        res.status(500).send(error);
    }

}
const uploadAvatar = async (req, res) => {
    const { file, user } = req;
    const urlImage = "http://localhost:7000/" + file.path;
    // lưu link hình xuống database
    try {
        const userDetail = await User.findByPk(user.id);
        userDetail.avatar = urlImage;
        await userDetail.save();
        res.send(userDetail);
    } catch (error) {
        res.status(500).send(error);
    }

}
module.exports = {
    getListUser,
    getUserDetailById,
    createUser,
    removeUser,
    updateUser,
    uploadAvatar
}