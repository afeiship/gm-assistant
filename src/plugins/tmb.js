/**
 * @description
 * 到顶部，到中间，到底部
 * top/middle/bottom
 */

$(document).ready(() => {
  const ctx = $('body');
  const root = document.documentElement;
  const styles = `
    .tmb-toolkit{
      z-index: 1001;
      position:fixed;
      right: 10px;
      top: 300px;
      width: 120px;
      text-align: center;
    }
  `

  const html = `
    <section class="tmb-toolkit">
      <div class="gm-btn-group">
        <button data-gm-action="top" class="gm-btn gm-btn-default">⬆️</button>
        <button data-gm-action="middle" class="gm-btn gm-btn-default">😂</button>
        <button data-gm-action="bottom" class="gm-btn gm-btn-default">⬇️</button>
      </div>
    </section>
  `;

  gmsdk.addStyle(styles);

  ctx.prepend(html);
  ctx.find('[data-gm-action]').click((evt) => {
    let action = $(evt.target).data('gm-action');
    let mid = root.scrollHeight / 2;
    action === 'middle' && (action = mid);
    console.log(action);
    nx.scrollTo({ el: root, to: action });
  });

});
