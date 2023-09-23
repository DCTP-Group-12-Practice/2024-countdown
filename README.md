# 2024 Countdown Timer

<a href="https://github.com/DCTP-Group-12-Practice/2024-countdown/stargazers"><img src="https://img.shields.io/github/stars/DCTP-Group-12-Practice/2024-countdown" alt="Stars Badge"/></a>
<a href="https://github.com/DCTP-Group-12-Practice/2024-countdown/network/members"><img src="https://img.shields.io/github/forks/DCTP-Group-12-Practice/2024-countdown" alt="Forks Badge"/></a>
<a href="https://github.com/DCTP-Group-12-Practice/2024-countdown/pulls"><img src="https://img.shields.io/github/issues-pr/DCTP-Group-12-Practice/2024-countdown" alt="Pull Requests Badge"/></a>

<a href="https://github.com/DCTP-Group-12-Practice/2024-countdown/issues"><img src="https://img.shields.io/github/issues/DCTP-Group-12-Practice/2024-countdown" alt="Issues Badge"/></a>
<a href="https://github.com/DCTP-Group-12-Practice/2024-countdown/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/DCTP-Group-12-Practice/2024-countdown?color=2b9348"></a>

The aim of this project is to help my team members and me get a good grasp on how to collaborate and make contributions on projects using GitHub. The following steps below will help you get started on how to make contributions on this project.

## Fork the Repository

Fork the repository by clicking on the fork button as indicated in the below image. it will create a copy of the repository in your GitHub account

![Screenshot of GitHub repository with the link to fork highlighted](https://i.ibb.co/6s5CFz4/forked.png)

## Clone the Repository

Cloning will create a copy of the repository on your local machine (PC)

Go to your GitHub account and open your forked copy of this project repository, click on the code button and the n click on the copy icon to get therepository url as shown in the image below

![Screenshot of GitHub repository with the link to fork highlighted](https://i.ibb.co/b7p0X16/clone.png)

Now open your terminal and run  the `git clone` command like so:

```sh
git clone https://github.com/El-Jakes/2024-countdown.git
```

Replace my username `El-Jakes` with your own username

## Create a Branch

Navigate into the project repository directory on your terminal. you can navigate using the below example:

```sh
cd 2024-countdown
```

Create a reference to the main project repository by running the `git remote add upstream command` as seen below:

```sh
git remote add upstream https://github.com/DCTP-Group-12-Practice/2024-countdown.git
```

Now create a branch that will keep track/record ofthe changes you make by running the `git branch command`

e.g

```sh
git branch branch-jakes
```

then switch to your newly created branch using the `git checkout` command like so:

```sh
git checkout branch-jakes
```

## Make Changes and Commit your Changes

Open a file you want to work on and make your changes e.g `index.html`. save your changes

Run the `git status` command to see the changes that have been made and the file that the change was made. see example below

![Screenshot of GitHub repository with the link to fork highlighted](https://i.ibb.co/r4WgvLd/git-Status.png)

Run the  `git add` command to add your changes to the staging area like so

```sh
git add index.html
```

Now run the `git commit` command and add your commit message to commit your changes

```sh
git commit -m 'add call to action button to homepage'
```

## Push Changes to GitHub

You have made all your changes and commit, now it's time to push your changes to GitHub. We will do this by running the `git push` command as we will see below

```sh
git push origin -u <branch-name>
```

Note that the branch above is the branch you created
e.g

```sh
git push origin -u branch-jakes
```

## Create a Pull Request





