module.exports = {
    "extends": [//使用哪些默认规则来检查,由于我们安装了 eslint-config-airbnb 所以直接使用它的规则
        "airbnb",
        "react-app",
    ],
    "parser": "babel-eslint",
    "parserOptions": {
      // ECMAScript 版本
      "ecmaVersion":6,
      "ecmaFeatures": {
      // 允许在全局作用域下使用 return 语句
      "globalReturn":true,
      // impliedStric
      "impliedStrict":true,
      // 启用 JSX
      "jsx":true
       }
       },
    "plugins": ["prettier","jsx-a11y", "import"],
    "env": {
      "browser": true,
      "node": true,
    },
    "globals": {
      "$":true,//这里可以将一些全局变量忽略检查,如果你没有则可以不用配置
    },
    "rules": {
      // 自定义你的规则,https://eslint.bootcss.com/docs/rules/ 可以查找规则
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "no-tabs":"off",
      "no-console":0,
      "no-param-reassign":0,// 不允许对 function 的参数进行重新赋值
    }
};