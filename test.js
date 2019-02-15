

let request;



describe('clearEntry', function () {
    it('should set form imput to empty', function () {
        const items = [
            {id:2, product_name: "legos", department_name:"toys", price: 2.99, stock_quantity: 20}
        ];

        expect($("input[id=input]").val()).to.equal("");
    });
});

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server');
const db = require('./models');
const expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

let request;


describe('GET /api/examples', function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it('should find all examples', function(done) {
    // Add some examples to the db to test with
    db.User.bulkCreate([
      { id:2, product_name: "legos", department_name:"toys", price: 2.99, stock_quantity: 20},
      { id:5, product_name: "barbie dolls", department_name:"toys", price: 10.99, stock_quantity: 40 },
      { id:7, product_name: "bear", department_name:"toys", price: 30.99, stock_quantity: 15 },
      { id:9, product_name: "ball", department_name:"toys", price: 14.99, stock_quantity: 25 }
    ]).then(function() {
      // Request the route that returns all examples
      request.get('/api/users').end(function(err, res) {
        let responseStatus = res.status;
        let responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an('array')
          .that.has.lengthOf(4);

        expect(responseBody[0])
          .to.be.an('object')
          .that.includes({ id:2, product_name: "legos", department_name:"toys", price: 2.99, stock_quantity: 20 });

        expect(responseBody[1])
          .to.be.an('object')
          .that.includes({ id:5, product_name: "barbie dolls", department_name:"toys", price: 10.99, stock_quantity: 40 });

        expect(responseBody[2])
        .to.be.an('object')
        .that.includes({ id:7, product_name: "bear", department_name:"toys", price: 30.99, stock_quantity: 15 });

        expect(responseBody[3])
        .to.be.an('object')
        .that.includes({ id:9, product_name: "ball", department_name:"toys", price: 14.99, stock_quantity: 25 });

        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });
});

describe('POST /api/user', function() {
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it('should save an example', function(done) {
    var reqBody = {
        id:9, 
        product_name: "ball", 
        department_name:"toys", 
        price: 14.99, 
        stock_quantity: 25
    };

    // POST the request body to the server
    request
      .post('/api/user')
      .send(reqBody)
      .end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an('object')
          .that.includes(reqBody);

        // The `done` function is used to end any asynchronous tests
        done();
      });
  });
});

  

