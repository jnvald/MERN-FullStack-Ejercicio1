const products = require("../models/form.model");

module.exports.findAllProducts = (req, res) => {
  products.find()
    .then(allProducts => res.json({ products: allProducts }))
    .catch(err => res.json({ message: "Ops!! Algo salío mal :( lo siento", error: err }));
};

module.exports.findOneSingleProduct = (req, res) => {
	products.findOne({ _id: req.params.id })
		.then(oneSingleProduct => res.json({ product: oneSingleProduct }))
		.catch(err => res.json({ message: "Ops!! Algo salío mal :( intentalo otra vez", error: err }));
};

module.exports.createNewProduct = (req, res) => {
  console.log(req.body)
  products.create(req.body)

    .then(newlyCreatedProduct => res.json({ product: newlyCreatedProduct }))
    .catch(err => res.json({ message: "Ops!! Algo salío mal :( Vuelve a intentarlo", error: err }));
};

module.exports.updateExistingProduct = (req, res) => {
  products.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedProduct => res.json({ product: updatedProduct }))
    .catch(err => res.json({ message: "Ops!! Algo salío mal :(", error: err }));
};

module.exports.deleteAnExistingProduct = (req, res) => {
  products.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
