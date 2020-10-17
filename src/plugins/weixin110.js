/**
 * @description
 * 微信屏蔽的网址，方便直接打开。
 */

$(document).ready(() => {
  var target = $('.weui-msg');
  var target_url = target.find('.weui-msg__desc').text().trim();
  target.after(`<button id="goto" class="weui-btn weui-btn_primary" style="cursor: pointer;">一键前往</button>`);

  $('#goto').click(()=>{
    location.href = target_url;
  })
});
