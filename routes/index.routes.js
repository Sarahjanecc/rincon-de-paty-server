const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("funcionando");
});

const authRoutes = require("./auth.routes.js");
router.use("/auth", authRoutes);

const bookRoutes = require("./book.routes.js");
router.use("/book", bookRoutes);

const information = require("./information.routes.js");
router.use("/messages", information);

module.exports = router;
