const express = require("express");
const app = express();
const port = 8000;

const faker = require("faker");


const createUser = () => {
    const newFakeUser = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
    return newFakeUser;
} 

const createCompany = () => {
    const newFakeCompany = {
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return newFakeCompany;
}

//Runs the createUser function and sets the returned data to fakeUser
app.get("/api/users/new", (req, res) => {
    const fakeUser = createUser();
    res.json( fakeUser );
});

//Runs the createCompany function and sets the returned data to fakeCompany
app.get("/api/companies/new", (req, res) => {
    const fakeCompany = createCompany();
    res.json( fakeCompany );
});


//Runs both the createCompany and createUser functions and returns them accordingly to display as json data. 
app.get("/api/user/company/", (req, res) => {
    const fakeUser = createUser();
    const fakeCompany = createCompany();
    res.json({
        user: fakeUser,
        company: fakeCompany
    });
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );