/**
 * @description
 * 微信屏蔽的网址，方便直接打开。
 */

// https://detail.m.tmall.com/item.htm?id=560601547829&spm=a2141.7631571.designer_23244302224._1_0
// https://www.xb5.cc/ztlist/Hban.html

$(document).ready(() => {
  var target = $('.weui-msg');
  var target_url = target.find('.weui-msg__desc').text().trim();
  var title = target.find('.weui-msg__title');
  var disabled = title.text().includes('已停止访问该网页') ? 'disabled' : 'primary';
  target.after(
    `<button id="goto" ${disabled} class="weui-btn weui-btn_${disabled}" style="cursor: pointer;">一键前往</button>`
  );

  $('#goto').click(() => {
    location.href = target_url;
  });
});
