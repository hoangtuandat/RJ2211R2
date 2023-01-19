import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import "./style.css";

const Hook = () => {
  const [title, setTitle] = useState(["ID","Tên Học sinh", "Tuổi", "Địa chỉ","",""]);
  const [newId, setNewId] = useState("");
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [edittingRow, setEdittingRow] = useState("");
  const [student, setStudent] = useState([
    { id: "1", name: "Tuấn Đạt", age: 30, address: "Hưng Yên" },
    { id: "2",name: "Tuấn Anh", age: 25, address: "Yên Bái" },
    { id: "3",name: "Đức Anh", age: 35, address: "Hà Nội" },
  ]);

  const onClickAddStudent = () => {
    let studentCopy = [...student];
    studentCopy.push({
        id: newId,
        name: newName,
        age: newAge,
        address: newAddress,
    });
    setStudent(studentCopy);
    setNewId("");
    setNewName("");
    setNewAge("");
    setNewAddress("")
  };
  const onChangeNewId = (event) => {
    setNewId(event.target.value);
  };
  const onChangeNewName = (event) => {
    setNewName(event.target.value);
  };
  const onChangeNewAge = (event) => {
    setNewAge(event.target.value);
  };
  const onChangeNewAddress = (event) => {
    setNewAddress(event.target.value);
  };
  const onClickSaveStudent = () => {
    let index = student.findIndex(item => item.id === edittingRow)
    let studentCopy = [...student];
    studentCopy[index] = {
        id: newId,
        name: newName,
        age: newAge,
        address: newAddress,
    }
    setStudent(studentCopy);
    setNewId("");
    setNewName("");
    setNewAge("");
    setNewAddress("")

  };
  const onPressEdittingRow = (event) => {
    setNewId(event.id);
    setNewName(event.name);
    setNewAge(event.age);
    setNewAddress(event.address);
    setEdittingRow(event.id);
  }
  const onPressDelete = (id) => {
    let studentCopy = [...student];
    let index = student.findIndex(item => item.id === id)
    studentCopy.splice(index,1)
    setStudent(studentCopy);

  }

  return (
    <div className="table">
        <input name="id" placeholder="Nhập ID" onChange={onChangeNewId} value={newId} disabled={edittingRow}/>
        <input name="name" placeholder="Nhập tên" onChange={onChangeNewName} value={newName}/>
        <input name="age" placeholder="Nhập tuổi" onChange={onChangeNewAge} value={newAge}/>
        <input
        name="address"
        value={newAddress}
        placeholder="Nhập địa chỉ"
        onChange={onChangeNewAddress}
      />
      {
        edittingRow ?
        <button onClick={onClickSaveStudent}>Save</button>
        :
        <button onClick={onClickAddStudent}>Add</button>
      }
      
      <table>
        <tr>
          <th>
            {title.map((item) => {
              return <th key={item}>{item}</th>;
            })}
          </th>
        </tr>
        <tr>
          {student.map((item) => {
            return (
              <tr key={item.id}>

                <td key={item.id}>{item.id}</td>
                <td key={item.id}>{item.name}</td>
                <td key={item.id}>{item.age}</td>
                <td key={item.id}>{item.address}</td>
                <td key={item.id}><button onClick={(event) => onPressEdittingRow(item)}>Edit</button></td>
                <td key={item.id}><button onClick={() => onPressDelete(item.id)}>Delete</button></td>
              </tr>
            );
          })}
        </tr>
      </table>
    </div>
  );
};
export default Hook;
