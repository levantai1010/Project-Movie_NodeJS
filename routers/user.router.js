const express = require("express");
const { getListUser, getUserDetailById, createUser, removeUser, updateUser, uploadAvatar } = require("../controllers/user.controller");
const { authenticate, authorize } = require("../middleware/auth/verify-token.middleware");
const { logFeature } = require("../middleware/log/log-feature.middlwares");
const { uploadImageSingle } = require("../middleware/uploads/upload-image.middleware");
const { checkExist } = require("../middleware/validations/check-exist.middleware");
const { User } = require("../models");
const { authRouter } = require("./auth.routers");
const userRouter = express.Router();


/**
 * api : lấy danh sách người dung
 * method: get
 * url: http://localhost:7000/api/users/
 */
userRouter.get('/', logFeature("lấy danh sách người dung"), getListUser);

/**
 * api : lấy chi tiet người dung
 * method: get
 * url: http://localhost:7000/api/users/:id
 */
userRouter.get('/:id', logFeature("lấy chi tiet người dung"), checkExist(User), getUserDetailById);

/**
 * api : them  người dung
 * method: post
 * url: http://localhost:7000/api/users/
 * body: {name, email}
 */
userRouter.post('/', createUser);

/**
 * api : xóa  người dung
 * method: delete
 * url: http://localhost:7000/api/users/:id
 */

userRouter.delete('/:id', authenticate, authorize(['ADMIN', 'SUPER_ADMIN']), checkExist(User), removeUser);
/**
 * api : cập nhật  người dùng
 * method: put
 * url: http://localhost:7000/api/users/:id
 * body: {name, email}
 */
userRouter.put('/:id', logFeature("cập nhật  người dùng thanh cong"), checkExist(User), updateUser);

// upload avatar
userRouter.post('/upload-avatar', authenticate, uploadImageSingle(), uploadAvatar);//uploadImageSingle() phải gọi hàm

module.exports = {
    userRouter,
}
