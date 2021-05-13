# next-node-weibo-picupload
> Weibo picupload for node.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-node-weibo-picupload
```

## usage
```conf
WEIBO_COOKIE=SUB=_2A25NmOccDeRhGeVI7VMZ8yzEyz-IHXVu7F_UrDV_PUNbm9AfLXbNkW9NTBpP0XrgXOp_OeWkgGQyy3tEb9mTbg6i
```

```js
import '@jswork/next-node-weibo-picupload';

const items = glob.sync('__tests__/*.jpg', { absolute: true });
nx.nodeWeiboPicupload(items).then(console.log);

/*
[
  {
    width: 350,
    size: 20251,
    ret: 1,
    height: 350,
    name: 'pic_2',
    pid: 'da432263gy1gqgtsu89utj209q09q0t2',
    type: 'jpg',
    url: 'https://tva1.sinaimg.cn/large/da432263gy1gqgtsu89utj209q09q0t2.jpg'
  },
  {
    width: 200,
    size: 9389,
    ret: 1,
    height: 200,
    name: 'pic_1',
    pid: 'da432263gy1gqgtsu7camj205k05k3yh',
    type: 'jpg',
    url: 'https://tva1.sinaimg.cn/large/da432263gy1gqgtsu7camj205k05k3yh.jpg'
  }
]
*/
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-node-weibo-picupload/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-node-weibo-picupload
[version-url]: https://npmjs.org/package/@jswork/next-node-weibo-picupload

[license-image]: https://img.shields.io/npm/l/@jswork/next-node-weibo-picupload
[license-url]: https://github.com/afeiship/next-node-weibo-picupload/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-node-weibo-picupload
[size-url]: https://github.com/afeiship/next-node-weibo-picupload/blob/master/dist/next-node-weibo-picupload.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-node-weibo-picupload
[download-url]: https://www.npmjs.com/package/@jswork/next-node-weibo-picupload
