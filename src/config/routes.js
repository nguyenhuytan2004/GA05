const homeRouter = require("./homeRoute");
const aboutRouter = require("./aboutRoute");
const registerRouter = require("./registerRoute");
const shopRouter = require("./shopRoute");
const cartRouter = require("./cartRoute");
const checkoutRouter = require("./checkoutRoute");
const contactRouter = require("./contactRoute");
const loginRouter = require("./loginRoute");
const notFoundRouter = require("./notFoundRoute");
const productRouter = require("./productRoute");

function route(app) {
    app.use("/single-product-page", productRouter);
    app.use("/404", notFoundRouter);
    app.use("/login", loginRouter);
    app.use("/contact", contactRouter);
    app.use("/checkout", checkoutRouter);

    // dùng riêng xử lý HTTP
    app.get("/register", registerRouter);
    app.post("/register", registerRouter);

    app.use("/cart", cartRouter);
    app.use("/about", aboutRouter);
    app.use("/shop", shopRouter);
    app.use("/", homeRouter);
}

module.exports = route;
