/**
 * @description
 * 直接查询域名的: http://seo.chinaz.com/demo.com 信息
 */


$(document).ready(() => {
  const host = location.host;
  const domain = host.split('.').slice(-2).join('.');

  const html = `
    <div class="seo-toolkit">
      <button id="btn-seo1" class="st-btn st-btn-primary">主域名</button>
      <button id="btn-seo2" class="st-btn st-btn-secondary">子域名</button>
      <button id="btn-close" class="st-btn">关掉我</button>
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
    .st-btn{
      padding: 6px 10px;
      border-radius: 2px;
      width: 100%;
      color: #fff;
      border: none;
      background: #ff9500;
      transition: all 0.3s;
    }

    .st-btn:hover,
    .st-btn:active{
      opacity: 0.9;
    }

    .st-btn-primary{
      background: #007aff;
    }

    .st-btn-secondary{
      background: #4cd964;
    }
  `;

  GM_addStyle(styles);

  $('body').prepend(html);
  $("#btn-seo1").click(() => {
    location.href = `http://seo.chinaz.com/${domain}`;
  });

  $("#btn-seo2").click(() => {
    location.href = `http://seo.chinaz.com/${host}`;
  });

  $("#btn-close").click(() => {
    $('.st-btn').remove();
  });

});
