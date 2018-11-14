# Git

## Cheatsheet

Work in progress.

### Local Repository

* **Stage**

  `git add <file>`

  Stage specified files.
  * If a **period(.)** is specified, all changes are staged.

* **Unstage**

  `git reset HEAD <file>`

  Unstage specified files.

* **Unmodify**

  `git checkout -- <file>`

  Reset a file to the previous commit.

* **Commit**

  `git commit -a -m "<message>"`

  Commit new changes to the local repository.
  * **-a** stages modified files (but not new files).
  * **-m** allows the commit message to be specified.

* **Amend Commit**

  `git commit --amend`

  Add staged changes to previous commit.

* **Undo Commit(s)**

  `git reset --hard <commit>`

  Resets working tree, index, and head to specified commit.

* **Status**

  `git status`

  Shows the working tree status.

* **Commit History**

  `git log`

  Shows commit history.

### Branching

* **Show**

  `git branch -v`

  Lists all branchs.
  * **-v** shows last commit for each branch.

* **Create**

  `git branch <branch>`

  Create a new branch.

* **Create and Checkout**

  `git checkout -b <branch>`

  Create a and switch to a new branch.
  * **-b** specifies branch creation.

* **Checkout**

  `git checkout <branch>`

  Swtich to a specified branch.

* **Delete**

  `git branch -d <branch>`

  Delete specified branch.
  * Will only delete if work has been merged.

* **Merge**

  `git merge <branch>`

  Merge a specified branch current branch.
  * In the event of a **merge conflict**, each conflict should be resolved and then the file staged. When all files are staged, a commit will finalize the merge.

### Remote Repository

* **Clone**

  `git clone <url>`

  Create a copy of a remote repository.

* **Show**

  `git remote -v`

  Shows existing remote repositories.
  * **-v** shows remote urls.

* **Fetch**

  `git fetch <remote>`

  Fetchs new data from remote repository to local repository.

* **Pull**

  `git pull <repository> <branch>`

  Fetch remote repository and merge with local branch.
  * The repository and branch default to origin and master respectively.

* **Push**

  `git push <repository> <branch>`

  Push changes to remote repository.
  * The repository and branch default to origin and master respectively.

## Resources

* [Git Pro Book](https://git-scm.com/book/en/v2)
* [Git Documentation](https://git-scm.com/docs)
* [Academind Git YouTube Tutorials](https://www.youtube.com/watch?v=_OZVJpLHUaI&list=PL55RiY5tL51poFMpbva1IqfO-pylwSNsN)