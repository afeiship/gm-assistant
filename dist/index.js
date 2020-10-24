/**
 *  name: @feizheng/gm-assistant
 *  description: Tampermonkey assistant.
 *  homepage: https://github.com/afeiship/gm-assistant
 *  version: 1.0.1
 *  date: 2020-10-24T05:04:54.928Z
 *  license: MIT
 */

!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){$(document).ready(()=>{var e=$(".weui-msg"),t=e.find(".weui-msg__desc").text().trim(),i=e.find(".weui-msg__title").text().includes("已停止访问该网页")?"disabled":"primary";e.after(`<button id="goto" ${i} class="weui-btn weui-btn_${i}" style="cursor: pointer;">一键前往</button>`),$("#goto").click(()=>{location.href=t})})}));
