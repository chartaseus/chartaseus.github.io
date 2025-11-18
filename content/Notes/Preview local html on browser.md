---
draft: false
published: 2025-04-18
modified:
  - 2025-11-18T18:00:11+07:00
title: Preview local html on browser
description:
permalink:
tags:
  - front-end
publish: false
---
per `live-server` readme:

> AJAX requests don't work with the file:// protocol due to security restrictions, i.e. you need a server if your site fetches content through JavaScript.

1. install `live-server` globally

```bash
npm install -g live-server
```

2. on project directory: `npx live-server`

3. view at `localhost:8080`

---

I recently found a seemingly better alternative: `serve` is more actively maintained, smaller, and looks prettier on terminal too. I installed it globally,

```bash
npm install -g serve
```

and simply run `npx serve` from inside my project directory. Haven’t explored the features much but it covers the basics for me.