(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var nxWeiboToPics = nx.weiboToPics || require('@jswork/next-weibo-to-pics');
  var NxFsOopen = nx.FsOpen || require('@jswork/next-fs-open');
  var fetch = require('node-fetch');
  var FormData = require('form-data');
  var defaults = {
    baseURL: 'https://picupload.weibo.com/interface/pic_upload.php',
    cookie: process.env.WEIBO_COOKIE
  };

  nx.nodeWeiboPicupload = function (inItems, inOptions) {
    var options = nx.mix(null, defaults, inOptions);
    var body = new FormData();
    var headers = nx.mix({ cookie: options.cookie }, body.getHeaders());

    inItems.forEach((item, index) => {
      var idx = 'pic' + (index + 1);
      var buf = NxFsOopen.from(item);
      body.append(idx, buf);
    });

    return new Promise(function (resolve, reject) {
      fetch(options.baseURL, { method: 'POST', headers, body })
        .catch(reject)
        .then((res) => res.text())
        .then((res) => {
          resolve(nxWeiboToPics(res));
        });
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.nodeWeiboPicupload;
  }
})();
