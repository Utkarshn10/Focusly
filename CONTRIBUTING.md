# Contributing Guidelines  

This documentation contains a set of guidelines to help you during the contribution process.

**No Contribution is small. Every contribution counts**

# How to contribute 👩‍💻👨‍💻

## Find an issue

- Take a look at the existing issues or create you own issues.
- If you want to work on an issue and someone else is not working on it, comment that you would like to contribute to it. 

## Fork the Project

- Fork this Repository. This will create a Local Copy of this Repository on your Github Profile. Keep a reference to the original project in remote upstream.

```
$ git clone https://github.com/<your-username>/Focusly.git
$ cd <repo-name>  
$ git remote add upstream https://github.com/Utkarshn10/Focusly
```

- Update your forked repo before working.

```
$ git remote update  
$ git checkout <branch-name>  
$ git rebase upstream/<branch-name>  
```

## Branch name

- Create a new branch. Name the branch same as the issue you are working on.

```
# It will create a new branch with name Branch_Name and will switch to that branch 
$ git checkout -b branch_name  
```

## Work on the assigned issue

- Work on the assigned issue(s)
- Add the files/folder needed

```
# To add all new files to branch Branch_Name  
$ git add .  

# To add only a few files to Branch_Name
$ git add <some files>
```


## Commit the changes

- Commit the changes made

```
# This message get associated with all files you have changed  
$ git commit -m "message"  
```

## Pull Request

- Go to your repository in the browser and click on compare and pull requests. Then add a title and description to your pull request that explains your contribution.
- Create a Pull Request by clicking on the "Create pull request" button

## Translations

Ukrainian Language / Українська мова: [link](https://github.com/Utkarshn10/Focusly/blob/master/CONTRIBUTING.ukrainian.md)




