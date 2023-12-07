import axios from "axios";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { postDataType } from "../helper/types";

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

const Table = () => {
  const [postData, setPostData] = useState<postDataType[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      // console.log("res: ", res.data);

      setPostData(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <>
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
    </>
  );
};

export default Table;
