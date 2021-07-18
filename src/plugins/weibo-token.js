$(document).ready(() => {
  var host = location.host;
  if (!host.includes('weibo.com')) return;

  console.log('weibo cookie:');

  // nx.waitToDisplay('.mod-act-group .act-item-txt', 1000, (el) => {
  //   gmsdk.http
  //     .put({
  //       url: 'https://aric-heroku-storage.herokuapp.com/posts/weiyun',
  //       data: { token: document.cookie }
  //     })
  //     .then((res) => {
  //       console.log('WEIYUN TOKEN has update.');
  //     });
  // });
});
