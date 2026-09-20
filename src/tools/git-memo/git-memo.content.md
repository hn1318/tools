# Git 备忘录

Git 是一个分布式版本控制系统，用于跟踪文件的改动并协调多人协作开发。下面整理了日常开发中最常用的 Git 命令速查表。

## 全局配置

设置提交时使用的用户名和邮箱

```shell
git config --global user.name "[姓名]"
git config --global user.email "[邮箱]"
```

设置默认分支名称为 main（Git 2.28+）

```shell
git config --global init.defaultBranch main
```

让 Git 在输出中使用彩色

```shell
git config --global color.ui auto
```

设置默认编辑器（如 VS Code）

```shell
git config --global core.editor "code --wait"
```

查看所有全局配置

```shell
git config --global --list
```

## 初始化与克隆

初始化一个新的本地仓库

```shell
git init
```

克隆一个已存在的远程仓库

```shell
git clone [仓库地址]
```

克隆到指定目录

```shell
git clone [仓库地址] [目录名]
```

克隆指定分支

```shell
git clone -b [分支名] [仓库地址]
```

## 查看状态与差异

查看工作区与暂存区的状态

```shell
git status
```

以简洁方式显示状态（短格式）

```shell
git status -s
```

查看已暂存与未暂存的所有改动

```shell
git diff
```

查看尚未暂存的改动

```shell
git diff
```

查看已暂存、即将提交的改动

```shell
git diff --cached
```

查看两个提交之间的差异

```shell
git diff [提交1] [提交2]
```

## 暂存与提交

暂存指定文件

```shell
git add [文件名]
```

暂存所有改动（新文件、修改、删除）

```shell
git add .
```

暂存所有已跟踪文件的改动（不含新文件）

```shell
git add -u
```

交互式暂存

```shell
git add -p
```

提交已暂存的改动

```shell
git commit -m "[提交说明]"
```

暂存所有已跟踪文件并直接提交

```shell
git commit -am "[提交说明]"
```

修改最后一次提交的信息

```shell
git commit --amend
```

将新的改动追加到最后一次提交（不修改提交信息）

```shell
git commit --amend --no-edit
```

## 分支操作

查看本地分支

```shell
git branch
```

查看所有分支（含远程）

```shell
git branch -a
```

创建新分支

```shell
git branch [分支名]
```

切换到指定分支

```shell
git switch [分支名]
```

创建并切换到新分支

```shell
git switch -c [分支名]
```

删除本地分支

```shell
git branch -d [分支名]
```

强制删除未合并的分支

```shell
git branch -D [分支名]
```

将本地 master 分支重命名为 main

```shell
git branch -m master main
```

## 合并与变基

将指定分支合并到当前分支

```shell
git merge [分支名]
```

变基：把当前分支的提交挪到目标分支之后

```shell
git rebase [分支名]
```

交互式变基（修改最近 N 个提交的历史）

```shell
git rebase -i HEAD~[N]
```

在变基遇到冲突后继续

```shell
git rebase --continue
```

中止一次变基

```shell
git rebase --abort
```

## 撤销与回退

撤销对工作区文件的修改（慎用，会丢失改动）

```shell
git checkout -- [文件名]
```

将文件从暂存区撤出，保留改动

```shell
git restore --staged [文件名]
```

撤销最近一次提交，但保留工作区改动

```shell
git reset HEAD~1
```

撤销最近 N 次提交，保留工作区改动

```shell
git reset HEAD~[N]
```

撤销最近一次提交，并丢弃所有改动

```shell
git reset HEAD~1 --hard
```

将分支强制重置为远程状态

```shell
git fetch origin
git reset --hard origin/[分支名]
```

撤销某次提交，但保留历史（生成反向提交）

```shell
git revert [提交哈希]
```

## 暂存工作区（Stash）

临时保存未完成的改动

```shell
git stash
```

保存并添加说明

```shell
git stash push -m "[说明]"
```

查看所有暂存记录

```shell
git stash list
```

恢复最近一次暂存的改动

```shell
git stash pop
```

恢复指定暂存记录

```shell
git stash apply stash@{[序号]}
```

删除最近一次暂存记录

```shell
git stash drop
```

## 远程仓库

查看已配置的远程仓库

```shell
git remote -v
```

添加远程仓库

```shell
git remote add origin [仓库地址]
```

从远程拉取并合并

```shell
git pull
```

从远程拉取但不合并（仅更新本地远程分支）

```shell
git fetch
```

推送到远程分支

```shell
git push
```

推送并设置上游分支（首次推送）

```shell
git push -u origin [分支名]
```

强制推送（会覆盖远程历史，慎用）

```shell
git push --force-with-lease
```

## 标签（Tag）

查看所有标签

```shell
git tag
```

创建轻量标签

```shell
git tag [标签名]
```

创建带说明的附注标签

```shell
git tag -a [标签名] -m "[说明]"
```

推送指定标签

```shell
git push origin [标签名]
```

推送所有标签

```shell
git push --tags
```

删除本地标签

```shell
git tag -d [标签名]
```

## 日志与历史

查看提交历史

```shell
git log
```

以一行的方式查看历史

```shell
git log --oneline
```

查看某个文件的改动历史

```shell
git log -- [文件名]
```

查看某次提交的详细改动

```shell
git show [提交哈希]
```

查看谁修改了某一行（ blame）

```shell
git blame [文件名]
```

## 其它实用命令

清理已删除远程分支的本地缓存

```shell
git remote prune origin
```

修改最近一次提交的作者信息

```shell
git commit --amend --author="[姓名] <[邮箱]>"
```

查看所有尚未合并到当前分支的分支

```shell
git branch --no-merged
```

为常用命令设置别名

```shell
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.st status
git config --global alias.cm commit
```
