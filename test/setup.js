/* eslint-disable strict */

'use strict';

global.sinon = require('sinon');
const chai = require('chai');
should = chai.should();
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
global.fs = require('fs');

afterEach(() => {
  // Restore the default sandbox
  sinon.restore();
});
