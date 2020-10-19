const chai = require('chai');
const chaiHttp = require('chai-http');
const { deleteOne } = require('../models/data');
const should = chai.should();
chai.use(chaiHttp);


describe('GET /', () => {
    it('It return OK', async () => {
        try {
            await chai.request('http://127.0.0.1:3000')
            .get('/')
               
        } catch (error) {
           // res.send({msg:"error"})
           done(); 
        }
        
    })
})

describe('GET retrieve all data in database /users', () => {
    it('It return OK', async () => {
        try {
            await chai.request('http://127.0.0.1:3000')
            .get('/users') 
            
        } catch (error) {
           // res.send({msg: "error"})
           done();
        }
         
    })
})
describe('GET one data by idin database /users', () => {
    it('It return OK', async () => {
        try {
            await chai.request('http://127.0.0.1:3000')
            .get('/users/5f8dbf0494ec2015addde9ba') 
            
        } catch (error) {
           // res.send({msg: "error"})
           done();
        }
         
    })
})

describe('POST data insert in database /users',() =>{
    it('It return OK', async () => {
        try {
            await chai.request('http://127.0.0.1:3000')
            .post('/users')
            .type('form')
            .send(({'nama':"value testing","asal":"value testing"}))   
            
        } catch (error) {
            //res.send({msg:"error"})
            done();
        }
         
    })
})

describe('PUT data edit in database /users',() =>{
    it('It return OK', async () => {
        try {
            await chai.request('http://127.0.0.1:3000')
            .put('/users/5f8dbff760c16f16e98225a7')
            .type('form')
            .send(({'nama':"yogi chai","asal":"value asal"}))   
            
        } catch (error) {
            //res.send({msg:"error"})
            done();
        }
         
    })
})

describe('DELETE data edit in database /users',() =>{
    it('It return OK', async () => {
        try {
            await chai.request('http://127.0.0.1:3000')
            .delete('/users/5f8dbf0494ec2015addde9ba')   
        } catch (error) {
            done();
            //res.send({msg:"error"})
        }
         
    })
})

