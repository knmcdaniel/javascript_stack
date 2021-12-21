const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    petName: { 
        type:String,
        required: [true,"A pet name is required."],
        minLength:[3, "The pet name must be 3 or more characters"]
        },
    petType: { 
        type:String,
        required: [true,"A pet type is required."],
        minLength:[3, "The pet type must be 3 or more characters"]
        },
    petDesc: { 
        type:String,
        required: [true,"A pet description is required."],
        minLength:[3, "The pet description must be 3 or more characters"]
        },
    petSkill1: { 
        type:String,
        },
    petSkill2: { 
        type:String,
        },
    petSkill3: { 
        type:String,
        },
}, {timestamps: true});

const Pet = mongoose.model('Pet', PetSchema);


module.exports = Pet;