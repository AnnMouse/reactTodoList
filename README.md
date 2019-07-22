### 代码目录简介
- serviceWorker.js 用于WPA，即断网以后用户仍可访问之前缓存的页面
- manifest.json 用于访问页面中的图标的配置
- favicon.ico 访问页面路径中的图标
- App.test.js 用于页面自动化测试
- jsx中组件名称开头必须大写
- Fragment，占位符，将组件中最外层div隐藏掉

### react中的响应式设计思想和事件绑定
- react中的immutable概念：性能角度考虑，修改state中数据一般需要先拷贝一份出来，再用setstate复制。
- 注意jsx中的注释，花括号内注释
- htmlFor="insertArea"，设置光标聚焦的位置
- react面向数据开发，声明式开发，减少dom操作，提高页面相应效率。
- react可与其他框架并存，例如jquery
- react单向数据流，父组件可向子组件传值，但子组件不能直接修改父组件。props的只读属性。
- react是视图层框架，只解决数据与页面渲染问题，其他数据层问题由其他架构完成。
- react函数式编程，维护方便，自动化测试方便。

### react高级内容
- 使用propTypes对接收的属性做强校验
- 使用defaultProps在没有传值的情况下，可以使用默认值。默认值的类型必须与propTypes的类型一致


# 以上内容来自：www.dell-lee.com