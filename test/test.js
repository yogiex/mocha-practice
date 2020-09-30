const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);


describe('GET /',() => {
    it('It return OK', done => {
        chai.request('http://127.0.0.1:3000')
            .get('/')
            .end((err,res) => { 
                res.should.have.status(200);
                done();
            })
    })
})

describe('GET retrieve all data in database /users', () => {
    it('It return OK', done => {
        chai.request('http://127.0.0.1:3000')
        //chai.request("http://" + process.envIP + ":" + process.env.PORT)
            .get('/users')
            .end((err,res) => { 
                res.should.have.status(200);
                done();
            })
    })
})

describe('POST data insert in database /users',() =>{
    it('It return OK', done => {
        chai.request('http://127.0.0.1:3000')
            .post('/users')
            .type('form')
            .send(({'nama':"value nama","asal":"value asal"}))
            .end((err,res) =>{
                res.should.have.status(200);
                done();
            })
    })
})