const Person = require('../models/person.model');


module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createPerson = (request, response) => {
    const { firstName, lastName } = request.body;
    Person.create ({
        firstName,
        lastName
    })
        .then(person => response.json(person))
        .catch(err => response.json(err));
}

module.exports.findAllPeople = (req, res) => {
    People.find()
        .then((allPeople) => {
            res.json({ people: allPeople })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
