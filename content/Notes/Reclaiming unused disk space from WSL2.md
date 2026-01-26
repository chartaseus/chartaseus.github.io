---
draft: false
published: 2025-12-28
modified:
  - 2025-12-30T07:58:45+07:00
  - 2025-12-28T15:02:58+07:00
  - 2025-11-26T15:42:55+07:00
title: Reclaiming unused disk space from WSL2
description:
permalink:
tags:
  - wsl
publish: false
---
A few days ago I opened File Explorer and saw that my C: drive only have about 17 GB storage left. I found my virtual disk used by WSL2 has used 22GB of space. But when I ran `df -h /{:sh}` in WSL, it only used 11GB. So there was a mysterious 11GB of memory neither used by WSL nor given back to Windows.

I consulted StackOverflow and [this is the best answer](https://superuser.com/a/1612289) that summarizes all alternatives available to try from many sources, including [the long-standing issue](https://github.com/microsoft/WSL/issues/4699) on WSL’s Github repo.

These are procedures that work for me:
1. Locate `ext4.vhdx`
	Paste `%USERPROFILE%\AppData\Local\Packages\CanonicalGroupLimited.UbuntuonWindows_79rhkp1fndgsc\LocalState\` to File Explorer address bar. (In my case, I’ve migrated it to another folder.)
2. Run `df -h /{:sh}` in WSL terminal. If there’s a large discrepancy between the size of `ext4.vhdx` and the actual used space in WSL, it needs to be manually reclaimed because it doesn’t shrink automatically. I did `diskpart` but it made no difference until I finally found the better solution.
3. Fist clean up WSL storage:
	1. remove `.cache` and `/tmp`
	2. remove repos you no longer use or at least delete their `node_modules`
4. Now the key step: fill the unused spaces with zeroes
	```bash
	dd if=/dev/zero of=~/zeroes
	```

	This process can take hours.
5. Run `sudo sync{:sh}` then remove the zeroes `rm ~/zeroes{:sh}`
6. not sure what `sudo fstrim /{:sh}` do, but I run it last time
7. Now back to administrator command prompt and run `diskpart` 
	```shell
	wsl --shutdown
	diskpart # open window Diskpart
	select vdisk file="C:\WSL-Distros\…\ext4.vhdx"
	attach vdisk readonly
	compact vdisk
	detach vdisk
	exit # exit diskpart
	```
	([Source](https://github.com/microsoft/WSL/issues/4699#issuecomment-627133168))

That’s it. Now the size of the `ext4.vhdx` file should have shrunk to the actual volume used by WSL2.