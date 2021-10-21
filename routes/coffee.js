const router = require("express").Router();

const { allCoffee, oneCoffee, addCoffee, editCoffee, deleteCoffee,
    deleteAllCofee } = require("../utils/coffee");

    router.get("/", async (req, res) => res.status(200).json({msg: "All Coffee", data: await allCoffee()}));

    router.post("/", async (req, res) => res.status(201).json({msg: "Add a Coffee", data: await addCoffee(req.body)}));

    router.delete("/", async (req, res) => res.status(200).json({msg: "Delete all Coffee", data: await deletedAll()}));

    module.exports = router;