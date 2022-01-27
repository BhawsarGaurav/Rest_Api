const EMP = require("../DB/emp_schema");

const getData = async () => {
  let employyes = await EMP.find();
  return employyes;
};
const addData = async (data) => {
  console.log(data);
  await EMP.create(
    {
      email: data.email,
      userName: data.userName,
      firstName: data.firstName,
      password: data.password,
      lastName: data.lastName,
    },
    (err) => {
      if (err) {
        return err;
      } else {
        return "epm added";
      }
    }
  );
};

const updateEmp = async (data) => {
  await EMP.updateOne(
    { email: data.email },
    {
      $set: { userName: data.userName },
    },
    (err) => {
      if (err) {
        return err;
      } else {
        return "emp updated";
      }
    }
  );
};

const deleteEmp = async (data) => {
  await EMP.deleteOne({ email: data.email }, (err) => {
    if (err) {
      return err;
    } else {
      return "emp deleted";
    }
  });
};

module.exports = { deleteEmp, updateEmp, addData, getData };
