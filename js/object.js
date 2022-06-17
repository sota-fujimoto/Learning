let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

let multiplyNumeric = (object) => {
    for (element in object) {
        if (typeof object[element] == "number"){
            object[element] *= 2;
        }
    };
}

// 呼び出し前
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  console.log(menu)
  multiplyNumeric(menu);
  console.log(menu)

  // 呼び出し後
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };


  