//function judgeWho(animal: Waiter | Teacher){
//  animal.say() // 会报错
//}
// 进行类型断言
function judgeWho(animal) {
    if (animal.anjiao) {
        animal.skill();
    }
    else {
        animal.say();
    }
}
// 类型保护-in语法
function judgeWhoTwo(animal) {
    if ("skill" in animal) {
        animal.skill();
    }
    else {
        animal.say();
    }
}
// 类型保护-typeof 语法
//function add(first:string|number,second:string|number){
//  return first + second    // 这里会报错 Operator '+' cannot be applied to types 'string | number' and 'string | number'
//}
//修正后的代码如下
function add(first, second) {
    if (typeof first === "string" || typeof second === "string") {
        return "" + first + second;
    }
    return first + second;
}
// 类型保护-instanceof 语法
var NumberObj = /** @class */ (function () {
    function NumberObj() {
    }
    return NumberObj;
}());
//function addObj(first: object| NumberObj, second: object | NumberObj){
//  return first.count + second.count // 报错 Property 'count' does not exist on type 'object | NumberObj'. Property 'count' does not exist on type 'object'.
//}
function addObj(first, second) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count;
    }
    return 0;
}
