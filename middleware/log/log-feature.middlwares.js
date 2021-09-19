const logFeature = (message) => (req, res, next) => {
    console.log(message);
    next();// Chạy tiếp các middleware và controller tiếp theo
    // (message) => Đây là pattern thấy lạ kg..kg hải arow function  nha
};

module.exports = {
    logFeature,
};