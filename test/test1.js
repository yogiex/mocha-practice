const {expect} = require ('chai');
const chai = require ('chai');
const chaiHttp = require ('chai-http');
const {deleteOne} = require ('../models/data');
const should = chai.should ();
chai.use (chaiHttp);

describe ('GET /', () => {
  it ('It return OK', async () => {
    await chai.request ('http://127.0.0.1:3000').get ('/')
    
  });
});
describe ('/users', () => {
  describe ('GET retrieve all data in database /users', () => {
    it ('It return OK', async () => {
      await chai
        .request ('http://127.0.0.1:3000')
        .get ('/users')
    });
  });

  describe ('GET one data by id in database /users', () => {
    it ('It return OK', async () => {
      await chai
        .request ('http://127.0.0.1:3000')
        .get ('/users/5f8dbf0494ec2015addde9ba')
    });
  });
  describe ('GET one data by id but cannot find in database /users', () => {
    it ('It return error', async () => {
      await chai
        .request ('http://127.0.0.1:3000')
        .get ('/users/5f8dbf0494ec2015ada')
        done();
    });
  });

  describe ('POST data insert in database /users', () => {
    it ('It return OK', async () => {
      await chai
        .request ('http://127.0.0.1:3000')
        .post ('/users')
        .type ('form')
        .send ({nama: 'value testing', asal: 'value testing'})
    });
  });
  describe ('POST data one data but nama null insert in database /users', () => {
    it ('It return not ok', async () => {
      await chai
        .request ('http://127.0.0.1:3000')
        .post ('/users')
        .type ('form')
        .send ({ asal: 'value testing'})
    });
  });

  describe ('PUT data edit in database /users', () => {
    it ('It return OK', async () => {
      await chai
        .request ('http://127.0.0.1:3000')
        .put ('/users/5f8dbff760c16f16e98225a7')
        .type ('form')
        .send ({nama: 'yogi chai', asal: 'value asal'})
        
    });
  });

  describe ('DELETE data edit in database /users', () => {
    it ('It return OK', async () => {
      await chai
        .request ('http://127.0.0.1:3000')
        .delete ('/users/5f8dbf0494ec2015addde9ba')
        
    });
  });
});
