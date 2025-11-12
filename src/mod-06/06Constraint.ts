// constraint " strict rules"

type MandatoryInfo = {
  id: string;
  name: string;
};

const addStudent = <T extends MandatoryInfo>(studentInfo: T) => {
  return {
    course: "next level",
    ...studentInfo,
  };
};

const student1 = {
  id: "1",
  name: "bappi",
  class: 10,
};

const result = addStudent(student1);
console.log(result);
