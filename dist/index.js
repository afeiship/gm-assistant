/**
 *  name: @feizheng/gm-assistant
 *  description: Tampermonkey assistant.
 *  homepage: https://github.com/afeiship/gm-assistant
 *  version: 1.0.0
 *  date: 2020-10-17T08:04:16.121Z
 *  license: MIT
 */

!function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){$(document).ready(()=>{var t=$(".weui-msg"),e=t.find(".weui-msg__desc").text().trim();t.after('<button id="goto" class="weui-btn weui-btn_primary" style="cursor: pointer;">一键前往</button>'),$("#goto").click(()=>{location.href=e})})}));
