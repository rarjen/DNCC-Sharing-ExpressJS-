const router = require("express").Router();
const books = require("../controllers");

router.post("/create", books.create);
router.get("/show", books.index);
router.get("/show/:id", books.show);
router.put("/show/:id", books.update);
router.delete("/show/:id", books.destroy);

module.exports = router;
