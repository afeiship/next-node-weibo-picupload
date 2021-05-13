require('../src');
require('dotenv').config();

const glob = require('glob');

const items = glob.sync('__tests__/*.jpg', { absolute: true });
nx.nodeWeiboPicupload(items).then((res) => {
  console.log(res);
  // done();
});
