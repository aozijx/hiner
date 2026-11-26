---
title: Vue 安装方式与项目创建
date: 2025-07-08 23:22:52
author: Hiner
categories: [学习分享]
tags: [vue]
cover: src/img/vue.webp
---

## Vue 安装方式的区别
1. **npm install vue**
- **作用**：安装 Vue.js 的核心库（运行时 + 编译器），仅包含 Vue 的底层功能。
- **用途**：在项目中直接使用 Vue.js 进行开发，比如创建 Vue 实例、组件等。
- **适用场景**：
  - 手动搭建 Vue 项目（例如结合 Webpack/Vite 从零配置）。
  - 在已有项目（如传统后端渲染项目）中引入 Vue.js。

2. **npm install -g @vue/cli**（通常全局安装）
- **作用**：安装 Vue CLI（Vue 官方脚手架工具），提供项目生成和管理功能。
- **用途**：快速生成和管理 Vue 项目，提供开箱即用的构建配置（Webpack、Babel、ESLint 等）。
- **适用场景**：
  - 快速初始化一个现代化的 Vue 项目（单页应用 SPA）。
  - 通过命令行工具（如 vue create、vue serve）管理项目。

3. **npm create vite**
- **作用**：基于 Vite 快速初始化一个前端项目（支持 Vue、React 等框架）。
- **用途**：快速创建一个基于 Vite 的 Vue 项目，享受 Vite 带来的极速开发体验。
- **适用场景**：
  - 追求开发体验（如热更新速度、简洁配置）。
  - 轻量级项目或需要自定义构建工具（如搭配其他工具库使用）。

**关键区别**：
| 对比项          | npm install vue                  | npm install @vue/cli               |
|-----------------|------------------------------------|--------------------------------------|
| 安装内容        | Vue 核心库（运行时 + 编译器）       | Vue 官方脚手架工具（命令行工具）      |
| 用途           | 直接使用 Vue.js 开发                | 创建和管理 Vue 项目                   |
| 典型命令       | 本地安装（项目依赖）                | 通常全局安装（`-g`）                  |
| 项目角色       | 项目运行时依赖                     | 开发工具（不参与生产代码）            |

**补充说明**：
- 如果只是开发一个简单的 Vue 应用，可能只需要 vue。
- 如果需要标准化、工程化的开发流程（如单元测试、热更新、打包优化等），则使用 @vue/cli 创建项目。
- @vue/cli 是作用域包（Scoped Package），需带 @ 前缀。
- 现代 Vue 3 项目也可以使用 Vite（npm create vite@latest）替代 Vue CLI，获得更快的构建体验。
- Vue 3 推荐使用 Vite 创建项目（npm create vite@latest），但 CLI 仍广泛用于维护旧项目。

## 创建 Vue 项目
Vite 官方提供了 Vue 模板，可以直接生成一个基于 Vite 的 Vue 项目，无需手动配置。
1. 使用 Vite 创建 Vue 项目
命令：**npm create vite**
   ```bash
   npm create vite@latest my-vue-app -- --template vue
   ```
   - **my-vue-app** 是你的项目名称（可自定义）。
   - **--template vue** 指定使用 Vue 模板（Vite 也支持 React、Svelte 等）。

2. 进入项目并安装依赖
   ```bash
   cd my-vue-app
   npm install  # 或 yarn / pnpm install
   ```
3. 运行开发服务器
   ```bash
   npm run dev  # 启动开发模式（Vite 提供超快热更新）
   ```
4. 生产环境构建
   ```bash
   npm run build  # 生成优化后的静态文件（默认在 `dist` 目录）
   ```

### 关键点说明
- 无需全局安装工具
`npm create vite` 会直接调用最新版本的 Vite，无需提前安装 @vue/cli 或全局安装 Vite。

- 项目结构对比
  - 使用 @vue/cli 生成的项目基于 Webpack。
  - 使用 Vite 生成的项目基于 Vite（默认集成 Vue 3，支持 `<script setup>` 语法）。

- 手动安装 Vue
如果已有 Vite 项目，只需安装 Vue：
  ```bash
  npm install vue @vitejs/plugin-vue
  并在 vite.config.js 中配置 Vue 插件：

  js
  import { defineConfig } from 'vite';
  import vue from '@vitejs/plugin-vue';

  export default defineConfig({
    plugins: [vue()]
  });
  ```

### 问题：
#### PowerShell 的执行策略（Execution Policy）默认禁止运行脚本，导致无法直接执行 npm 命令
  ```bash
  npm : xxxxx cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at http
  s:/go.microsoft.com/fwlink/?LinkID=135170.
  ```
**解决办法**
1. 临时允许脚本执行（推荐）
在 PowerShell 中运行以下命令（仅当前会话有效）：
   ```powershell
   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
   ```
1. 永久更改执行策略（需管理员权限，永久允许脚本运行需谨慎）
以管理员身份打开 PowerShell。
   ```powershell
   Set-ExecutionPolicy RemoteSigned -Force
   ```
   - **RemoteSigned**：允许本地脚本运行，远程脚本需签名。
   - **-Force**：跳过确认提示。

1. 使用 cmd 代替 PowerShell
如果不想修改策略，可以直接在命令提示符（CMD）中运行：
   ```cmd
   npm create vite@latest my-vue-app --template vue
   ```
   （cmd 默认不受 PowerShell 执行策略限制）

**验证是否解决**
运行以下命令检查当前执行策略：
```powershell
Get-ExecutionPolicy
```
如果返回 RemoteSigned 或 Bypass，说明已生效。

**安全提示**
修改执行策略后，仅运行可信来源的脚本。
完成后可以恢复默认策略（如需）：
```powershell
Set-ExecutionPolicy Restricted -Force
```

