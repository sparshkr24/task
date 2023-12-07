import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

interface deptDataType {
  department: string;
  sub_departments: string[];
}

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
  const [selected, setSelected] = useState<string[]>([]);
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const toggleDepartment = (department: string) => {
    const isDepartmentSelected = selected.includes(department);
    const updatedSelected = isDepartmentSelected
      ? selected.filter((dept) => dept !== department)
      : [...selected, department];

    setSelected(updatedSelected);
  };

  return (
    <div>
      {dept.map((item) => (
        <div key={item.department}>
          <div>
            <span onClick={() => toggleDepartment(item.department)}>
              {selected.includes(item.department) ? " -" : " +"}
            </span>
            <Checkbox checked={checked} onChange={handleChange} />
            <span> {item.department}</span>
          </div>
          {selected.includes(item.department) && (
            <div>
              {item.sub_departments.map((subDept, index) => (
                <div key={index}>
                  <Checkbox checked={checked} onChange={handleChange} />
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
