const formController = require("../controllers/form.controller");

module.exports = app => {
    app.get("/api/products/", formController.findAllProducts);
    app.get("/api/product/:id", formController.findOneSingleProduct);
    app.put("/api/product/update/:id", formController.updateExistingProduct);
    app.post("/api/product/new", formController.createNewProduct);
    app.delete("/api/product/delete/:id", formController.deleteAnExistingProduct);
};

