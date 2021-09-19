const { User } = require("../models")
const graphqlResolvers = {
    async user(params) {
        const { id } = params;

        try {
            const userDetail = await User.findByPk(id);
            return userDetail;

        } catch (error) {
            throw new error(error);
        }
    },
    async users() {
        try {
            const userList = await User.findAll();
            return userList;

        } catch (error) {
            throw new error(error);
        }
    },
    async createUser(params) {
        const { inputUser } = params;
        try {
            const user = await User.create({ ...inputUser });
            return user;

        } catch (error) {
            throw new error(error);
        }
    },
    async updateUser(params) {
        const { id, inputUser } = params;
        try {
            await User.update(inputUser, {
                where: {
                    id
                }
            });
            const userUpdated = await User.findByPk(id);
            return userUpdated;
        } catch (error) {
            throw new error(error);
        }
    },
    async deleteUser(params) {
        const { id } = params;

        try {
            const userDelete = await User.findByPk(id);
            await User.destroy({
                where: {
                    id,
                },
            });

            return userDelete;
        } catch (error) {
            throw new error(error);
        }
    }


};
module.exports = {
    graphqlResolvers,
}