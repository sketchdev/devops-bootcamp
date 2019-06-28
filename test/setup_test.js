require('dotenv').config();
const { db } = require('../lib/db');
const chai = require('chai');

global.app = require('../app.js').app;
global.db = db;
global.should = chai.should();
global.expect = chai.expect;
global.request = require('supertest');
