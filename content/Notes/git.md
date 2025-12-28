---
draft: false
published: 2025-11-22
modified:
  - 2025-11-22T21:37:02+07:00
title: Git cheatsheet
description:
permalink:
tags:
  - git
publish: false
---
## Undo pushed merge cos I meant to rebase

1. checkout (detached) the last commit before the merge commit. (I don't know how to do it in bash yet—I use VS Code GUI)
2. create new branch from it
    ```bash
    git checkout -b <new branch name>
    ```
3. checkout my main branch (in this case `v4` not `main` (yes I was fixing this repo—turns out I don't like `npx quartz sync`, I want to commit granularly)) and reset to the last commit I still want to include
    ```bash
    git reset --hard <the commit I want to go back to> # or usually `HEAD~2`
    ```
4. [[#Rebase to `main`|rebase]] the new branch onto the main branch
    ```bash
    git rebase <new branch name>
    ```
5. force push to origin
    ```bash
    git push --force origin v4
    ```

I’m still not sure about the reset in step 3. It might not be generally applicable. Well, I will know more next time this happens.

## Rebase to `main`

```bash
git checkout main
git rebase <new changes branch>
```

I need to write this down because I never remember whether it’s that or the other way around

## Delete local branch

```bash
git branch -D <branch name> # -D means --delete --force
git branch -d <branch name> # will error if branch hasn't been merged
```

## [TODO] Git config essentials
