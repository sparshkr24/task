import { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import { changeAllSubDept, changeDept } from "../helper/helper";
import { DeptCheckType, SubDeptCheckType, deptDataType } from "../helper/types";

const dept: deptDataType[] = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
];

const Accordian = () => {
  const subDeptCheck: SubDeptCheckType = [];
  dept.map((item) => {
    const size = item.sub_departments.length;
    const initialArray: boolean[] = new Array(size).fill(false);
    subDeptCheck.push(initialArray);
  });

  const deptCheck: DeptCheckType = new Array(subDeptCheck.length).fill(false);

  const [selected, setSelected] = useState<string[]>([]);
  const [deptCheckState, setDeptCheckState] = useState<DeptCheckType>(deptCheck);
  const [subDeptCheckState, setSubDeptCheckState] = useState<SubDeptCheckType>(subDeptCheck);

  const handleDeptCheckbox = (index: number) => {
    setDeptCheckState((prevDeptCheckState) => {
      const updatedDeptCheckState = [...prevDeptCheckState];
      updatedDeptCheckState[index] = !updatedDeptCheckState[index];

      if (updatedDeptCheckState[index] === true) {
        changeAllSubDept(subDeptCheckState, setSubDeptCheckState, index, true);
      } else {
        changeAllSubDept(subDeptCheckState, setSubDeptCheckState, index, false);
      }
      return updatedDeptCheckState;
    });
  };

  const handleSubDeptCheckbox = (index: number, idx: number) => {
    setSubDeptCheckState((prevSubDeptCheckState) => {
      const updatedSubDeptCheckState = [...prevSubDeptCheckState];
      updatedSubDeptCheckState[index][idx] =
        !updatedSubDeptCheckState[index][idx];
      const allTrue = !updatedSubDeptCheckState[index].includes(false);
      if (allTrue) {
        changeDept(deptCheckState, setDeptCheckState, index, true);
      } else {
        changeDept(deptCheckState, setDeptCheckState, index, false);
      }
      return updatedSubDeptCheckState;
    });
  };

  const toggleDepartment = (department: string) => {
    const isDepartmentSelected = selected.includes(department);
    const updatedSelected = isDepartmentSelected
      ? selected.filter((dept) => dept !== department)
      : [...selected, department];

    setSelected(updatedSelected);
  };

  useEffect(() => {
    console.log("dept: ", deptCheckState);
    console.log("subDept: ", subDeptCheckState);
  }, [deptCheckState, subDeptCheckState]);

  return (
    <div>
      {dept.map((item, index) => (
        <div key={item.department}>
          <div>
            <span onClick={() => toggleDepartment(item.department)}>
              {selected.includes(item.department) ? " -" : " +"}
            </span>
            <Checkbox
              checked={deptCheckState[index]}
              onChange={() => handleDeptCheckbox(index)}
            />
            <span> {item.department}</span>
          </div>
          {selected.includes(item.department) && (
            <div>
              {item.sub_departments.map((subDept, idx) => (
                <div key={idx}>
                  <Checkbox
                    checked={subDeptCheckState[index][idx]}
                    onChange={() => handleSubDeptCheckbox(index, idx)}
                  />
                  <span>{subDept}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordian;
