---
draft: false
published: 2025-11-22
modified:
  - 2026-02-26T09:41:36+07:00
  - 2026-01-26T17:07:05+07:00
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
    git checkout main
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

## Multi-account Git config essentials 

a.k.a. what I do when setting up multiple git accounts on a new OS

1. generate an ssh key for each account following [this GitHub tutorial](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent). give it a name that represents the associated account, not just ”id_ed25519“
2. create ssh config file:

    ```ssh-config title="~/.ssh/config"
    # study
    Host study.github.com
        Hostname github.com
        PreferredAuthentications publickey
        IdentityFile ~/.ssh/id_ed25519-study
    # play
    Host play.github.com
        Hostname github.com
        PreferredAuthentications publickey
        IdentityFile ~/.ssh/id_ed25519-play
	```

3. create folder for each account, create separate config files for each account

    ```properties title="~/.gitconfig-study"    
    [user]
      name = student
      email = student@users.noreply.github.com
      signingkey = ~/.ssh/id_ed25519-study.pub
    [url "git@study.github.com"]
      insteadOf = git@github.com
    ```  
      
    ```properties title="~/.gitconfig-play"
    [user]
      name = fun
      email = fun@users.noreply.github.com
      signingkey = ~/.ssh/id_ed25519-play.pub
    [url "git@play.github.com"]
      insteadOf = git@github.com
    ```

4. assign  each config to its respective directory

    ```properties title="~/.gitconfig"
    [includeIf "gitdir:~/study/"]
      path = ~/.gitconfig-study
    [includeIf "gitdir:~/play/"]
      path = ~/.gitconfig-play
    [gpg]
      format = ssh
    [init]
      defaultBranch = main
    [core]
      editor = code --wait
      autocrlf = input
    [pull]
      rebase = true
    ```
