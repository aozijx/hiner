// 封面图加载失败时自动回退到本地图片
// 新增规则：往 rules 里加一条 { test: /远程图片地址特征/, local: '本地图片路径' }
(function () {
  var rules = [
    {
      test: /minecraft\.net\/content\/dam\/.*1\.21-new-trial-chambers-patterns\.jpg/,
      local: '/hiner/src/img/minecraft-1-21-official.jpg'
    }
  ];

  function matchRule(src) {
    for (var i = 0; i < rules.length; i++) {
      if (rules[i].test.test(src)) return rules[i].local;
    }
    return null;
  }

  document.addEventListener('error', function (e) {
    var img = e.target;
    if (!img || img.tagName !== 'IMG') return;
    // 已回退过就跳过，避免本地图也失败时无限循环
    if (img.dataset.coverFallback) return;
    var local = matchRule(img.src);
    if (!local) return;
    img.dataset.coverFallback = '1';
    img.src = local;
  }, true);
})();
