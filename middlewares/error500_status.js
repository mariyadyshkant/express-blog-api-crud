function error500Handler(err, req, res, next) {
    console.log(err);
    // console.log(err.stack);
    res.status(500);
    res.json({
        error: 'Internal Server Error',
        message: 'Si è verificato un errore interno',
    });
};

module.exports = error500Handler;
