# 一个让 vuex 更好的支持 typescript 的解决方案

传统 vuex 编码让人觉得麻烦的一点就是 state、getters、mutation、dispatch 在调用时无法获得编辑器的智能提示，必须切换文件去查找。本以为用上 typescript 后这个问题可以得到解决，却发现并没有...

在找寻了一会儿各种解决方案后，觉得都存在这样或那样的问题，所以便自己尝试着去写下了这么一个解决方案，就结果来说，已经满足了我的需求。

## 效果展示

### 1. state

![avatar](/mdimgs/WX20190618-155234.png)
![avatar](/mdimgs/WX20190618-155250.png)
state 会显示所有的 module、里面的属性及属性的类型

- /src/store/modules/auth.ts
![avatar](/mdimgs/WX20190618-160943.png)

### 2. getters

getter 可以显示值类型
![avatar](/mdimgs/WX20190618-155157.png)

- /src/store/modules/auth.ts
![avatar](/mdimgs/WX20190618-163325.png)

### 3. commit

![avatar](/mdimgs/WX20190618-155037.png)

commit 会显示所有注册的 mutation

- /src/store/modules/auth.ts
![avatar](/mdimgs/WX20190618-155617.png)
- /src/store/modules/user.ts
![avatar](/mdimgs/WX20190618-155631.png)
- /src/store/modules/pageCache.ts
![avatar](/mdimgs/WX20190618-155625.png)

并且调用的 payload 也可以有类型提示
![avatar](/mdimgs/WX20190618-155113.png)
![avatar](/mdimgs/WX20190618-155122.png)

### 4. dispatch

和 commit 类似
![avatar](/mdimgs/WX20190618-155337.png)
![avatar](/mdimgs/WX20190618-155417.png)

- /src/store/modules/auth.ts
![avatar](/mdimgs/WX20190618-163838.png)
