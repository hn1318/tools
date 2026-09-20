# Git Cheat Sheet

Git is a distributed version-control system used to track changes to files and coordinate work among multiple people. Below is a quick reference of the most common Git commands used in daily development.

## Global configuration

Set the user name and email used for commits

```shell
git config --global user.name "[name]"
git config --global user.email "[email]"
```

Set the default branch name to `main` (Git 2.28+)

```shell
git config --global init.defaultBranch main
```

Let Git use colors in its output

```shell
git config --global color.ui auto
```

Set the default editor (e.g. VS Code)

```shell
git config --global core.editor "code --wait"
```

Show all global configuration

```shell
git config --global --list
```

## Initialize & clone

Initialize a new local repository

```shell
git init
```

Clone an existing remote repository

```shell
git clone [repository-url]
```

Clone into a specific directory

```shell
git clone [repository-url] [directory]
```

Clone a specific branch

```shell
git clone -b [branch-name] [repository-url]
```

## Status & diff

Show the state of the working tree and the staging area

```shell
git status
```

Show status in short format

```shell
git status -s
```

Show all changes (staged and unstaged)

```shell
git diff
```

Show unstaged changes only

```shell
git diff
```

Show staged changes that will be committed

```shell
git diff --cached
```

Show the difference between two commits

```shell
git diff [commit1] [commit2]
```

## Staging & committing

Stage a specific file

```shell
git add [filename]
```

Stage all changes (new files, modifications, deletions)

```shell
git add .
```

Stage changes to all tracked files (excluding new files)

```shell
git add -u
```

Interactive staging

```shell
git add -p
```

Commit staged changes

```shell
git commit -m "[message]"
```

Stage all tracked files and commit in one step

```shell
git commit -am "[message]"
```

Amend the message of the last commit

```shell
git commit --amend
```

Add new changes to the last commit without changing its message

```shell
git commit --amend --no-edit
```

## Branches

List local branches

```shell
git branch
```

List all branches (including remotes)

```shell
git branch -a
```

Create a new branch

```shell
git branch [branch-name]
```

Switch to a branch

```shell
git switch [branch-name]
```

Create and switch to a new branch

```shell
git switch -c [branch-name]
```

Delete a local branch

```shell
git branch -d [branch-name]
```

Force-delete an unmerged branch

```shell
git branch -D [branch-name]
```

Rename local `master` to `main`

```shell
git branch -m master main
```

## Merge & rebase

Merge a branch into the current branch

```shell
git merge [branch-name]
```

Rebase: move the current branch's commits after the target branch

```shell
git rebase [branch-name]
```

Interactive rebase (rewrite the last N commits)

```shell
git rebase -i HEAD~[N]
```

Continue after resolving conflicts during a rebase

```shell
git rebase --continue
```

Abort a rebase

```shell
git rebase --abort
```

## Undo & reset

Discard changes in a working-tree file (use with care, changes are lost)

```shell
git checkout -- [filename]
```

Unstage a file but keep the changes

```shell
git restore --staged [filename]
```

Undo the last commit but keep working-tree changes

```shell
git reset HEAD~1
```

Undo the last N commits but keep working-tree changes

```shell
git reset HEAD~[N]
```

Undo the last commit and discard all changes

```shell
git reset HEAD~1 --hard
```

Hard-reset a branch to match the remote state

```shell
git fetch origin
git reset --hard origin/[branch-name]
```

Revert a commit but keep history (creates a reverse commit)

```shell
git revert [commit-hash]
```

## Stash

Temporarily save uncommitted changes

```shell
git stash
```

Save with a message

```shell
git stash push -m "[message]"
```

List all stash entries

```shell
git stash list
```

Restore and remove the most recent stash

```shell
git stash pop
```

Apply a specific stash entry

```shell
git stash apply stash@{[index]}
```

Delete the most recent stash entry

```shell
git stash drop
```

## Remote

Show configured remotes

```shell
git remote -v
```

Add a remote

```shell
git remote add origin [repository-url]
```

Fetch and merge from the remote

```shell
git pull
```

Fetch only (update local remote branches without merging)

```shell
git fetch
```

Push to the remote branch

```shell
git push
```

Push and set the upstream branch (first push)

```shell
git push -u origin [branch-name]
```

Force-push (overwrites remote history, use with care)

```shell
git push --force-with-lease
```

## Tags

List all tags

```shell
git tag
```

Create a lightweight tag

```shell
git tag [tag-name]
```

Create an annotated tag with a message

```shell
git tag -a [tag-name] -m "[message]"
```

Push a specific tag

```shell
git push origin [tag-name]
```

Push all tags

```shell
git push --tags
```

Delete a local tag

```shell
git tag -d [tag-name]
```

## Log & history

Show commit history

```shell
git log
```

Show history in one line per commit

```shell
git log --oneline
```

Show the change history of a file

```shell
git log -- [filename]
```

Show the detailed changes of a commit

```shell
git show [commit-hash]
```

Show who last modified each line (blame)

```shell
git blame [filename]
```

## Other useful commands

Clean up local refs of deleted remote branches

```shell
git remote prune origin
```

Change the author of the last commit

```shell
git commit --amend --author="[name] <[email]>"
```

List branches not yet merged into the current branch

```shell
git branch --no-merged
```

Set aliases for common commands

```shell
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.st status
git config --global alias.cm commit
```
