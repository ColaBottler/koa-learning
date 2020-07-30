/* eslint-disable no-param-reassign */
const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'Hello Koa!';
});

app.listen(3000, async () => {
  console.log('Listening: 127.0.0.1:3000');
});
