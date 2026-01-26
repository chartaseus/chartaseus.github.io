---
title: Heading 1
description: A Lorem Ipsum page to test features, styles, and formatting
permalink: lorem
aliases:
  - lorem ipsum
tags:
  - meta
  - quartz
draft: false
published: 2025-11-04
modified:
  - 2026-01-26T17:05:59+07:00
  - 2025-12-30T06:58:51+07:00
  - 2025-11-16T16:32:24+07:00
  - 2025-11-09T19:24:10+07:00
  - 2025-11-05T18:39:47+07:00
---
## Paragraph

this is a page to test all the features(?), styles, and formatting I’m using throughout the site. inspired by [Gwern.net](https://gwern.net/lorem). most examples are copied from Obsidian sandbox vault.

I removed heading 1 because there's supposed to be only one `<h1>` in a page and it's already covered by Quartz

## Headings (this is a heading 2)

### This is a heading 3

#### This is a heading 4

##### This is a heading 5

###### This is a heading 6

## Emphasis

*This text will be italic*

_This will also be italic_

**This text will be bold**

__This will also be bold__

## Callouts

> [!info]-
> Closed callout
>  ([[#Callouts| OOOOOHH recursive callouts!!!]])

> [!important]+ Open toggleable callout
>  (or remove the `+` altogether to remove toggle & always open)

## Code block

```js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```

Code block theme can be set to one of these built-in themes in config:

```ts
type BundledTheme = 'andromeeda' | 'aurora-x' | 'ayu-dark' | 'catppuccin-frappe' | 'catppuccin-latte' | 'catppuccin-macchiato' | 'catppuccin-mocha' | 'dark-plus' | 'dracula' | 'dracula-soft' | 'everforest-dark' | 'everforest-light' | 'github-dark' | 'github-dark-default' | 'github-dark-dimmed' | 'github-dark-high-contrast' | 'github-light' | 'github-light-default' | 'github-light-high-contrast' | 'houston' | 'kanagawa-dragon' | 'kanagawa-lotus' | 'kanagawa-wave' | 'laserwave' | 'light-plus' | 'material-theme' | 'material-theme-darker' | 'material-theme-lighter' | 'material-theme-ocean' | 'material-theme-palenight' | 'min-dark' | 'min-light' | 'monokai' | 'night-owl' | 'nord' | 'one-dark-pro' | 'one-light' | 'plastic' | 'poimandres' | 'red' | 'rose-pine' | 'rose-pine-dawn' | 'rose-pine-moon' | 'slack-dark' | 'slack-ochin' | 'snazzy-light' | 'solarized-dark' | 'solarized-light' | 'synthwave-84' | 'tokyo-night' | 'vesper' | 'vitesse-black' | 'vitesse-dark' | 'vitesse-light';
```

    Text indented with a tab is formatted like this, and will also look like a code block in preview.

### Inline code

`sudo apt update && sudo apt upgrade -y{:sh}`

## Table

| **Microsoft Office**                                                                                                                                                                      | **Google Docs**                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| ![[Untitled 1.webp\|250]]                                                                                                                                                                 | ![[Untitled 2.webp\|250]]                                                                                 |
| Secara default, file Microsoft Office jika diupload ke Google Drive akan mempertahankan ekstensi (.docx, .xlsx, .pptx) dalam nama filenya, contoh: *Panduan.docx* atau *Perhitungan.xlsx* | File-file Google Docs bisa langsung dibaca dan diedit di web browser oleh siapa saja yang memiliki akses. |

...of content?

## HTML `figure`

```html
<figure>
	<img src="../files/Practice%20Guide%20for%20Computer.png" alt="">
	<figcaption>IT IS ONLY <strong>COMPUTER</strong></figcaption>
</figure>
```

<figure>
	<img src="../files/Practice%20Guide%20for%20Computer.png" alt="">
	<figcaption>IT IS ONLY <strong>COMPUTER</strong>...anyway, turns out spaces in the file names need to be URL encoded for the image to show up in Obsidian reading mode</figcaption>
</figure>

---
it’s probably a good idea to leave a blank line at the bottom, so I heard.
