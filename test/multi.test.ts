
var supertest = require('supertest'); //require supertest
const request = supertest('http://localhost:3000/api/v1/'); //supert


describe('Test all endpoints', () => {


    it('Should upload merge file ',  (done) => {

       request.post('uploadfiles').
        set('Content-Type', 'application/json').send( {
            "filename": "david",
            "bucketname": "godmainig"
        }).end(function(err,res){
                expect(res.status).toBe(201)
                done();
            });

    })

    it('Should get product by id',  (done) => {

        request.get('products/DW00100028').
        set('Content-Type', 'application/json').end(function(err,res){
            expect(res.status).toBe(200)
            done();
        });

    })



})
