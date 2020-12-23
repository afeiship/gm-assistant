/**
 *  name: @jswork/gm-assistant
 *  description: Tampermonkey assistant.
 *  homepage: https://github.com/afeiship/gm-assistant
 *  version: 1.0.3
 *  date: 2020-12-23T05:21:31.675Z
 *  license: MIT
 */

!function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){$(document).ready(()=>{if(!$("#readme").length)return;const t=$('#js-repo-pjax-container [data-pjax="#js-repo-pjax-container"]').eq(0).text(),n=t=>`<div class="mb-2 input-group">\n      <input class="form-control input-monospace input-sm bg-gray-light" value="${t}" aria-label="${t}" disabled>\n      <div class="input-group-button">\n        <clipboard-copy value="${t}" aria-label="Copy to clipboard" class="btn btn-sm" tabindex="0" role="button"><svg class="octicon octicon-clippy" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path></svg></clipboard-copy>\n      </div>\n    </div>`,o=n($('tab-container [role="tabpanel"]').eq(1).find("input").val()),i=n(t);$("#readme .Box-body .markdown-body h1").after(`<div class="d-flex">\n      <div class="pr-1 flex-1">${o}</div>\n      <div class="flex-1">${i}</div>\n    </div>`)}),$(document).ready(()=>{const t=location.host,n=t.split(".").slice(-2).join(".");GM_addStyle("\n    .seo-toolkit{\n      z-index: 1000;\n      position:fixed;\n      right: 10px;\n      top: 200px;\n      width: 80px;\n      text-align: center;\n    }\n    .seo-toolkit button{\n      margin-bottom:10px;\n    }\n  "),$("body").prepend('\n    <div class="seo-toolkit">\n      <button id="btn-seo1" class="gm-btn gm-btn-primary">主域名</button>\n      <button id="btn-seo2" class="gm-btn gm-btn-positive">子域名</button>\n      <button id="btn-close" class="gm-btn gm-btn-negative">关掉我</button>\n    </div>\n  '),$("#btn-seo1").click(()=>{window.open("http://seo.chinaz.com/"+n)}),$("#btn-seo2").click(()=>{window.open("http://seo.chinaz.com/"+t)}),$("#btn-close").click(()=>{$(".gm-btn").remove()})}),$(document).ready(()=>{var t=$(".weui-msg"),n=t.find(".weui-msg__desc").text().trim(),o=t.find(".weui-msg__title").text().includes("已停止访问该网页")?"disabled":"primary";t.after(`<button id="goto" ${o} class="weui-btn weui-btn_${o}" style="cursor: pointer;">一键前往</button>`),$("#goto").click(()=>{location.href=n})})}));
