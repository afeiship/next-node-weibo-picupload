(function () {
  require('../src');
  const glob = require('glob');
  const opts = {
    cookie:
      'SUB=_2A95NrxSyDeRxGeVI7VMZ8yzEyz-IHXVs_S96rDV6PUJbkdAKLVT2kWpNTBpP0TJrn2XWNfpp5n8g-sc-xgGi3UTX'
  };

  describe('api.basic test', () => {
    test('nx.nodeWeiboPicupload should upload pictures', function (done) {
      const items = glob.sync('__tests__/*.jpg', { absolute: true });
      nx.nodeWeiboPicupload(items, opts).then((res) => {
        console.log(res);
        expect(res.length).toBe(2);
        done();
      });
    });

    test('http url should be transferred', function (done) {
      const items = ['https://pic.rmb.bdstatic.com/7f7a8d7b247d3aa430010f10a5765239.jpeg'];
      nx.nodeWeiboPicupload(items, opts).then((res) => {
        console.log(res);
        expect(res.length).toBe(1);
        done();
      });
    });
  });
})();
