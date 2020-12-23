/**
 * @description
 * 直接查询域名的: http://seo.chinaz.com/demo.com 信息
 */


$(document).ready(() => {
  const host = location.host;
  const domain = host.split('.').slice(-2).join('.');

  const html = `
    <div class="seo-toolkit">
      <button id="btn-seo1" class="gm-btn gm-btn-primary">主域名</button>
      <button id="btn-seo2" class="gm-btn gm-btn-positive">子域名</button>
      <button id="btn-close" class="gm-btn gm-btn-negative">关掉我</button>
    </div>
  `;
  const styles = `
    .seo-toolkit{
      z-index: 1000;
      position:fixed;
      right: 10px;
      top: 200px;
      width: 80px;
      text-align: center;
    }
    .seo-toolkit button{
      margin-bottom:10px;
    }
  `;

  GM_addStyle(styles);

  $('body').prepend(html);
  $("#btn-seo1").click(() => {
    window.open(`http://seo.chinaz.com/${domain}`);
  });

  $("#btn-seo2").click(() => {
    window.open(`http://seo.chinaz.com/${host}`);
  });

  $("#btn-close").click(() => {
    $('.gm-btn').remove();
  });

});
