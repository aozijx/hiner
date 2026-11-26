---
title: VS Code 使用技巧
date: 2025-09-26 01:07:09
author: Hiner
categories: VSCode
tags: [vscode, 文档]
cover: src/img/vscode.webp
---
## [调试](https://code.visualstudio.com/docs/debugtest/debugging)
### 外部终端
默认情况下，VSCode 会在集成终端中运行 程序。
在 **launch.json** 中将 **"externalTerminal"** 设置为 **true** 时，VS Code 会在外部终端中运行 C/C++ 程序，而不是在集成终端中运行。
相应地，Python 将 **"console": "externalTerminal"** 设置为使用外部终端。

## [变量](https://code.visualstudio.com/docs/editor/variables-reference)
VSCode 支持在 **launch.json** 和 **tasks.json** 中使用变量。
- preLaunchTask: 在调试前运行的任务名称。
- file: 当前打开的文件的路径。
- fileDirname: 当前打开的文件所在的目录路径。
- fileBasename: 当前打开的文件的名称（不包含路径）。
- fileBasenameNoExtension: 当前打开的文件的名称（不包含路径和扩展名）。
- fileExtname: 当前打开的文件的扩展名。
- workspaceFolder: 当前工作区的路径。
- workspaceFolderBasename: 当前工作区的名称。

更多变量请参考官方文档:
> https://code.visualstudio.com/docs/editor/variables-reference

## [基本编辑](https://vscode.js.cn/docs/editing/codebasics)
### [多重选择（多光标）](https://vscode.js.cn/docs/editing/codebasics#_multiple-selections-multicursor)
VS Code 支持多个光标，可进行快速的同步编辑。您可以使用 {% keyboard 'Alt' %}+{% keyboard 'Left click' %} 添加次要光标（显示得更细）。每个光标会根据所在上下文独立操作。另一种常见的添加光标方法是使用 {% keyboard 'Ctrl' %}+{% keyboard 'Alt' %}+{% keyboard 'Down' %} 或 {% keyboard 'Ctrl' %}+{% keyboard 'Alt' %}+{% keyboard 'Up' %}，在下方或上方插入光标。
{% keyboard 'Ctrl' %}+{% keyboard 'D' %} 会选择光标处的单词，或当前选区的下一个匹配项。
{% keyboard 'Ctrl' %}+{% keyboard 'Shift' %}+{% keyboard 'L' %} 会选择所有匹配项。

### [缩小/扩展选区](https://vscode.js.cn/docs/editing/codebasics#_shrinkexpand-selection)
使用 {% keyboard 'Shift' %}+{% keyboard 'Alt' %}+{% keyboard 'Right' %} 可以扩展选区到下一个语法单元（例如，单词、括号内的内容、行、块等）。使用 {% keyboard 'Shift' %}+{% keyboard 'Alt' %}+{% keyboard 'Left' %} 可以缩小选区。

### [列（块）选择](https://vscode.js.cn/docs/editing/codebasics#_column-box-selection)
按住 {% keyboard 'Shift' %}+{% keyboard 'Alt' %} 并拖动鼠标，可以创建一个矩形选区。您也可以使用 {% keyboard 'Shift' %}+{% keyboard 'Alt' %}+{% keyboard 'PageDown' %} 或 {% keyboard 'Shift' %}+{% keyboard 'Alt' %}+{% keyboard 'PageUp' %} 来扩展列选择。
![Column text selection](https://vscode.js.cn/assets/docs/editing/codebasics/column-select.gif)

### [快速滚动](https://vscode.js.cn/docs/getstarted/tips-and-tricks#_fast-scrolling)
按住 {% keyboard 'Alt' %} 可以在编辑器和资源管理器中启用快速滚动。默认情况下，快速滚动使用 5 倍速；您可以通过“编辑器：快速滚动灵敏度”[editor.fastScrollSensitivity](vscode://settings/editor.fastScrollSensitivity) 设置调整倍速。

### [向上/向下复制行](https://vscode.js.cn/docs/getstarted/tips-and-tricks#_copy-line-up-down)
使用 {% keyboard 'Shift' %}+{% keyboard 'Alt' %}+{% keyboard 'Up' %} 或 {% keyboard 'Shift' %}+{% keyboard 'Alt' %}+{% keyboard 'Down' %} 可以快速向上或向下复制当前行。

### [向上/向下移动行](https://vscode.js.cn/docs/getstarted/tips-and-tricks#_move-line-up-and-down)
使用 {% keyboard 'Alt' %}+{% keyboard 'Up' %} 或 {% keyboard 'Alt' %}+{% keyboard 'Down' %} 可以快速向上或向下移动当前行。

### 删除行
使用 {% keyboard 'Ctrl' %}+{% keyboard 'Shift' %}+{% keyboard 'K' %} 可以快速删除当前行。

### [导航到特定行](https://vscode.js.cn/docs/getstarted/tips-and-tricks#_navigate-to-a-specific-line)
使用 {% keyboard 'Ctrl' %}+{% keyboard 'G' %} 可以快速导航到特定行。

### [选择当前行](https://vscode.js.cn/docs/getstarted/tips-and-tricks#_select-current-line)
键盘快捷键：{% keyboard 'Ctrl' %}+{% keyboard 'L' %}

### [修剪尾随空格](https://vscode.js.cn/docs/getstarted/tips-and-tricks#_trim-trailing-whitespace)
使用 {% keyboard 'Ctrl' %}+{% keyboard 'K' %}，然后 {% keyboard 'Ctrl' %}+{% keyboard 'X' %} 可以快速修剪当前文件中的所有尾随空格。
![trailing whitespace](https://vscode.js.cn/assets/docs/getstarted/tips-and-tricks/trim_whitespace.gif)

### [Markdown 预览](https://vscode.js.cn/docs/getstarted/tips-and-tricks#_open-markdown-preview)
- 预览  
在 Markdown 文件中，使用  
键盘快捷键：{% keyboard 'Ctrl' %}+{% keyboard 'Shift' %}+{% keyboard 'V' %}
- 并排编辑和预览  
在 Markdown 文件中，使用  
键盘快捷键：{% keyboard 'Ctrl' %}+{% keyboard 'K' %}+{% keyboard 'V' %}  
预览和编辑器将与您在任一视图中的滚动同步。

### [快捷键参考表](https://vscode.js.cn/docs/getstarted/tips-and-tricks#_keyboard-reference-sheets)
下载您平台的键盘快捷键参考表 ([macOS](https://go.microsoft.com/fwlink/?linkid=832143)、[Windows](https://go.microsoft.com/fwlink/?linkid=832145)、[Linux](https://go.microsoft.com/fwlink/?linkid=832144))。
![Keyboard Reference Sheet](https://vscode.js.cn/assets/docs/getstarted/tips-and-tricks/KeyboardReferenceSheet.png)

## [IntelliSense 的相关设置](https://vscode.js.cn/docs/editing/intellisense)
VS Code 的智能补全功能可以通过以下设置进行配置：
### Tab 补全
默认情况下，Tab 补全是禁用的。使用 [editor.tabCompletion](vscode://settings/editor.tabCompletion) 设置来启用它。存在以下值：
- off - (默认) Tab 补全被禁用。
- on - Tab 补全对所有建议都启用，并且重复调用会插入下一个最佳建议。
- onlySnippets - Tab 补全仅插入与当前行前缀匹配的静态代码片段。

### 邻近度加成
建议的排序取决于扩展信息以及它们与你当前正在输入的单词的匹配程度。此外，你可以使用 [editor.suggest.localityBonus](vscode://settings/editor.suggest.localityBonus) 设置，要求编辑器提升那些出现在光标位置附近的建议的排序。
默认情况下，VS Code 会预选建议列表中的第一个建议。如果你想要不同的行为，例如，总是选择建议列表中最近使用的项，你可以使用 [editor.suggestSelection](vscode://settings/editor.suggestSelection) 设置。

可用的 [editor.suggestSelection](vscode://settings/editor.suggestSelection) 值有：

- first - (默认) 总是选择列表顶部的项。
- recentlyUsed - 除非通过前缀选择了其他项，否则将选择之前使用过的项。
- recentlyUsedByPrefix - 根据之前完成这些建议的前缀来选择项。

## Python
### [运行 Python 代码](https://vscode.js.cn/docs/python/python-tutorial#_run-python-code)
选择一行或多行，然后按 {% keyboard 'Shift' %}+{% keyboard 'Enter' %} 或右键单击并选择运行 Python > 在 Python 终端中运行选中内容/行。或者，您可以在没有选择的情况下使用 {% keyboard 'Shift' %}+{% keyboard 'Enter' %} 激活智能发送，Python 扩展会将光标附近最小的可运行代码块发送到终端。此命令对于仅测试文件的一部分非常方便。
