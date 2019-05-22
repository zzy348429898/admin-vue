module.exports = {
  root: true,//此项是用来告诉eslint找当前配置文件不能往父级查找
  env: {
    node: true//此项指定环境的全局变量，下面的配置指定为node环境
  },
  'extends': [
    // "eslint:recommended",
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "quotes": [2, "single"], //单引号
    "no-console": 1,         //警告console
    "no-debugger": 2,        //禁用debugger
    "semi": ['error', 'always'],               //强制使用分号
    "no-control-regex": 2,   // 禁止在正则表达式中使用控制字符 ：new RegExp("\x1f")
    "linebreak-style": ["warn", "windows"], // 强制使用一致的换行风格
    "indent": ["error", 2, { "SwitchCase": 1 }], //空格4个
    "array-bracket-spacing": [2, 'never'], // 指定数组的元素之间要以空格隔开(,后面)
    "brace-style": [2, '1tbs', {'allowSingleLine': true}],  // if while function 后面的{必须与if在同一行，java风格。
    "no-irregular-whitespace": 0, //不规则的空白不允许
    "no-trailing-spaces": 1, //一行结束后面有空格就发出警告
    "eol-last": 0, //文件以单一的换行符结束
    "no-unused-vars": [1, {"vars": "all", "args": "after-used"}], //不能有声明后未被使用的变量或参数
    "no-underscore-dangle": 0, //标识符不能以_开头或结尾
    "no-alert": 2, //禁止使用alert confirm prompt
    "no-lone-blocks": 0, //禁止不必要的嵌套块
    "no-class-assign": 2, //禁止给类赋值
    "no-floating-decimal": 2,  // 禁止数字字面量中使用前导和末尾小数点
    "no-loop-func":1,    // 禁止在循环中出现 function 声明和表达式
    "no-cond-assign": 2, //禁止在条件表达式中使用赋值语句
    "no-delete-var": 2, //不能对var声明的变量使用delete操作符
    "no-dupe-keys": 2, //在创建对象字面量时不允许键重复
    "no-duplicate-case": 2, //switch中的case标签不能重复
    "no-dupe-args": 2, //函数参数不能重复
    "no-empty": 1, //块语句中的内容不能为空
    "no-func-assign": 2, //禁止重复的函数声明
    "no-invalid-this": 0, //禁止无效的this，只能用在构造器，类，对象字面量
    "no-redeclare": 2, //禁止重复声明变量
    "no-spaced-func": 2, //函数调用时 函数名与()之间不能有空格
    "no-this-before-super": 0, //在调用super()之前不能使用this或super
    "no-undef": 1, //不能有未定义的变量
    "no-use-before-define": 2, //未定义前不能使用
    "camelcase": 1, //强制驼峰法命名
    "space-before-function-paren":2,
    "no-undef":2,

    ///vue
    "vue/no-unused-components": 1,
    "space-before-function-paren":0,
    "space-before-blocks": 1
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
