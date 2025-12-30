---
draft: true
published: 2025-09-15
modified:
  - 2025-12-30T08:24:36+07:00
title: fiddling with sqlite
description:
permalink:
tags:
  - database
  - sql
publish: false
---
## [date and time function](https://sqlite.org/lang_datefunc.html)

``` 
select sqlite_version();
```

| sqlite\_version() |
| :---------------- |
| 3.39.1            |

``` 
select datetime();
```

| datetime() |
| :-----------|
| 2025-09-15 02:08:55 |

``` 
select strftime('%s', '2025-09-15T01:28:16.775Z');
```

| strftime('%s', '2025-09-15T01:28:16.775Z') |
| :-------------------------------------------|
| 1757899696 |

``` 
select strftime('%s', '2025-09-15T08:28:16+07:00');
```

| strftime('%s', '2025-09-15T08:28:16+07:00') |
| :--------------------------------------------|
| 1757899696 |
- also accepts `'2025-09-15T08:28:16.000+07:00'` but **doesn’t accept** `'2025-09-15T08:28:16+0700'`

``` 
select strftime('%H:%M:%S', 1757901589, 'unixepoch');
```

| strftime('%H:%M:%S', 1757901589, 'unixepoch') |
| :-------------------------------------------- |
| 01:59:49                                      |

`%F` = `%H:%M:%S` but somehow it doesn’t work in this fiddle

``` 
select unixepoch();
```

| unixepoch() |
| :------------|
| 1757902135 |

- this is integer

``` 
create table if not exists datedate(id text, unix int default (unixepoch()), timetext as (strftime('%H:%M:%S', unix, 'unixepoch')));
```
✓

>[!note]+
>`timetext as (strftime('%H:%M:%S', unix, 'unixepoch'))` is the same as `timetext GENERATED ALWAYS AS (strftime('%H:%M:%S', unix, 'unixepoch')) VIRTUAL`. [generated columns](https://sqlite.org/gencol.html)

``` 
insert into datedate(id) values('a');
```
✓
``` 
insert into datedate values('b', 1757905677);
```
✓
``` 
select * from datedate;
```

| id | unix | timetext |
| :---|:-----|:---------|
| a | 1757906316 | 03:18:36 |
| b | 1757905677 | 03:07:57 |

[fiddle](https://dbfiddle.uk/rLL6YFKW)
