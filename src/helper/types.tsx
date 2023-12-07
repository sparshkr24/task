import { Dispatch, SetStateAction } from 'react';

export interface postDataType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface deptDataType {
  department: string;
  sub_departments: string[];
}

export interface SubDeptCheckType extends Array<Array<boolean>> {}

export type DeptCheckType = boolean[];

// Explicitly define the type for setDeptCheckState
export const changeDept = (
    deptCheckState: DeptCheckType,
    setDeptCheckState: Dispatch<SetStateAction<DeptCheckType>>,
    index: number,
    value: boolean
  ) => {
    const updatedDeptCheckState = [...deptCheckState];
    updatedDeptCheckState[index] = value;
    setDeptCheckState(updatedDeptCheckState);
  }