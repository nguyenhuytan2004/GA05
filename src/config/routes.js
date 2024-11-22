const homeRouter = require("../components/home/homeRoute");
const aboutRouter = require("../components/about/aboutRoute");
const userRouter = require("../components/user/userRoute");
const shopRouter = require("../components/shop/shopRoute");
const contactRouter = require("../components/contact/contactRoute");

function route(app) {
    app.get("/product", shopRouter);
    app.get("/404", homeRouter);
    app.get("/login", userRouter);
    app.get("/contact", contactRouter);
    app.get("/checkout", userRouter);

    // // dùng riêng xử lý HTTP
    app.get("/register", userRouter);
    // app.post("/register", registerRouter);

    app.get("/cart", userRouter);
    app.get("/about", aboutRouter);
    app.get("/shop", shopRouter);
    app.use("/", homeRouter);
}

module.exports = route;
