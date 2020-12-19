/**
 * @description
 * 方便复制 github 的 repo name
 */

$(document).ready(() => {
  const el = $('#readme');
  if (!el.length) return;

  const name = $('#js-repo-pjax-container [data-pjax="#js-repo-pjax-container"]').eq(0).text();
  const ssh = $('tab-container [role="tabpanel"]').eq(1).find('input').val();
  const githubHtmlCopy = (inValue) => {
    return `<div class="mb-2 input-group">
      <input class="form-control input-monospace input-sm bg-gray-light" value="${inValue}" aria-label="${inValue}" disabled>
      <div class="input-group-button">
        <clipboard-copy value="${inValue}" aria-label="Copy to clipboard" class="btn btn-sm" tabindex="0" role="button"><svg class="octicon octicon-clippy" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path></svg></clipboard-copy>
      </div>
    </div>`;
  };

  const htmlSshCopy = githubHtmlCopy(ssh);
  const htmlNameCopy = githubHtmlCopy(name);

  $('#readme .Box-body .markdown-body h1').after(
    `<div class="d-flex">
      <div class="pr-1 flex-1">${htmlSshCopy}</div>
      <div class="flex-1">${htmlNameCopy}</div>
    </div>`
  );
});
