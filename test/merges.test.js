const supertest = require('supertest'); //require supertest
const request = supertest('http://localhost:3000/api/v1/'); //supert


it('Should merge products and images',async (done) => {

    request.get('merges')
        .end(function(err, res){
            expect(res.status).toBe(200)
            done();
        });

    jest.setTimeout(50000)
},)
