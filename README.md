// Set
git config --global user.name ""
git config --global user.email ""

// Get
git config --global user.name
git config --global user.email 

git init
git add . (filename)
git status
git commit -m "first commit"
git log

git branch
git branch -v
git branch newBranch
git checkout anotherBranch
git merge mergeThisIntoABCBRanch
git log branch1..branch2

git stash
git stash save <name>
git stash list
git stash pop
git stash apply stashname

git push
git fetch
git merge
git pull
git remote -v
git remote show origin

git remote add repoName repoLink

// Connect local repo with new github repo
git remote add origin repo_link
git push -u origin master

// Push new branches
git branch branch_name
git checkout branch_name
git push -u origin branch_name

git remote add upstream https://github.com/octocat/Spoon-Knife.git
git remote show upstream

// Delete branch locally
git branch -d name

// Delete branch on origin too
git branch -dr name

// Delete branch on server too
git push origin --delete branchName

// Rollback the changes by letting know that it reverted  becuase it creates new commit
git revert first7CharsofCommitHash

// Remove Commits as they were never there lol
git reset --hard first7CharsOfCommitHash

// Remove commits but keep those changes locally
git reset --keep first7CharsOfCommitHash

git push -f 

// Rebase
git rebase branchName

Markdown language
Heading:
#
##
###
####
#####
######

Quote text
> Text

Quote code
`git status`
```
code
```

Link:
[Github Page](LINK)

Unordered List:
- item
- item

Ordered list:
1. Item1
2. Item2

Nested:
- first
  - fw
    - fwfw
 
Task Lists:
- [x] finished
- [ ] needs to be done

[For further Markup Language Info]: (https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

