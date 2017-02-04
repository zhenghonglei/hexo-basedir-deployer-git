# hexo-basedir-deployer-git

[![Build Status](https://travis-ci.org/zhenghonglei/hexo-basedir-deployer-git.svg?branch=master)](https://travis-ci.org/zhenghonglei/hexo-basedir-deployer-git) [![NPM version](https://badge.fury.io/js/hexo-basedir-deployer-git.svg)](https://www.npmjs.com/package/hexo-basedir-deployer-git) [![Coverage Status](https://img.shields.io/coveralls/hexojs/hexo-basedir-deployer-git.svg)](https://coveralls.io/r/hexojs/hexo-basedir-deployer-git?branch=master) [![Build status](https://ci.appveyor.com/api/projects/status/liqy4nib33ht70so/branch/master?svg=true)](https://ci.appveyor.com/project/tommy351/hexo-basedir-deployer-git/branch/master)

Git deployer plugin for [Hexo base folder].

## Installation

``` bash
$ npm install hexo-basedir-deployer-git --save
```

## Options

You can configure this plugin in `_config.yml`.

``` yaml
# You can use this:
deploy:
  type: basedir-git
  repo: <repository url>
  branch: [branch]
  message: [message]
  name: [git user]
  email: [git email]
  ignore_hidden: false # default is true
  ignore_pattern: [ignore regex]

# or this:
deploy:
  type: basedir-git
  message: [message]
  repo:
    github: <repository url>,[branch]
    gitcafe: <repository url>,[branch]
  ignore_hidden: false # default is true
  ignore_pattern: [ignore regex]
```

- **repo**: Repository URL
- **branch**: Git branch to deploy the static site to
- **message**: Commit message. The default commit message is `Site updated: {{ now('YYYY-MM-DD HH:mm:ss') }}`.
- **name** and **email**: User info for committing the change, overrides global config. This info is independent of git login.
- **ignore_hidden** (Boolean): whether ignore hidden files to publish. the github requires the `.nojekyll` in root.
- **ignore_pattern**: ignore pattern regex

## How it works

`hexo-basedir-deployer-git` works by generating the site in `.basedir_git` and *force pushing* to the repo(es) in config.
If `.basedir_git` does not exist, a repo will initialized (`git init`).
Otherwise the curent repo (with its commit history) will be used.

Users can clone the deployed repo to `.basedir_git` to keep the commit history.
```
git clone <gh-pages repo> .basedir_git
```

## Reset

Remove `.basedir_git` folder.

``` bash
$ rm -rf .basedir_git
```

## License

MIT

[Hexo]: http://hexo.io/
