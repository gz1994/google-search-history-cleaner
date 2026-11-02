'use strict';

// No network requests, no remote code, no storage.
// Only match Google Search result URLs on google.com or www.google.com.
function isGoogleSearchResultsUrl(rawUrl) {
  try {
    const url = new URL(rawUrl);
    const isGoogle = url.hostname === 'google.com' ||
                     url.hostname === 'www.google.com';
    return (url.protocol === 'https:' || url.protocol === 'http:') &&
           isGoogle &&
           url.pathname === '/search';
  } catch (_error) {
    return false;
  }
}

chrome.history.onVisited.addListener((item) => {
  if (!item.url || !isGoogleSearchResultsUrl(item.url)) return;
  chrome.history.deleteUrl({ url: item.url }).catch((error) => {
    console.error('Could not remove Google Search history URL:', error);
  });
});
