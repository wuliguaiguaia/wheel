# z-wheel

# commit 规范
- fix
- feat
- build
- pub
- style
- docs


备用 scripts:
```
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "test": "npm run build test/**/* --no-minify --no-cache && karma start --single-run",
    "test:watch": "npm run build test/**/* --no-cache & karma start",
    "link": "npx parcel build index.js", //
    "openHub": "git open", // 打开github网页
    "newCom": "node build/bin/new.js" // 新增组件 “npm run new test 测试组件”
```


