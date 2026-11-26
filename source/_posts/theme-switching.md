---
title: 网页主题切换方式
date: 2025-06-18 16:15:04
author: Hiner
categories: [学习分享]
tags: [HTML, CSS]
cover: 
---

Color Mode，也称为 Theme Mode。

## 属性选择器
借助 JavaScript 动态修改 HTML 根元素的 `data-theme` 属性，进而实现网站主题样式的切换。
属性选择器是主题切换中最灵活的实现方式：
```css
/* 浅色主题 */
[data-theme="light"] {
  background-color: white;
  color: black;
}

/* 深色主题 */
[data-theme="dark"] {
  background-color: black;
  color: white;
}
```
```JavaScript
// 获取切换按钮
const toggleButton = document.getElementById('theme-toggle');

// 当前主题，默认为浅色
let currentTheme = 'light';

// 切换主题的函数
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
}

// 为按钮添加点击事件
toggleButton.addEventListener('click', toggleTheme);
```

结合 CSS 变量使用：
CSS 变量将样式定义与使用分离，大大提高了代码的可维护性。
```css
[data-theme="theme"] {
    --primary-bg: #1a1a1a; /* 背景颜色 */
    --primary-text: #000000; /* 字体颜色 */
    --box-shadow: 0 4px 5px rgba(82, 75, 75, 0.5); /* 阴影颜色 */
    --overlay-color: rgba(0, 0, 0, 0); /* 遮罩颜色 */
}
div {
    background-color: var(--primary-bg);
    border: 1px solid var(--primary-bg);
    color: var(--primary-text);
    box-shadow: var(--box-shadow);
}
```

也可以添加元素限定，使特定元素发生变化。
```css
div[data-theme="theme"] {
    /* */
}
```

这种方法的优势在于：
- 可以定义任意数量的主题
- 切换简单高效
- 支持 CSS 变量实现统一管理

## 媒体查询检测系统偏好
媒体查询允许我们根据系统设置自动应用主题：
```css
@media (prefers-color-scheme: dark) {
  body {
    background-color: #1a1a2e;
    color: #e6e6e6;
  }
}
```

JavaScript 中检测系统主题偏好：
```JavaScript
const systemPrefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;
```

## 样式优先级
- 手动设置的 data-theme 属性优先级最高。
- 系统偏好的 prefers-color-scheme 次之。
- 全局默认样式优先级最低。

## 体验优化
- 为颜色变化添加过渡效果，显著提升用户体验。
- 使用 `localStorage` 保存用户选择。
- 通过主题指示器和激活状态的按钮，让用户清晰了解当前主题状态。

## AI
```html
<!DOCTYPE html>
<html lang="zh-CN" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>主题切换技术演示</title>
  <style>
    :root {
      --primary-bg: #f5f7fa;
      --primary-text: #333;
      --secondary-bg: #ffffff;
      --accent-color: #3498db;
      --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      --transition-time: 0.4s;
    }
    
    /* 浅色主题 */
    [data-theme="light"] {
      --primary-bg: #f5f7fa;
      --primary-text: #333;
      --secondary-bg: #ffffff;
      --accent-color: #3498db;
      --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    /* 深色主题 */
    [data-theme="dark"] {
      --primary-bg: #1a1a2e;
      --primary-text: #e6e6e6;
      --secondary-bg: #16213e;
      --accent-color: #0f9;
      --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
    }
    
    /* 琥珀色主题 */
    [data-theme="amber"] {
      --primary-bg: #2c190c;
      --primary-text: #ffd8a6;
      --secondary-bg: #3d210e;
      --accent-color: #ff9a3c;
      --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    }
    
    /* 蓝色主题 */
    [data-theme="blue"] {
      --primary-bg: #0c1e3c;
      --primary-text: #e0f7fa;
      --secondary-bg: #1a3c6c;
      --accent-color: #29b6f6;
      --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    }
    
    body {
      background-color: var(--primary-bg);
      color: var(--primary-text);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 20px;
      min-height: 100vh;
      transition: background-color var(--transition-time), 
                 color var(--transition-time);
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    
    .theme-selector {
      display: flex;
      gap: 15px;
      margin-bottom: 30px;
      flex-wrap: wrap;
    }
    
    .theme-btn {
      padding: 12px 20px;
      border: none;
      border-radius: 8px;
      background-color: var(--secondary-bg);
      color: var(--primary-text);
      cursor: pointer;
      font-weight: 600;
      box-shadow: var(--box-shadow);
      transition: transform 0.2s, box-shadow 0.2s;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .theme-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
    
    .theme-btn.active {
      background-color: var(--accent-color);
      color: #fff;
    }
    
    .theme-btn i {
      font-size: 1.2rem;
    }
    
    .card-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 25px;
    }
    
    .card {
      background-color: var(--secondary-bg);
      border-radius: 12px;
      padding: 25px;
      box-shadow: var(--box-shadow);
      transition: transform var(--transition-time), 
                 box-shadow var(--transition-time);
    }
    
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
    }
    
    .card h3 {
      color: var(--accent-color);
      margin-top: 0;
      border-bottom: 2px solid var(--accent-color);
      padding-bottom: 10px;
    }
    
    .priority-section {
      background-color: var(--secondary-bg);
      padding: 30px;
      border-radius: 12px;
      margin: 40px 0;
      box-shadow: var(--box-shadow);
    }
    
    .priority-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    
    .priority-item {
      display: flex;
      align-items: center;
      padding: 15px;
      border-radius: 8px;
      background-color: rgba(0, 0, 0, 0.05);
    }
    
    .priority-number {
      width: 40px;
      height: 40px;
      background-color: var(--accent-color);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 1.2rem;
      margin-right: 15px;
      flex-shrink: 0;
    }
    
    .theme-indicator {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: var(--secondary-bg);
      color: var(--accent-color);
      padding: 10px 15px;
      border-radius: 20px;
      box-shadow: var(--box-shadow);
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .code-block {
      background-color: rgba(0, 0, 0, 0.08);
      padding: 20px;
      border-radius: 8px;
      font-family: 'Courier New', monospace;
      overflow-x: auto;
      margin: 20px 0;
    }
    
    @media (max-width: 768px) {
      .theme-selector {
        flex-direction: column;
      }
      
      .theme-btn {
        width: 100%;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>网页主题模式切换技术</h1>
    <p>使用属性选择器与媒体查询实现灵活的主题切换功能</p>
    
    <div class="theme-selector">
      <button class="theme-btn active" data-theme="light">
        <i>☀️</i> 浅色模式
      </button>
      <button class="theme-btn" data-theme="dark">
        <i>🌙</i> 深色模式
      </button>
      <button class="theme-btn" data-theme="amber">
        <i>🟠</i> 琥珀主题
      </button>
      <button class="theme-btn" data-theme="blue">
        <i>🔵</i> 蓝色主题
      </button>
    </div>
    
    <div class="card-container">
      <div class="card">
        <h3>属性选择器实现</h3>
        <p>通过修改HTML根元素的<code>data-theme</code>属性实现主题切换：</p>
        <div class="code-block">
document.documentElement.setAttribute('data-theme', 'dark');
        </div>
        <p>CSS中使用属性选择器定义主题样式：</p>
        <div class="code-block">
[data-theme="dark"] {
  --primary-bg: #1a1a2e;
  --primary-text: #e6e6e6;
}
        </div>
      </div>
      
      <div class="card">
        <h3>媒体查询检测</h3>
        <p>使用<code>prefers-color-scheme</code>检测系统主题偏好：</p>
        <div class="code-block">
@media (prefers-color-scheme: dark) {
  /* 深色模式样式 */
}
        </div>
        <p>JavaScript检测系统主题：</p>
        <div class="code-block">
const systemPrefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;
        </div>
      </div>
      
      <div class="card">
        <h3>CSS变量应用</h3>
        <p>使用CSS变量统一管理主题样式：</p>
        <div class="code-block">
:root {
  --primary-bg: #f5f7fa;
  --primary-text: #333;
}

[data-theme="dark"] {
  --primary-bg: #1a1a2e;
  --primary-text: #e6e6e6;
}

body {
  background-color: var(--primary-bg);
  color: var(--primary-text);
}
        </div>
      </div>
    </div>
    
    <div class="priority-section">
      <h2>样式优先级策略</h2>
      <div class="priority-list">
        <div class="priority-item">
          <div class="priority-number">1</div>
          <div>
            <strong>手动设置的主题</strong> - 通过JavaScript设置的<code>data-theme</code>属性具有最高优先级
          </div>
        </div>
        
        <div class="priority-item">
          <div class="priority-number">2</div>
          <div>
            <strong>系统偏好设置</strong> - <code>@media (prefers-color-scheme)</code>媒体查询次之
          </div>
        </div>
        
        <div class="priority-item">
          <div class="priority-number">3</div>
          <div>
            <strong>默认样式</strong> - 基础样式优先级最低
          </div>
        </div>
      </div>
    </div>
    
    <div class="card">
      <h3>体验优化策略</h3>
      <p><strong>1. 平滑过渡效果</strong>：为背景色和文字颜色添加过渡动画</p>
      <div class="code-block">
body {
  transition: background-color 0.4s, color 0.4s;
}
      </div>
      
      <p><strong>2. 保存用户偏好</strong>：使用localStorage记住用户选择</p>
      <div class="code-block">
// 保存主题
localStorage.setItem("theme", "dark");

// 获取保存的主题
const savedTheme = localStorage.getItem("theme");
      </div>
      
      <p><strong>3. 响应系统变化</strong>：监听系统主题变化</p>
      <div class="code-block">
window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', e => {
    if (!localStorage.getItem("theme")) {
      applySystemTheme();
    }
});
      </div>
    </div>
  </div>
  
  <div class="theme-indicator">
    <span id="current-theme">当前主题：浅色模式</span>
  </div>

  <script>
    // 主题切换功能
    document.addEventListener('DOMContentLoaded', function() {
      const themeButtons = document.querySelectorAll('.theme-btn');
      const themeIndicator = document.getElementById('current-theme');
      
      // 初始化主题
      function initTheme() {
        const savedTheme = localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        
        // 确定要应用的主题
        let theme = savedTheme || (systemPrefersDark ? "dark" : "light");
        
        // 应用主题
        applyTheme(theme);
      }
      
      // 应用主题
      function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        
        // 更新按钮状态
        themeButtons.forEach(btn => {
          btn.classList.remove('active');
          if (btn.dataset.theme === theme) {
            btn.classList.add('active');
          }
        });
        
        // 更新指示器
        themeIndicator.textContent = `当前主题：${getThemeName(theme)}`;
        
        // 保存主题
        localStorage.setItem("theme", theme);
      }
      
      // 获取主题名称
      function getThemeName(theme) {
        const names = {
          'light': '浅色模式',
          'dark': '深色模式',
          'amber': '琥珀主题',
          'blue': '蓝色主题'
        };
        return names[theme] || theme;
      }
      
      // 添加按钮点击事件
      themeButtons.forEach(button => {
        button.addEventListener('click', function() {
          const theme = this.dataset.theme;
          applyTheme(theme);
        });
      });
      
      // 监听系统主题变化
      window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', e => {
          // 仅当用户未手动选择主题时响应系统变化
          if (!localStorage.getItem("theme")) {
            applyTheme(e.matches ? 'dark' : 'light');
          }
      });
      
      // 初始化
      initTheme();
    });
  </script>
</body>
</html>
```
