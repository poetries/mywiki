# sublime-evernote：支持用markdown写印象笔记(Evernote)
[sublime-evernote](https://packagecontrol.io/packages/Evernote) 是sublime上的一个插件。它主要有如下功能
* 新增或编辑印象笔记中的笔记。并同步到印象笔记。内容支持markdown。
* 在印象笔记中搜索包含某关键字的笔记。

我选它的因为
* 印象笔记不支持markdown[注1]
* 我用sublime


## 安装
1. 用Sublime的PackageControl安装Evernote
1. 设置Sublime与印象笔记做关联
	1. 国内用户打开  https://www.evernote.com/api/DeveloperToken.action ，国际用户打开  https://www.evernote.com/api/DeveloperToken.action 。点击点击 Create a developer token。
	1. 打开 Preferences > Package Settings > Evernote >Settings - User
	1. 在文件中贴入如下内容
	```
	{
		"noteStoreUrl": "",
		"token": ""
	}
	```
	noteStoreUrl和token值为之前打开的页面的上的值。保存。
1. 测试是否成功：通过`shift+command+p`打开命令窗口,输入Evernote，就会看见Evernote的许多命令,点击Evernote:list recent notes,如果看到罗列出最新的笔记，则说明授权成功

## 快捷键设置
插件默认没有添加快捷键。但可以自己配置。     

通过`shift+command+p`打开命令窗口，输入`key binding`，选择`User`那，写入你的内容。    

下面是我的设置
```
[
	{ "keys": ["ctrl+e", "ctrl+o"], "command": "open_evernote_note" },
	{ "keys": ["ctrl+s"], "command": "save_evernote_note", "context": [{"key": "evernote_note"}, {"key": "evernote_has_guid"}] },
	{ "keys": ["ctrl+s"], "command": "send_to_evernote", "context": [{"key": "evernote_note"}, {"key": "evernote_has_guid", "operator": "equal", "operand": false}] }
]
```
意思是，按`ctrl+e, ctrl+o`后，会打开印象笔记，按`ctrl+s`会将笔记保存并且同步到印象笔记。

## 常用命令
* `Evernote: New empty note` 创建笔记
* `Evernote: Search note` 搜索笔记

加上设置的快捷键（打开笔记，保存和同步笔记），基本够我用了。    

嫌麻烦？那就用[马克飞象](https://maxiang.io/)吧~

## 注
[1]: 虽然印象笔记 Mac 和 Windows 的 5.9.2Beta 版已增加一些基本的markdown语法。从那截图的感觉那只支持从Markdown转化为带格式的文本。但sublime-evernote是双向的：用markdown写的，保存到印象笔记中查看时，是带格式的文本，但在sublime中看是markdown的。

## 参考
* [Sublime进阶使用](http://blog.saymagic.cn/2015/06/20/write-blog-by-sublime.html)



