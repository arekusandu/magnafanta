function sayHi() {
  console.log("Hi", this);
}

var color = "teal";
let num = 400; //window.num dne

const greet = function () {
  console.log(this);
};

const name = {
  first: "Meyer",
  last: "Lansky",
  nickname: "Accountant",
  fullname() {
    const { first, last, nickname } = this;
    return `${first} ${last} AKA ${nickname}`;
  },
  printBio() {
    const fullname = this.fullname();
    return fullname;
  },
};

const person = {
  first: "Anthony",
  last: "Soprano",
  nickName: "Tony",
  fullName() {
    //console.log(this);
    const { first, last, nickName } = this;
    return `${first} ${last} AKA ${nickName}`;
  },
  printBio() {
    const fullName = this.fullName();
    console.log(`${fullName} is an Italian`);
  },
  arrowFunc: () => {
    console.log(this, this.nickName);
    //this = window, this.nickName = undefined
  },
};

const printBio = person.printBio;
//window

