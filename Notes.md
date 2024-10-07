# React

### 资料区

mdn: https://developer.mozilla.org/en-US/

cdn库：https://bootcdn.cn

### React Features / React 的特点：

**React**: An open-source JavaScript library for rendering data into HTML views, primarily used for building user interfaces. It enables the creation of reusable UI components and efficiently updates the view when data changes.

**React**：一个用于将数据渲染为 HTML 视图的开源 JavaScript 库，主要用于构建用户界面。它支持创建可重用的 UI 组件，并高效更新视图以响应数据变化。

1. **Component-based structure and declarative coding**: This increases development efficiency and component reusability.
   - **采用组件化模式、声明式编码**：提高开发效率及组件复用率。
2. **Mobile development with React Native**: React syntax can be used in React Native for mobile app development.
   - **在 React Native 中可以使用 React 语法进行移动端开发**。
3. **Virtual DOM and optimized Diffing algorithm**: Minimizes interactions with the real DOM to improve performance.
   - **使用虚拟 DOM + 优秀的 Diffing 算法**，通过对比虚拟DOM，尽量减少与真实 DOM 的交互。最小化页面重绘。
   - 不总是直接操作真实DOM



## 章节一：React面向组件编程

### 基础知识

#### **React的四个拓展包**

```html
<!-- Import React Core Library -->
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<!-- Import React-DOM for DOM operation -->
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<!-- Import babel for transfering jsx to js -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<!-- Import prop-types for prop type checking -->
<script src="https://unpkg.com/prop-types/prop-types.js"></script>
```



#### **JSON**

- parse: 将一个 JSON 格式的字符串解析（转换）成 JavaScript 对象。

  ```javascript
  const jsonString = '{"name": "Alice", "age": 25}';
  const obj = JSON.parse(jsonString);
  // obj.name, obj.age
  ```

- stringfy: 将一个 JavaScript 对象或值转换为 JSON 格式的字符串。

  ```javascript
  const obj = { name: "Alice", age: 25, isStudent: false };
  const jsonString = JSON.stringify(obj);
  console.log(jsonString); 
  // 输出: {"name":"Alice","age":25,"isStudent":false}
  ```



#### **虚拟DOM**

- 虚拟DOM本质是一个Object类型的对象

- 虚拟DOM“轻”，真实DOM“重”，虚拟DOM只有React在用，没有真实DOM的那么多属性
- 虚拟DOM最终会被React转化为真实DOM，呈现在页面上



#### **jsx语法规则**

- 定义虚拟DOM时，不要写引号。
- 标签中混入JS表达式的时候用{}。
  - JS表达式：表达式产生一个值，可以放在任何一个需要值的地方
    - a
    - a+b
    - arr.map()
    - function test(){}
  - JS语句（代码）
    - if(){}
    - for(){}
    - switch(){}
- 标签的类名指定不要用class，要用className。
- 內联样式，要用style={{key:'value'}}的形式去写。
- 只有一个根标签
- 标签必须闭合
- 标签首字母
  - 若小写字母开头，则将该标签转为html中同名元素，若html中无改标签对应的同名元素，则报错。
  - 若大写字母开头，react就去渲染对应的组建，若组件没有定义，则报错。



#### **模块**

- 理解：向外提供特定功能的js程序，一般就是一个js文件。
- 为什么要拆成膜快：随着业务逻辑增加，代码越来越多且复杂。
- 作用：复用js，简化js的编写，提高js运行效率。
- 模块化：应用的js都以模块来编写，称之为模块化的应用



### **组件**

- 理解：用来实现局部功能效果的代码和资源的集合（HTML/CSS/JS...）。
- 为什么：一个界面的功能更复杂
- 作用：复用编码，简化项目编码，提高运行效率
- 组件化：应用是以多组件的方式实现，称之为组件化的应用



#### **函数式组件**

```jsx
//1.创建函数式组件
function myComponent(){
  return <h2>我是用函数定义的组件（适用于【简单组件】的定义）</h2>
}
//2.渲染组件到页面
ReactDOM.render(<myComponent/>, document.getElementById('id'));

/*
1.React解析组件标签，找到自定义函数式组件。
2.调用该函数，将返回的虚拟DOM转换为真实DOM，随后呈现在页面中。
*/
```



#### **类式组件**

```jsx
//1.创建类式组件
class myComponent extends React.Component{
  //render(): 放在myComponent的原型对象上供实例使用
  //this: myComponent组件实例对象
  render(){
    return (<h2>我是用类定义的组件（适用于【复杂组件】的定义）</h2>)
  }
}
//2.渲染组件到页面
ReactDOM.render(<myComponent/>, document.getElementById('id'));

/*
1.React解析组件标签，找到myComponent组件。
2.发现组件是类定义的，随后new出该类的实例，并通过该实例调用原型的render方法。
3.将render返回的虚拟DOM转换为真实DOM，随后呈现在页面中
4.props, refs, state组件的三大属性
*/
```



#### **class复习**

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log(`My name is ${this.name}, I am ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  speak() {
    console.log(
      `My name is ${this.name}, I am ${this.age} years old in Year ${this.grade}.`
    );
  }
}

const s1 = new Student('Yuc', 24, 'Graduated');
s1.speak();

/*
1.类中的构造器不是必须写的，要对实例进行一些初始化操作，如添加指定属性时才写。
2.如果A类继承B类，且A类中写了构造器，那么A类的构造器中的super是必须调用的。
3.类中所定义的方法，都放在了类的原型对象上，供实例去使用。（子类特有的方法会在子类的原型对象上）
*/
```



### **组件实例的三大核心**

- state
- props
- ref

Function Component没有this，没有实例化，没有这三大核心



#### **State**

**定义**: `state` 是组件的“内部数据”，由组件自己维护。

**作用**: `state` 用来保存组件内部的状态信息，可以通过事件或其他操作修改状态，从而更新界面。

**特点**: `state` 是可变的，组件可以通过 `setState` 或 `useState` 来修改它的值。

理解：

1. state的值是一个对象，包含多个key-value的组合。
2. 组件被称为“状态机”，通过更新组件的state来更新对应的页面显示（重新渲染组件）。

**强烈注意：**

1. 组件中的render方法中的this为组件实例对象。

2. 组件自定义的方法中的this为undefined，如何解决？

   - 强制绑定this：通过函数对象的bind()

     ```jsx
     this.changeWeather = this.changeWeather.bind(this);
     ```

   - 赋值语句 + 箭头函数

     ```jsx
     changeWeather = () => {
       this.setState({isHot:!this.state.isHot});
     }
     ```

   - 调用

     ```jsx
     <h1 onClick={this.changeWeather}>Today's weather is {this.state.isHot ? 'hot' : 'cool'}.</h1>
     ```

3. 状态数据不能直接修改或更新，必须使用`set.state()`

   ```jsx
   this.setState({isHot:!this.state.isHot});
   ```

   

#### **Props**

**定义**: `props` 是组件的“外部数据”，由父组件传递给子组件。

**作用**: `props` 用来让组件接收外部的数据，组件不能直接修改这些数据，只能读取和使用。

**特点**: `props` 是不可变的，组件内部不能改变它的值。

1. 关于`...`展开运算符

```jsx
const user = { name: 'John', age: 25 };
const MyComponent = () => {
    return <UserProfile {...user} />;
};

/*
1.这里的{}是说要使用js语法了
2.使用...user 直接展开 user 对象并将它的属性传递给 UserProfile 组件。这是 JSX 的特性。
*/
```

```javascript
const user = { name: 'John', age: 25 };

// 正确的对象展开用法，用一个{}包裹
const newUser = { ...user, location: 'NY' };
console.log(newUser); // { name: 'John', age: 25, location: 'NY' }

// 错误的对象展开方式（会报错）
const result = ...user; // SyntaxError: Unexpected token ...

/*
1.在原生 JavaScript 中，展开对象时需要用 {} 包裹。{...user} 是将 user 对象的所有属性展开到一个新的对象中。
2.如果直接使用 ... 展开对象而不在 {} 中，会导致语法错误。
*/
```



2. 关于classComponent的**propTypes和defaultProps**

```html
<!-- Import prop-types for prop type checking -->
<script src="https://unpkg.com/prop-types/prop-types.js"></script>
```

```jsx
// Example of 	propTypes: define prop types
//							defaultProps: set default value
Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  gender: PropTypes.string,
  speak: PropTypes.func
};
Person.defaultProps = {
  age: 0,
  gender: "N/A"
};

/*
1.如果是类式组件的话，和 static 搭配使用，可以写在 class component 里面。
2.函数式组件是能写在外面。
*/
```



3. 函数组件使用props

```jsx
function Person(props) {
    const {name, age, gender} = props;
    return (
        <>
            <ul>
                <li>Name: {name}</li>
                <li>Age: {age}</li>
                <li>Gender: {gender}</li>
            </ul>
        </>
    )
}
```



#### Refs 与事件处理

##### refs

1. React refs 的使用，有 createRef() 和 回调形式 两种方法使用 ref，字符串形式不被推荐使用

```jsx
class MyRefComponent extends React.Component {
  //1.createRef() 调用后返回一个容器，可以用于储存被 ref 所标识的节点，该容器“专人专用”。
  input1 = React.createRef();
  input2 = React.createRef();
  //2.使用 .current 来获取真实 DOM 元素。
  Display1 = () => {
    const input1 = this.input1.current;     //获取真实DOM但不使用Doument.getElementBy...方法
                                            //.current 指向的是你所引用的实际 DOM 元素。
    alert(input1.value);
  }
  Display2 = () => {
    const input2 = this.input2.current;
    alert(input2.value);
  }
  render() {
    return (
      <>
      <input ref={this.input1} placeholder="Click button alert input" type="text" />
      <button onClick={this.Display1}>Click me to display data on the left </button>
      <input ref={this.input2} onBlur={this.Display2} placeholder="Alter data when blur"/>
      </>
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <MyRefComponent />
  </>
);

/*
1.createRef() 调用后返回一个容器，可以用于储存被 ref 所标识的节点，该容器“专人专用”。
2.使用 this.<REFNAME>.current 来获取真实 DOM 元素。
3.标签中添加属性 ref={this.<REFNAME>}。
*/
```

- `ref` 请勿过度使用



##### event.target事件处理

2. 事件处理

1. 通过 `onXxx` 属性指定事件处理函数（注意大小写）

   - React 使用的是自定义合成事件，而不是使用原生的 DOM 事件 —— 更好的兼容性
   - React中的事件是通过事件委托方式处理的，委托给组件最外层的元素 —— 高效
     - React 通过事件委托将事件绑定到根元素，当子元素触发事件时，事件冒泡到根元素，由根元素根据 `event.target` 确定并执行对应的事件处理函数。

2. 通过 `event.target` 得到发生事件的 DOM 元素对象

   - 发生事件的元素正好是我要操作的元素，就可以省略ref

   ```jsx
   class MyEventComponent extends React.Component {
     Display = (event) => {
       alert(event.target.value);
     }
     render() {
         return (
           <>
           <input onBlur={this.Display} placeholder="Alter data when blur" />
           </>
         )
     }
   }
   
   /*
   1.event 作为参数传进箭头函数
   */
   ```



### 收集表单数据

#### 非受控组件

理解：在 **非受控组件** 中，表单元素的值由 DOM 自己管理，React 不直接控制表单数据。可以使用 `ref` 获取表单的值，而不是通过 React 的 `state` 来控制输入。

In an **uncontrolled component**, the form elements store their own values in the DOM, and React doesn’t manage the form data. 

- 非受控组件：输入类 DOM，值现用现取

```jsx
class UncontrolledComponent extends React.Component {
  username = React.createRef();
  password = React.createRef();
  handleSubmit = () => {
    event.preventDefault();
    alert(`Username: ${this.username.current.value}, Password: ${this.password.current.value}`)
  }
  render() {
      return (
      <form onSubmit={this.handleSubmit}>
          Username: <input ref={this.username} name="username" type="text" />
          Password: <input ref={this.password} name="password" type="text" />
          <button type="submit" >Submit</button>
      </form>
      )
  }
}
```

`event.preventDefault()` : **prevent the default behavior** of an event from occurring.



#### 受控组件

理解：**受控组件**指的是表单元素（如输入框、文本区域等）由组件的 **state**（状态）控制。

A **controlled component** is when the form elements (like input, textarea, etc.) are **controlled by the component's state**.

- 输入类的 DOM 随着值的输入把值维护到状态 state 里面去，用时直接从状态取出来

- 一个 `ref` 都没用，在非受控组件，每一个输入项就需要一个 `ref`。

```jsx
class ControlledComponent extends React.Component {
  //1.使用state现定义state
  state = {
      username: '',
      password: ''
  }
  //2.保存新的值到状态中
  handleUsername = (event) => {
      this.setState({ username: event.target.value })
  }
  //2.保存新的值到状态中
  handlePassword = (event) => {
      this.setState({ password: event.target.value })
  }
  //
  handleSubmit = (event) => {
      event.preventDefault();
      const { username, password } = this.state;
      alert(`Username: ${username}, Password: ${password}`)
  }
  //3.随着输入，把输入值维护到状态中去
  render() {
      return (
          <form onSubmit={this.handleSubmit}>
              Username: <input onChange={this.handleUsername} name="username" type="text" />
              Password: <input onChange={this.handlePassword} name="password" type="text" />
              <button type="submit" >Submit</button>
          </form>
      )
  }
}
```



#### 高阶函数和函数柯里化

- 必须把函数丢给事件处理属性

**高阶函数**

理解：高阶函数是指**可以接收其他函数作为参数，或者返回一个函数作为结果的函数**

```javascript
// 一个高阶函数，接收一个函数作为参数
function higherOrderFunction(fn) {
    return function() {
        console.log('Before executing the function');
        fn();  // 执行传入的函数
        console.log('After executing the function');
    };
}

function sayHello() {
    console.log('Hello, World!');
}

const wrappedFunction = higherOrderFunction(sayHello);
wrappedFunction(); 
```



**函数柯里化**

函数柯里化是指**将一个接受多个参数的函数转换为一系列接受单个参数的函数**。柯里化的函数不会立即执行，它会返回一个函数链，直到所有参数都传递给函数时才会执行

```javascript
// 一个简单的柯里化函数示例
function add(a) {
    return function(b) {
        return a + b;
    };
}
const addFive = add(5);  // 返回一个函数，已经接收了第一个参数5
console.log(addFive(3));  // 输出 8
console.log(add(2)(3));   // 输出 5

/*
解释：add 函数通过柯里化的方式将原来接受两个参数的函数拆分为两个函数。第一次调用时，传入第一个参数并返回一个新的函数。第二次调用时，传入第二个参数并计算结果。
*/
```



### 组件生命周期

#### 基础

React 组件的生命周期分为三个主要阶段：

**挂载阶段（Mounting）**

这是组件第一次被渲染到页面时的阶段。以下是挂载阶段中的主要生命周期方法：

**`render()`**：组件初始化渲染，状态更新之后。

**`componentDidMount()`**：组件第一次渲染或挂载完成后调用，可以在这里发起网络请求或与 DOM 进行交互。



**更新阶段（Updating）**

组件的 props 或 state 发生变化时，会进入更新阶段。以下是更新阶段中的主要生命周期方法：

**`render()`**：根据新的状态或 props 重新渲染组件。



**卸载阶段（Unmounting）**

当组件从 DOM 中移除时，会进入卸载阶段。以下是卸载阶段中的主要生命周期方法：

**`componentWillUnmount()`**：组件即将被卸载和销毁之前调用，可以在这里清理定时器、取消网络请求或清理订阅等。

```jsx
<script type="text/babel">
    // Step1: Create Class Component
    class Life extends React.Component {
        //2.设置opacity
        state = { opacity: 1 }
        //3.设置Timer
        //componentDidMount回调时间：组件挂载完毕
        componentDidMount() {
            this.timer = setInterval(() => {
                let { opacity } = this.state;
                opacity = opacity - 0.1;
                if (opacity <= 0) { opacity = 1 };
                this.setState({ opacity });
            }, 200)
        }

        //4.卸载组件
        delete = () => {
            //过时ReactDOM.unmountComponentAtNode(document.getElementById('root'));
            root.unmount();
        }

        //5.关闭定时器
        //componentWilUnmount回调时间：组件将要卸载
        componentWillUnmount() {
            clearInterval(this.timer);
        }

        //1.定义样式
        //render回调时间：组件初始化渲染，状态更新之后
        render() {
            return (
                <>
                    <h1 style={{ opacity: this.state.opacity }}>Opacity is decreasing!!!</h1>
                    <button onClick={this.delete}>Click me to delete everything</button>
                </>
            );
        }
    }

    // Step2: Render Component
    const container = document.getElementById('root');
    const root = ReactDOM.createRoot(container);
    root.render(<Life />);

</script>
```



**Style中的内联写法**

```jsx
style={{ color: 'red' }}
```

- 最外层的大括号：表示插入 JavaScript 表达式。

- 里面表示CSS 样式对象，其中的键值对表示 CSS 属性和对应的值，格式 `{key: value}`。

- 事件处理函数用 `{this.func}`：传递函数引用，不加 `()`，否则会将函数返回值赋给事件处理函数。



**计时器**

- `setInterval()` 是 JavaScript 的内置函数，用于按照指定的时间间隔，重复执行 一个函数或代码片段，直到被手动停止（通过 `clearInterval()`）。

```javascript
setInterval(function, delay);
/*
1.function：要执行的函数或代码片段。
2.delay：以毫秒为单位的时间间隔（1000 毫秒 = 1 秒）。
*/
```

```javascript
const intervalId = setInterval(() => {
  console.log("Repeating every second");
}, 1000);

// 停止 setInterval
clearInterval(intervalId);

/*
1.保存 setInterval() 返回的 ID 以便进行清除。
2.使用 clearInterval(<ID>) 来停止 setInterval()。
*/
```



**3种 setState 的场景**

1. `this.setState({ opacity })`

   - 这种写法等同于 `this.setState({ opacity: opacity })`。

   - 使用场景：当对象的键和值名称相同时的简写方式。
   - ES6 的对象属性简写

2. `this.setState({ [inputType]: event.target.value }`

   - 计算属性名（ES6 特性），让状态键名可以动态计算。
   - 方括号表示，`inputType` 是一个变量，它的值决定了哪个状态属性会被更新。
   - 使用场景：当变量作为键名

3. `this.setState({ name: newName })`

   - 使用场景：明确更新特定属性（直接指定键名）



#### 生命周期函数顺序

```
初始化阶段
1. constructor()
2. componentWillMount() / UNSAFE_componentWillMount()
3. render()
4. componentDidMount()				====> 常用！做一些初始化的事情，例如开启定时器，发送网络请求，请阅消息等

更新阶段：由组件内部 this.setState() 或父组件 render 触发
1. componentWillReceiveProps() / UNSAFE_componentWillReceiveProps() 父组件 render 触发
2. shouldComponentUpdate() 返回 true/false 决定组件是否更新的阀门
3. componentWillUpdate() / UNSAFE_componentWillUpdate()
4. render()
5. componentDidUpdate(preProps, preState, snapshotValue)

卸载阶段：由 ReactDOM.createRoot() 创建的 root 使用 unmount() 触发
1. componentWillUnmount()			====> 常用！做一些收尾的事情，关闭定时器，取消订阅消息
```



新

```jsx
static getDerivedStateFromProps(props, state){...}
/*
此方法适用于 少数罕见用例，其中 state 取决于 props 随着时间的推移的变化。
*/

getSnapshotBeforeUpdate(prevProps, prevState)
/*
滚动条，scrollHeight 和 scrollTop
*/
                                              
初始化阶段
1. constructor()
2. getDerivedStateFromProps
3. render()
4. componentDidMount()				====> 常用！做一些初始化的事情，例如开启定时器，发送网络请求，请阅消息等

更新阶段：由组件内部 this.setState() 或父组件 render 触发
1. getDerivedStateFromProps
2. shouldComponentUpdate() 返回 true/false 决定组件是否更新的阀门
3. render()
4. getSnapshotBeforeUpdate()
5. componentDidUpdate(preProps, preState, snapshotValue)

卸载阶段：由 ReactDOM.createRoot() 创建的 root 使用 unmount() 触发
1. componentWillUnmount()			====> 常用！做一些收尾的事情，关闭定时器，取消订阅消息
```









