const User = require('../model/userModel');

exports.getUsers = async function(req, res) {
    try {
        const result = await User.find();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.createUser = function(req, res) {
    const user = new User({
        name: req.body.name,
        age: req.body.age
    });
    user.save()
        .then(result => {
            res.status(201).json(result);
        })
        .catch(error => {
            res.status(500).json({ message: error.message });
        })};

exports.detailsUser = async function(req, res) {
    try {
        const result = await User.findById(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}
