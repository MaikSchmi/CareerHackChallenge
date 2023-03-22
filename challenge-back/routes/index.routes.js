const router = require("express").Router();
const phones = require("../phones.json");

router.get("/phones", (req, res, next) => {
    res.status(200).json(phones);
});
router.get("/phones/:id", (req, res, next) => {
    const id = req.params.id;
    let index = -1;
    for (let i = 0; i < phones.length; i++) {
        if (phones[i].id.toString() === id.toString()) {
            index = i;
            break;
        }
    }
    res.status(200).json(phones[index]);
});

module.exports = router;