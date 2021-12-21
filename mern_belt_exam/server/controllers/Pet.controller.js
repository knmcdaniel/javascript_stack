const Pet = require('../models/Pet.model');


module.exports = {

    createPet: (req, res) => {
            Pet.create(req.body)
                .then((newPet) => {
                    res.json(newPet)
                })
                .catch(err => res.status(400).json(err));
    },

    findAllPets: (req, res) => {
    Pet.find({})
        .then(pets => res.json(pets))
        .catch(err => res.status(400).json(err))
    },


    getPet: (req, res) => {
    Pet.findOne({_id:req.params.id})
        .then(pet => res.json(pet))
        .catch(err => res.status(400).json(err))
    },

    updatePet: (req, res) => {
    Pet.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators: true})
        .then(updatedPet => res.json(updatedPet))
        .catch(err => res.status(400).json(err))
    },

    deletePet: (req, res) => {
    Pet.deleteOne({ _id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.status(400).json(err))
    }

}