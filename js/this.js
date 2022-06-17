function makeUser() {
    return {
      name: "John",
      ref() {
        return this;
      }
    };
  };
  
  let user = makeUser();
  
  console.log( user.ref().name ); // John

  let calculator = {
    read() {
        this.a = 2;
        this.b = 5;
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
  };
  
  calculator.read();
  console.log( calculator.sum() );
  console.log( calculator.mul() );