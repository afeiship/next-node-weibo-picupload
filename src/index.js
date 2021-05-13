(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var nxWeiboToPics = nx.weiboToPics || require('@jswork/next-weibo-to-pics');
  var fs = require('fs');
  var fetch = require('node-fetch');
  var FormData = require('form-data');
  var _ = require('dotenv').config();
  var defaults = {
    baseURL: 'https://picupload.weibo.com/interface/pic_upload.php',
    cookie: process.env.WEIBO_COOKIE
  };

  nx.nodeWeiboPicupload = function (inItems, inOptions) {
    var options = nx.mix(null, defaults, inOptions);
    var body = new FormData();
    var headers = nx.mix({ cookie: options.cookie }, body.getHeaders());

    inItems.forEach((filename, index) => {
      var idx = 'pic' + (index + 1);
      body.append(idx, fs.readFileSync(filename));
    });

    return new Promise(function (resolve, reject) {
      fetch(options.baseURL, { method: 'POST', headers, body })
        .then((res) => res.text())
        .catch(reject)
        .then((res) => {
          console.log();
          resolve(nxWeiboToPics(res));
        });
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.nodeWeiboPicupload;
  }
})();
