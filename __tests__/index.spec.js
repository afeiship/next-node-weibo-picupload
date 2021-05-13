(function () {
  require('../src');
  const glob = require('glob');

  describe('api.basic test', () => {
    test('nx.nodeWeiboPicupload should upload pictures', function (done) {
      const items = glob.sync('__tests__/*.jpg', { absolute: true });
      nx.nodeWeiboPicupload(items).then((res) => {
        console.log(res);
        expect(res.length).toBe(2);
        done();
      });
    });
  });
})();
