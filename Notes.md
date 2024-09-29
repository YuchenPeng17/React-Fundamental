React

mdn: https://developer.mozilla.org/en-US/

1.

**React**: An open-source JavaScript library for rendering data into HTML views, primarily used for building user interfaces. It enables the creation of reusable UI components and efficiently updates the view when data changes.

**React**：一个用于将数据渲染为 HTML 视图的开源 JavaScript 库，主要用于构建用户界面。它支持创建可重用的 UI 组件，并高效更新视图以响应数据变化。



### React Features (React 的特点):

1. **Component-based structure and declarative coding**: This increases development efficiency and component reusability.
   - **采用组件化模式、声明式编码**：提高开发效率及组件复用率。
2. **Mobile development with React Native**: React syntax can be used in React Native for mobile app development.
   - **在 React Native 中可以使用 React 语法进行移动端开发**。
3. **Virtual DOM and optimized Diffing algorithm**: Minimizes interactions with the real DOM to improve performance.
   - **使用虚拟 DOM + 优秀的 Diffing 算法**，通过对比虚拟DOM，尽量减少与真实 DOM 的交互。最小化页面重绘。
   - 不总是直接操作真实DOM



2.

JSX: Javascript XML

react.development

react-dom.development

babel.min.js

JSON

- parse
- stringfy



**虚拟DOM**

- 虚拟DOM本质是一个Object类型的对象

- 虚拟DOM“轻”，真实DOM“重”，虚拟DOM只有React在用，没有真实DOM的那么多属性
- 虚拟DOM最终会被React转化为真实DOM，呈现在页面上



**jsx语法规则：**

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
- 样式？标签的类名指定不要用class，要用className。
- 內联样式，要用style={{key:'value'}}的形式去写。
- 只有一个根标签
- 标签必须闭合
- 标签首字母
  - 若小写字母开头，则将该标签转为html中同名元素，若html中无改标签对应的同名元素，则报错。
  - 若大写字母开头，react就去渲染对应的组建，若组件没有定义，则报错。



**模块：**

- 理解：向外提供特定功能的js程序，一般就是一个js文件。
- 为什么要拆成膜快：随着业务逻辑增加，代码越来越多且复杂。
- 作用：复用js，简化js的编写，提高js运行效率。
- 模块化：应用的js都以模块来编写，称之为模块化的应用

**组件:**

- 理解：用来实现局部功能效果的代码和资源的集合（HTML/CSS/JS...）。
- 为什么：一个界面的功能更复杂
- 作用：复用编码，简化项目编码，提高运行效率
- 组件化：应用是以多组件的方式实现，称之为组件化的应用



**函数式组件：**

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



**类式组件：**

```jsx
//1.创建类式组件
class myComponent extends React.Component{
  //render(): 放在myComponent的原型对象上供实例使用
  //this: myComponent组件实例对象
  render(){
    return <h2>我是用类定义的组件（适用于【复杂组件】的定义）</h2>
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



**class复习：**

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



**组件实例的三大核心**

- state
- props
- ref

Function Component没有this，没有实例化，没有这三大核心



**State**

理解：

1. state的值是一个对象，包含多个key-value的组合。
2. 组件被称为“状态机”，通过更新组件的state来更新对应的页面显示（重新渲染组件）。

强烈注意：

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

3. 状态数据不能直接修改或更新，必须使用`set.state()`

   ```jsx
   this.setState({isHot:!this.state.isHot});
   ```

   

**Props**

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
```



3. 

   - props中的属性是read-only

     ```jsx
     //Error
     this.props.name = "jack";
     ```

     

