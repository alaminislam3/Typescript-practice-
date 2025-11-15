//  type guard
//  in  typeof

type Both = string | number;

const add = (num1: Both, num2: Both) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
};
const first = add(2, 4);
const secound = add("2", 4);
console.log(first, secound);
add("4", 6);

/* 2 in */

type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "admin";
};

const checkUser = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`THis ${user.name} is ${user.role}`);
  } else {
    console.log(`this ${user.name} is good person`);
  }
};
checkUser({name : "sakib", role: 'admin'})