const { Router } = require("express");
const { getListCinema, getListCineplexWithCinema, getByCineplex } = require("../controllers/cinema.controller");
const cinemaRouter = Router();
cinemaRouter.get("/with-cineplex", getListCineplexWithCinema);
cinemaRouter.get("/by-cineplex", getByCineplex)
cinemaRouter.get("/", getListCinema);
module.exports = {
    cinemaRouter
}