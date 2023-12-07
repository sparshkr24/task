import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Accordian from "../Components/Accordian";

interface postDataType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const columns: GridColDef[] = [
  { field: "userId", headerName: "User Id", width: 90 },
  {
    field: "id",
    headerName: "Id",
    width: 90,
    editable: true,
  },
  {
    field: "title",
    headerName: "Title",
    width: 500,
    editable: true,
  },
  {
    field: "body",
    headerName: "Body",
    width: 710,
    editable: true,
  },
];

const Page2 = () => {
  const navigate = useNavigate();
  const [postData, setPostData] = useState<postDataType[]>([]);

  useEffect(() => {
    const userDetails = localStorage.getItem("userDetails");
    if (!userDetails) {
      // No details found, redirect to Page 1
      navigate("/page1");
    }
  }, [navigate]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      // console.log("res: ", res.data);

      setPostData(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Page 2</h1>
      <Box sx={{ width: "100%" }}>
        <DataGrid
          rows={postData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5, 10, 20]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
      <br />
      <Box sx={{padding: "12px"}}>
        <Accordian />
      </Box>
    </div>
  );
};

export default Page2;
