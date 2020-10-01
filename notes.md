## [Git Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
To add submodules
```
git submodule add <git url use for clone>
git commit -m 'new submodule added'  # write your own message
```

`vue-todo` and `vuex-todo` are actually another git repo so I can use it to deploy on heroku  
If this tutorial is cloned, `vue-todo` and `vuex-todo` folder will be empty because we need to initial and update submodules  
Run these two commands which will clone the submodules
```
git submodule init
git submodule update
```
