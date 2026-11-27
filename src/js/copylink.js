// 复制当前文章链接：挂到主题公开 API，供右键菜单配置调用
window.Solitude.copyPostLink = function () {
    const postLink = window.location.href;

    navigator.clipboard.writeText(postLink).then(() => {
        window.Solitude.snackbarShow("当前页面链接已复制到剪贴板", false, 2000);
    }).catch(err => {
        console.error("无法复制链接", err);
        window.Solitude.snackbarShow("复制失败，请重试", false, 2000);
    });
};
