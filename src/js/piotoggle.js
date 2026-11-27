// 看板娘显示/隐藏：统一走 pio 自身的 .hidden 状态，避免与 style.display 冲突
function pioIsHidden() {
    const pioContainer = document.getElementById("pio-container");
    // 容器不存在说明模型未加载（如移动端）
    return pioContainer ? pioContainer.classList.contains("hidden") : true;
}

function updatePioToggleText() {
    const label = document.querySelector("#buttonPio span");
    if (label) label.textContent = pioIsHidden() ? "显示看板娘" : "隐藏看板娘";
}

function togglePio() {
    const pioContainer = document.getElementById("pio-container");
    if (!pioContainer || !window.pio_reference) return;

    if (pioContainer.classList.contains("hidden")) {
        pioContainer.classList.remove("hidden");
        localStorage.setItem("posterGirl", 1);
        // 首次加载即被隐藏时模型尚未初始化，这里补一次
        if (!window.pio_reference.model) window.pio_reference.init();
    } else {
        // 复用 pio 自带 destroy：加 .hidden、写 localStorage、恢复小头像点击
        window.pio_reference.destroy();
    }
    updatePioToggleText();
}

// 模型自带「×」关闭时不经过 togglePio，打开右键菜单与页面加载完成时各同步一次
document.addEventListener("contextmenu", updatePioToggleText);
window.addEventListener("load", updatePioToggleText);

// 挂到主题公开 API，供右键菜单配置调用
window.Solitude.togglePio = togglePio;
