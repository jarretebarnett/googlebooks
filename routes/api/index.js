const router = require("express").Router();
const bookRoutes = require("./books.js");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;