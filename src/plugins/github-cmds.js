/**
 * @description
 * 针对个人的 github 页面，增加快速的 npm install 复制功能
 * github.com/afeiship?tab=repositories
 */

const GITHUB_TABS = 'github.com/afeiship?tab=repositories';

$(document).ready(() => {
  const docUrl = document.URL;
  if (!docUrl.includes(GITHUB_TABS)) return;

  const ctx = $('#user-repositories-list');
  const items = ctx.find('li a[itemprop="name codeRepository"]');

  items.each((index, item) => {
    const pkgname = $(item).text().trim();
    const parent = $(item).parent();
    const isPriavate = parent.text().includes('Private');
    const scope = isPriavate ? 'afeiship' : 'jswork';
    const snpm = `npm i -S @${scope}/${pkgname}`;
    const gclone = `git clone git@github.com:afeiship/${pkgname}.git`;
    const el1 = $(`<button data-gm-npm="${snpm}" class="mr-1 gm-btn gm-btn-negative">npm</button>`);
    const el2 = $(`<button data-gm-gclone="${gclone}" class="gm-btn gm-btn-default">github</button>`);
    parent.append(el1);
    parent.append(el2);
  });

  ctx.find('[data-gm-npm]').click((evt) => {
    const cmd = $(evt.target).data('gm-npm');
    gmsdk.setClipboard(cmd);
  });

  ctx.find('[data-gm-gclone]').click((evt) => {
    const cmd = $(evt.target).data('gm-gclone');
    gmsdk.setClipboard(cmd);
  });
});
