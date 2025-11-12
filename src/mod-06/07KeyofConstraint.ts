// keyof : type operator

type Richpeoplevehicle = {
  car: string;
  bike: string;
  cng: string;
};

// type MyVehicle1 = "bike " | 'car' | 'cng';
type MyVehicle2 = keyof Richpeoplevehicle;

const myVehicle: MyVehicle2 = "bike";

// 2

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

const user: User = {
  id: 12,
  name: "akash",
  address: {
    city: "khulna",
  },
};

const student = {
    name : 'raihan'
}

const getPropertyFromObj = <X>( obj : X, key : keyof X   ) => {
    return obj[key]
}

const result = getPropertyFromObj(student , "name")
console.log(result)
