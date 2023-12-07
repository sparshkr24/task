import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import {
  changeAllSubDept,
  changeDept,
  initializeDept,
  initializeSubDept,
} from "../helper/helper";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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

const subDeptCheck: SubDeptCheckType = initializeSubDept(dept);
const deptCheck: DeptCheckType = initializeDept(dept);

const Accordian = () => {
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

  return (
    <Box>
      {dept.map((item, index) => (
        <div key={item.department}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '8px',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                cursor: 'pointer',
                marginRight: '8px',
              }}
              onClick={() => toggleDepartment(item.department)}
            >
              {selected.includes(item.department) ? '-' : '+'}
            </Typography>
            <Checkbox
              checked={deptCheckState[index]}
              onChange={() => handleDeptCheckbox(index)}
            />
            <Typography variant="body1" sx={{ marginLeft: '8px' }}>
              {item.department}
            </Typography>
          </Box>
          {selected.includes(item.department) && (
            <Box sx={{ marginLeft: '20px' }}>
              {item.sub_departments.map((subDept, idx) => (
                <Box
                  key={idx}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '8px',
                  }}
                >
                  <Checkbox
                    checked={subDeptCheckState[index][idx]}
                    onChange={() => handleSubDeptCheckbox(index, idx)}
                  />
                  <Typography variant="body2" sx={{ marginLeft: '8px' }}>
                    {subDept}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}
        </div>
      ))}
    </Box>
  );
};

export default Accordian;



