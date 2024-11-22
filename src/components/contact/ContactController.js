class ContactController {
    // [GET] '/contact'
    index(req, res) {
        res.render("contact");
    }
}

module.exports = new ContactController();
