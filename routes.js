const GoogleBook = require("./models/googleBookModel");

exports.route = (app) => {
    app.get("/api/books",({body}, res) => {
        GoogleBook.find({})
        .then(boook => {
            res.json(book);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });
    app.post("/api/books",({body}, res) => {
        GoogleBook.create(body)
        .then(book => {
            res.json(book);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });
    app.delete("/api/books/:id",(req, res) => {
        const dbId = req.params.id;
        GoogleBook.deleteOne({dbId})
        .then (data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });
}