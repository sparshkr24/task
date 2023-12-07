import { Dispatch, SetStateAction } from "react";

import { DeptCheckType, SubDeptCheckType, deptDataType } from "./types";

//Function to initialize sub departments array to false
export const initializeSubDept = (dept: deptDataType[]) => {
    const subDeptCheck: SubDeptCheckType = [];
    dept.map((item: deptDataType) => {
      const size = item.sub_departments.length;
      const initialArray: boolean[] = new Array(size).fill(false);
      subDeptCheck.push(initialArray);
    });
  
    return subDeptCheck
  };
  
  //Function to initialize Parent departments to false
  export const initializeDept = (dept: deptDataType[]) => {
      const deptCheck: DeptCheckType = new Array(dept.length).fill(false);
      return deptCheck
  }

//Function to make checkbox state = true for all sub-departments if Parent department becomes true
export const changeAllSubDept = (
  subDeptCheckState: SubDeptCheckType,
  setSubDeptCheckState: Dispatch<SetStateAction<SubDeptCheckType>>,
  index: number,
  value: boolean
) => {
  const updatedSubDeptCheckState = subDeptCheckState;
  updatedSubDeptCheckState[index] = updatedSubDeptCheckState[index].map(
    () => value
  );
  setSubDeptCheckState(updatedSubDeptCheckState);
};

//Function to make checkbox state = true for Parent department if all sub-departments becomes true
export const changeDept = (
  deptCheckState: DeptCheckType,
  setDeptCheckState: Dispatch<SetStateAction<DeptCheckType>>,
  index: number,
  value: boolean
) => {
  const updatedDeptCheckState = deptCheckState;
  updatedDeptCheckState[index] = value;
  setDeptCheckState(updatedDeptCheckState);
};


