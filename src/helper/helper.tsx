import { Dispatch, SetStateAction } from 'react';

import { DeptCheckType, SubDeptCheckType } from "./types"

export const changeAllSubDept = (subDeptCheckState: SubDeptCheckType, setSubDeptCheckState: Dispatch<SetStateAction<SubDeptCheckType>>, index: number, value: boolean) => {
    const updatedSubDeptCheckState = subDeptCheckState
    updatedSubDeptCheckState[index] = updatedSubDeptCheckState[index].map(() => value)
    setSubDeptCheckState(updatedSubDeptCheckState)
}

export const changeDept = (deptCheckState: DeptCheckType, setDeptCheckState: Dispatch<SetStateAction<DeptCheckType>>, index: number, value: boolean) => {
    const updatedDeptCheckState = deptCheckState
    updatedDeptCheckState[index] = value
    setDeptCheckState(updatedDeptCheckState)
}