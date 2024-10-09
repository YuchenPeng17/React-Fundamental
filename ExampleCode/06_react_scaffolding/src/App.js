import React from 'react'
import Hello from './components/Hello/Hello'
import Welcome from './components/Welcome/Welcome'
/*
import React, {Component} from 'react'
- 在 react文件中 中使用了多种暴露方式，此处并不是结构复赋值
*/
const {Component} = React
// 创建“外壳”组件
export default class App extends Component {
  render(){
    return(
      <>
        <Hello/>
        <Welcome/>
      </>
    )
  }
}

// export default App;