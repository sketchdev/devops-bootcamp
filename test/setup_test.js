require('dotenv').config();

const chai = require('chai');

global.app = require('../app.js').app;
global.should = chai.should();
global.expect = chai.expect;
global.request = require('supertest');
