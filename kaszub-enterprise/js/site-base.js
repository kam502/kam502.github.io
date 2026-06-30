(function () {
  var segments = location.pathname.split('/').filter(Boolean);
  var base = '/';
  if (location.hostname.endsWith('github.io') && segments.length > 0) {
    base = '/' + segments[0] + '/';
  }
  window.siteUrl = function (path) {
    return base + path.replace(/^\//, '');
  };
})();
