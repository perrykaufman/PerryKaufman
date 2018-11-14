# Git

## Cheatsheet

### Local Repository

* **Staging**

  `git add .`

  Stage all changed files (new, modified, or deleted).

* **Commit**

  `git commit -a -m "<message>"`

  Commit new changes to the local repository.
  * **-a** option stages modified files (but not new files).
  * **-m** option allows the commit message to be specified.

* **Status**

  `git status`

  Shows the working tree status.

### Remote Repository

* **Push**

  `git push <repository>`

  Push changes to remote repository (defaults to origin)

* **Pull**

  `git pull <repository>`

  Pull changes from remote repository (defaults to origin) and integrate with local repository.

### Branching

* **Switch**

  `git checkout <branch>`

  Switch to another branch.

* **Create**

  `git checkout -b <branch>`

  Create a new branch.
  * **-b** flag creates the branch.

## Resources

* [Git Pro Book](https://git-scm.com/book/en/v2)
* [Git Documentation](https://git-scm.com/docs)
* [Academind Git YouTube Tutorials](https://www.youtube.com/watch?v=_OZVJpLHUaI&list=PL55RiY5tL51poFMpbva1IqfO-pylwSNsN)