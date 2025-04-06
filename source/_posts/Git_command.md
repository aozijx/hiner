---
title: Git 命令
date: 2025-04-05 00:57:35
author: Hiner
categories: 
tags: 
cover: img/default.avif
---
{% link 'Git' '--fast-version-control' 'https://git-scm.com/book/zh/v2' %}
{% link 'Git' '廖雪峰 Git 教程' 'https://www.shouce.ren/api/view/a/13825' %}
## 配置相关
```bash
# 基础身份配置
git config --global user.name "Your Name"       # 设置全局用户名
git config --global user.email "your@email.com" # 设置全局邮箱

# 查看配置
git config --list                   # 查看所有配置项
git config user.name                # 查看当前用户名

# 系统级配置（跨平台开发常用）
git config --global core.autocrlf input      # Mac/Linux：换行符转换为LF
git config --global core.autocrlf true       # Windows：换行符转换为CRLF
git config --global core.fileMode false      # 忽略文件权限变更
git config core.ignorecase false             # 打开文件大小写敏感

# 编辑器与别名
git config --global core.editor "vim"        # 设置默认编辑器
git config --global alias.co checkout        # 创建别名（co 代替 checkout）
git config --global alias.br branch          # br 代替 branch
git config --global alias.st status          # st 代替 status
```

## 初始化本地仓库（如果项目未初始化）
```bash
git init                            # 初始化新仓库
git clone <远程仓库URL>             # 克隆远程仓库（含完整历史）
git clone --depth 1 <仓库URL>       # 浅克隆（仅最新版本，节省空间）
```

## 文件操作
```bash
# 添加文件到暂存区
git add .                          # 添加所有变化（包括新建/修改/删除）
git add -A                         # 同上，更明确的语法
git add -u                         # 仅添加已跟踪文件的修改（不包含新建）
git add -p                         # 交互式选择修改片段添加到暂存区

# 文件状态管理
git rm <文件名>                     # 删除文件并暂存删除操作
git mv <旧文件名> <新文件名>         # 重命名文件并暂存操作
```

## 提交管理
```bash
git commit -m "提交描述"            # 标准提交
git commit --amend                 # 修改最后一次提交（可修改描述/追加文件）
git commit --allow-empty -m "描述"  # 创建空提交（用于触发CI等场景）

# 提交规范建议
# feat: 添加新功能
# fix: 修复bug
# docs: 文档变更
# style: 代码格式调整（不影响逻辑）
# refactor: 代码重构
# test: 添加/修改测试用例
# chore: 构建过程或辅助工具的变动
```

## 远程仓库管理
```bash
git remote add origin <URL>        # 添加远程仓库（命名为origin）
git remote -v                      # 查看远程仓库地址
git remote rename origin new-name  # 重命名远程仓库
git remote remove origin           # 删除远程仓库关联
git push -u origin main            # 首次推送并建立跟踪关系
```  

## 分支操作
```bash
# 基础分支操作
git branch                         # 查看本地分支
git branch -r                      # 查看远程分支
git branch -a                      # 查看所有分支（本地+远程）
git checkout -b dev                # 创建并切换到新分支
git switch dev                     # 更直观的分支切换（Git 2.23+）
git branch -m old new              # 本地分支重命名
git push origin --delete old       # 删除远程分支

# 分支关系管理
git branch -vv                     # 查看分支跟踪关系
git branch --set-upstream-to=origin/main  # 修改当前分支的上游分支
git push -u origin dev             # 推送并设置上游分支

# 分支合并策略
git merge dev                      # 普通合并（保留合并提交记录）
git merge --squash dev             # 压缩合并（将多个提交合并为单个新提交）
git rebase main                    # 变基操作（整理提交历史，保持线性）
```

## 代码同步
```bash
git pull                          # 拉取并合并（= git fetch + git merge）
git pull --rebase                 # 拉取并使用变基合并（保持提交历史线性）
git fetch --prune                 # 同步远程分支（自动清理已删除的远程分支）
git push                          # 推送到跟踪的远程分支
git push -f                       # 强制推送（覆盖远程历史，慎用！）
```

## 撤销与恢复
```bash
# 工作区撤销
git restore <file>                # 撤销工作区修改（Git 2.23+）
git checkout -- <file>            # 传统撤销方式（效果同上）

# 暂存区撤销
git restore --staged <file>       # 将文件移出暂存区（Git 2.23+）
git reset HEAD <file>             # 传统方式（效果同上）

# 提交历史操作
git reset --soft HEAD~1           # 回退提交但保留修改在暂存区
git reset --hard HEAD~1           # 彻底回退提交（慎用！）
git revert <commit-hash>          # 创建反向提交撤销指定修改

# 应急恢复
git reflog                        # 查看所有操作记录（找回丢失的提交）
git cherry-pick <commit-hash>     # 复制指定提交到当前分支
git stash                         # 临时保存工作进度
git stash pop                     # 恢复最近暂存的工作进度
```

## 差异与日志
```bash
git status                        # 查看当前仓库状态
git diff                          # 工作区与暂存区差异
git diff --staged                 # 暂存区与最新提交的差异
git diff commit1 commit2          # 两个提交之间的差异
git log --oneline --graph         # 图形化简洁日志
git log -p                        # 显示详细修改内容
git blame <file>                  # 逐行查看文件修改历史
```

## 标签管理
```bash
git tag v1.0                      # 创建轻量标签
git tag -a v1.0 -m "版本说明"      # 创建带注释的标签
git push origin v1.0              # 推送单个标签
git push --tags                   # 推送所有本地标签
git tag -d v1.0                   # 删除本地标签
git push origin --delete v1.0     # 删除远程标签
```

## 场景：
- 更改仓库分支名称
   1. 本地分支重命名
     ```bash
     git branch -m old-branch dev
     ```
   2. 删除远程旧分支
     ```bash
     git push origin --delete old-branch
     ```
   3. 推送新分支到远程并绑定
     ```bash
     git push -u origin dev
     ```

## 补救措施
- 备份 .git 文件夹：如果误操作，可尝试恢复原有 .git 文件夹。
## 实现快捷操作
- 在 Windows 或 MacOS 命令行中，可以直接将文件或者文件夹拖入窗口，实现快速输入路径