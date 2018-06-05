---
title: Hexo - 修改默认的post和draft的模板
tags:
  - Hexo
categories:
  - Hexo
abbrlink: 1369
date: 2018-05-10 00:29:26
---
## 修改默认的post和draft的模板

通过`hexo n post XXX`或者`hexo n draft XXX`所生成的文章或草稿是根据默认的模板来生成的，我们可以自己来定制想要的模板。

在站点根目录下的 scaffolds 文件夹下，存放着 `draft.md`， `page.md` 和 `post.md`这三个文件夹，一般我们只需要修改draft和post这两个模板就行了。
<!-- more -->

我们可以在模板的文件头里添加自己想要的格式，如下：

```html
---
title: {{ title }}
date: {{ date }}
tags:
categories:
---
```

这样使用命令生成的draft或post都会默认带有上边的文件头了。

## 添加新的模板来生成定制的post

其实我们还可以在 scaffolds 目录下添加新的模板文件，比如 `Hexo.md`，其模板内容如下：

```html
---
title: {{ title }}
date: {{ date }}
tags:
  - Hexo
categories:
  - Hexo
---
```

然后通过命令：

```bash
hexo n hexo XXX
```

注意，这里的第二个 hexo 指的是我们刚刚新添加的模板文件 `hexo.md` 的文件名；这里的文件名和命令都是大小写不敏感的。

执行完命令会在 source/_posts 目录下生成与 `hexo.md` 模板相对应的文章。