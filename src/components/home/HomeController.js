class HomeController {
    // [GET] '/'
    index(req, res) {
        res.render("home");
    }

    // [GET] '/404'
    _404(req, res) {
        res.render("404");
    }
}

module.exports = new HomeController();
