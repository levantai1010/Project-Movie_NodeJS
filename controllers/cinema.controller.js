const { Cinema, Cineplex, sequelize } = require("../models")
const getListCinema = async (req, res) => {
    try {
        const cinemaList = await Cinema.findAll({
            include: [
                {
                    model: Cineplex,
                },
            ],
        });

        res.status(200).send(cinemaList);
    } catch (error) {
        res.status(500).send(error);
    }

}
const getListCineplexWithCinema = async (req, res) => {
    try {
        const cineplexList = await Cineplex.findAll({
            include: [
                {
                    model: Cinema,
                },
            ],
        });

        res.status(200).send(cineplexList);
    } catch (error) {
        res.status(500).send(error);
    }

}
const getByCineplex = async (req, res) => {
    const { nameCineplex } = req.query;

    try {
        const [results] = await sequelize.query(`
        select cinemas.name as cinemaName, cineplexes.name as cineplexName from cinemas
        inner join cineplexes
        on cinemas.cineplexId = cineplexes.id
        where cineplexes.name = "${nameCineplex}";
       
        `);
        // where cineplexes.name like "%${nameCineplex}%";
        res.status(200).send(results);
    } catch (error) {
        res.status(500).send(error);

    }
}
module.exports = {
    getListCinema,
    getListCineplexWithCinema,
    getByCineplex
}