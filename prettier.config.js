module.exports={
    //简单配置几个常用的格式化方案
    tabWidth: 2,//1个tab用2个空格代替
    useTabs: false,
    printWidth: 120,
    semi:true,//末尾必须有分号
    singleQuote:true,//使用单引号包裹字符串
    jsxSingleQuote:true, //jsx内也使用单引号包裹字符串
    //其他规则可以在https://prettier.io/docs/en/options.html查询
    trailingComma: 'none', // 最后一个对象元素加逗号
    bracketSpacing: true, // 对象，数组加空格
    jsxBracketSameLine: false, // jsx > 是否另起一行
    arrowParens: 'avoid', // (x) => {} 是否要有小括号
    requirePragma: false, // 是否要注释来决定是否格式化代码
    proseWrap: 'preserve' // 是否要换行
  };