---
title: "SQL - nulls last/first"
tags:
  - 数据库
  - SQL
categories:
  - 数据库
  - SQL
date: 2018-07-26 00:37:49
---
## 给字段排序时遇到的null值问题

当我们使用`order by`来为指定的字段进行排序时，如果db中该字段的值存在着null值，那么在排序时这些null值的record会被排到前边。

在实际的业务中这可能会造成一些问题，我们需要将这些值为null的字段的record排到后边。

## 使用关键字`nulls last/first`

我们可以通过`nulls last`或者`nulls first`关键字来指定这些null值的record是排在前还是后，如下：

```sql
select * from t_student order by name desc nulls last;
```