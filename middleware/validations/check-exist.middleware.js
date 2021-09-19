const checkExist = (Modal) => async (req, res, next) => {
    const { id } = req.params;
    try {
        const detail = await Modal.findOne({
            where: {
                id,
            },
        });
        if (detail) {
            next();
        } else {
            res.status(404).send(`Id ${id} not found`);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}
module.exports = {
    checkExist
}