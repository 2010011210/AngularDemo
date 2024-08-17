# AngularDemo

# 一.ES6语法新增
~~~
1. let和var的区别
  let不能在定义之前访问该变量，但是var可以。 var的是undefined，let直接报错
let不能被重新定义，但是var是可以的
var是函数作用域，let是块作用域。比如for循环
~~~

2. Promise
~~~
~~~

3. 解构 赋值
~~~
const zhao = {name: "zhangshan", age : 18};
let {name} = zhao;
console.log(name);

~~~

4. 模板字符串
~~~
let address = '上海';
`https://localhost:7193/WeatherForecast?id=${address}`;

// 换行
a = `<ul>
    <li>张三</li>
    <li>李四</li>
    </ul>`
~~~
5. 对象中名字和属性一致，简化为一个
~~~
let name = 'lisi';
const person = {name: name}; // 可以简化为{name}
~~~

6. 箭头函数
~~~
function getName()
{
  console.log("");
}

let getName = () =>{
  console.log("");
}
~~~

7. 扩展运算符 ... 把数组和对象的内容释放
~~~
let arr = ["张三"，"李四", "王五"];
let arr2 = ["赵六"];
let arr3 = [...arr, ...arr2]; //"张三"，"李四", "王五",赵六
~~~

8. class关键字

9. 数值和对象方法扩展

10. 模块化
~~~
export  //导出

import //导入
~~~

# 二. TypeScript
1. 静态类型分析
2. 面向对象
3. 新增语法

4. 类型声明
~~~
let a: number //只能存数据
let a: string //只能存数组， string是小写，不能大写，大写是String对象
~~~

5. 静态类型分析
~~~
// public private private 修饰符
class Emp
{
    public name: string,
    protected age:number,
    private married: boolean,  //布尔类型
    gender: number | string, //混合类型，字符串或者数字
    x:any，
    names: Array<string> // 数组类型，格式是字符串 另外一种写法 string[]
}

// 继承
class Son extends Emp
{
    show()
    {
        this.name;  //父类的字段
        this.age;
    }
}

// interface新的关键字
interface Boos
{
    name: string,
    age:number,
    married: boolean  //布尔类型
}

let boos: Boos
{
    name: "张三",
    age: 16,
    married: true  //布尔类型
}

~~~

# 三 Angular
0. 安装
~~~
如果需要app.module.ts文件，需要这个
ng new angular-tour-of-heroes --no-standalone --routing --ssr=false

最新的直接用 ng new angular-projectName 

~~~
1. 启动项目
~~~
ng serve --open
~~~
2. 安装开放插件
~~~
Angular 8 snippets
Angular Language Service
~~~

3. 自定义指令
~~~
ng g d directiveName

// html中 内容大写
<input type="text" appUpper value="hello">

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

  constructor(e: ElementRef) { 
    e.nativeElement.value = e.nativeElement.value.toUpperCase();
  }
}

~~~

4. 管道，也就是Vue的过滤器
~~~
ng g p pipeName
~~~

5. 子父传参
   5.1 子传父
~~~
父组件调用子组件，子组件标签加上属性。 字符串直接用名称， 变量或者对戏用中括号包起来[]
<app-myc03 name="王聪" [age]="32" [boos]="{name:'wangcong', age: 18, sex:'男'}"></app-myc03>

子组件ts文件 接收变量
// 父传子
  @Input() name: string | undefined;
  @Input()
  age!: number;

  @Input()
  boos!: Boos;

~~~

  5.2 父传子。 通过把父方法传入子组件，子组件接收方法，触发方法
~~~
父组件html
<app-myc03 name="王聪" (msgEvent2)="show($event)" ></app-myc03>

父组件ts
show(v:any)
{
  console.log(v);
}

子组件html
<button (click)="returnToFather()">喜欢东东</button>
<button (click)="msgEvent2.emit('亮亮')">喜欢亮亮</button>

子组件ts
// 子传父
  @Output() msgEvent2 = new EventEmitter();
  returnToFather()
  {
    this.msgEvent2.emit(this.name)
  }

~~~ 

6. 服务，也就是类似Vuex的状态管理   
新建服务文件
~~~
ng g s name

//服务类加数据内容
export class NameService {
  names = ["刘备","关于","张飞"];
  countries = ["魏","蜀","吴"]
  constructor() { }
}

// 使用组件中依赖注入
  nameS:NameService;

  constructor(nameS: NameService){
    this.nameS = nameS;
  }

html中使用
<ul>
    <li *ngFor="let item of nameS.names">{{item}}</li>
</ul>

// 语法糖
constructor(public nameS: NameService){ 

}

// 注入多个服务
constructor(public nameS: NameService, public companyS:CompanyService){  //, companyS:CompanyService
  }

// 多个组件都引用服务中的数据，数据变动，都会联动
~~~

7. 网路请求
~~~
//如何处理跨域
1. 在Angular项目的根目录中创建一个proxy.conf.json文件。在这个JSON配置文件中，你可以定义多个代理规则。比如，要将所有以/api开头的请求都转发到http://localhost:3000服务器上，那么可以这样配置
~~~
