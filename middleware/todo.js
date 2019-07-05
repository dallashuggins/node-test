'use strict'
const util = require('util');
const rp = require('request-promise');
const moment = require('moment');

const getPeople = async () => {
  let response;
  try {
      const settings = {
        url: 'https://swapi.co/api/people',
        method: 'GET'
      }
      response = await rp(settings);
  } catch (e) {
      console.log("Get people error:", util.inspect(e, {showHidden: false, depth: null}));
      throw new Error (e);
  }
  return response;
}

module.exports = {
  getPeople: getPeople
}