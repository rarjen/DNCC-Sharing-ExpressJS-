const router = require("express").Router();
const books = require("./buku");

router.get("/", (req, res) => {
  return res.status(200).json({
    status: true,
    message: "success",
    data: null,
  });
});

router.use("/books", books);

module.exports = router;
