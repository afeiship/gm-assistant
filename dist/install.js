// ==UserScript==
// @name         gm-assistant
// @namespace    https://github.com/afeiship/gm-assistant
// @version      1.0.19
// @description  Tampermonkey assistant.
// @author       aric.zheng
// @match        *://*/*
// @updateURL https://raw.githubusercontent.com/afeiship/gm-assistant/master/dist/install.js
// @require  https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @require  https://cdn.jsdelivr.net/npm/@jswork/gm-sdk@1.0.18
// @require  https://cdn.jsdelivr.net/npm/@jswork/gm-assistant@1.0.19
// @require  https://cdnjs.cloudflare.com/ajax/libs/jquery-toast-plugin/1.3.2/jquery.toast.min.js
// @resource GM_STYLES https://unpkg.com/@jswork/gm-styles@1.0.6/dist/index.css
// @grant GM_addStyle
// @grant GM_deleteValue
// @grant GM_listValues
// @grant GM_addValueChangeListener
// @grant GM_removeValueChangeListener
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_log
// @grant GM_getResourceText
// @grant GM_getResourceURL
// @grant GM_registerMenuCommand
// @grant GM_unregisterMenuCommand
// @grant GM_openInTab
// @grant GM_xmlhttpRequest
// @grant GM_download
// @grant GM_getTab
// @grant GM_saveTab
// @grant GM_getTabs
// @grant GM_notification
// @grant GM_setClipboard
// @grant GM_info
// @grant GM_cookie
// @grant  window.focus
// @icon64 https://tva1.sinaimg.cn/large/007S8ZIlgy1gexw87htqhj305k05k74o.jpg
// @noframes
// ==/UserScript==


const GM_STYLES = GM_getResourceText('GM_STYLES');
GM_addStyle(GM_STYLES);
