let nameT = {name: true};

function A() {
    return nameT;
}
function B() {
    return nameT;
}

let a = new A;
let b = new B;

console.log(a);
console.log(b);

console.log(new A() == new B());
console.log( a == b ); 


function Accumulator(value) {
    this.value = value;

    this.read = function(num) {
        this.value += num 
    }
}

let accumulator = new Accumulator(1); // 初期値 1
accumulator.read(4); // ユーザの入力値の加算
accumulator.read(5); // ユーザの入力値の加算
console.log(accumulator.value); // それらの値の合計を表示