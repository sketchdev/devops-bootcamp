require('dotenv').config();

const chai = require('chai');

global.app = require('../app.js').app;
global.should = chai.should();
global.expect = chai.expect;
global.request = require('supertest');

global.RollHistoryBuilder = require('./builders/roll_history_builder');

global.deleteData = async () => {
  let tableNames = ['roll_history'];
  for (let tableName of tableNames) {
    let sql = 'DELETE FROM ' + tableName;
    await db.none(sql);
  }
};

global.seedRollHistory = async () => {
  return await insert('roll_history', new RollHistoryBuilder().build());
};

/***
 *
 * @param table - name of the table to be inserted into
 * @param values - is the key value pair of what will be inserted into the table, keys = column name, values = data to be inserted, the column values and data values are the same
 * ex: {name: 'some widget', description: req.body.description, num_items: req.body.count}
 * @returns {Promise<any>}
 */
global.insert = async (table, values) => {
  const columns = Object.keys(values).join(', ');
  const data = Object.keys(values).map((key) => '${' + key + '}');
  const bindings = Object.assign({}, values);
  const sql = `insert into ${table}(${columns}) values(${data})`;

  return await db.one(sql + 'RETURNING *', bindings);
};
