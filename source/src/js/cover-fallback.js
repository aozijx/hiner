// 封面图加载失败时回退到本地备用图
(function () {
  var REMOTE_KEY = "1.21-new-trial-chambers-patterns.jpg";

  document.addEventListener("error", function (e) {
    var img = e.target;
    if (!img || img.tagName !== "IMG") return;
    // 已回退过或不是目标远程图则跳过，避免本地图失败时无限循环
    if (img.dataset.coverFallback || img.src.indexOf(REMOTE_KEY) === -1) return;
    var root = (typeof GLOBAL_CONFIG !== "undefined" && GLOBAL_CONFIG.root) || "/";
    img.dataset.coverFallback = "1";
    img.src = root + "src/img/minecraft-1-21-official.jpg";
  }, true);
})();
