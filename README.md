# Google Search History Cleaner

[简体中文](#简体中文) | [English](#english)

## 简体中文

### 项目简介

一个轻量级、开源代码可审查的 Chrome Manifest V3 扩展。自动删除**新产生的 Google 搜索结果页面浏览记录**，同时保留其他网站的 Chrome 浏览历史。

### 功能

- 仅匹配 `google.com`、`www.google.com`、`google.com.hk`、`www.google.com.hk` 的 `/search` 路径（HTTP/HTTPS，包含查询参数）。
- 当 Chrome 记录匹配网址后，通过 `chrome.history.deleteUrl()` 删除对应的历史网址。
- 不使用远程服务、第三方依赖或配置同步存储。
- 默认**不扫描或清除安装前的历史记录**。

### Windows 安装步骤

1. 下载并解压源代码 ZIP 到一个固定文件夹。
2. 在 Chrome 地址栏打开 `chrome://extensions`。
3. 打开右上角的**开发者模式**。
4. 点击**加载已解压的扩展程序**。
5. 选择包含 `manifest.json` 和 `background.js` 的文件夹。

### 验证方法

1. 在 Google 搜索一个测试关键词。
2. 打开 `chrome://history`，检查对应的 `google.com/search` or `google.com.hk/search` 或 `google.com.hk/search` 页面是否已被删除。
3. 访问其他网站并确认其浏览记录仍保留。

### 隐私与限制

- 扩展**只申请 `history` 权限**。Chrome 的历史权限可访问完整浏览记录，虽然本扩展代码仅针对特定 Google 搜索网址执行删除操作。
- 扩展**先收到 Chrome 已记录的历史事件，再执行删除**；无法阻止历史条目短暂产生，也不保证每次删除一定成功。
- 仅匹配 `google.com`、`www.google.com`、`google.com.hk` 和 `www.google.com.hk` 的 `/search` 页面；不匹配其他国家域名，也不匹配所有可能的 Google 搜索入口。Google 首页（如 `https://www.google.com.hk/`）不会被删除。
- **不会清除 Google 账号内的搜索活动、Google 搜索建议、浏览器缓存或其他搜索服务端数据**。
- `chrome.history.deleteUrl()` 针对完整网址删除历史条目；如某个相同网址曾被访问多次，可能一并移除该网址对应的历史访问记录。
- 本扩展不发送网络请求，但 Google 搜索本身仍会将查询发送给 Google。

### 停用 / 卸载

打开 `chrome://extensions`，关闭或移除本扩展即可。

---

## English

### Overview

A minimal, auditable Chrome Manifest V3 extension that removes **newly visited Google Search results URLs** from Chrome's local browsing history while keeping visits to other websites.

### Features

- Matches `http(s)://google.com/search` and `http(s)://www.google.com/search` (including query parameters).
- Uses `chrome.history.deleteUrl()` after Chrome reports a matching history visit.
- No remote services, third-party dependencies, or synced configuration storage.
- Does **not scan or erase historical visits** from before installation.

### Installation (Windows Chrome)

1. Download and extract the source ZIP into a permanent folder.
2. Open `chrome://extensions` in Chrome.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the folder containing `manifest.json` and `background.js`.

### Testing

1. Search for a test phrase on Google.
2. Visit `chrome://history` and check whether the matching `google.com/search` or `google.com.hk/search` URL was removed.
3. Visit another website and verify its history remains available.

### Privacy and limitations

- The extension requests **only the `history` permission**. This permission gives broad access to browsing history, even though the source code deletes only narrowly matched Google Search URLs.
- Deletion occurs **after a history entry is created**, so the URL may exist briefly and removal is not guaranteed to succeed in every situation.
- Only `/search` on `google.com` and `www.google.com` is supported; country-specific Google domains and other search entry points are not covered.
- It **does not clear Google Account activity, Google autocomplete suggestions, browser cache, or server-side search data**.
- `chrome.history.deleteUrl()` deletes history for the URL; multiple prior visits to the exact same URL may be removed together.
- The extension makes no network requests. Google Search itself still transmits searches to Google.

### Disable / uninstall

Go to `chrome://extensions` and disable or remove the extension.


### v1.1 / 版本 1.1

- 中文：新增 `google.com.hk` 和 `www.google.com.hk` 搜索结果页匹配，仍不删除 Google 首页。
- English: Added `google.com.hk` and `www.google.com.hk` search result URL matching; Google homepages remain untouched.
