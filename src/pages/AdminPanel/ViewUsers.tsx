import { useEffect, useState } from "react";
import { getAllUsers, removeUser } from "../../services/produtServices";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { BackButton, Container } from "./addProductStyles";
import { useNavigate } from "react-router-dom";
import { Section } from "./viewUserStyles";

const ViewUsers = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<any[]>([]);

  const handleDelte = async (id: string) => {
    await removeUser(id);
    fetchUsers();
  };

  const fetchUsers = async () => {
    try {
      const res = await getAllUsers();
      setUsers(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Section>
      <Container style={{ backgroundColor: "#F5EEDD" }}>
        <Typography
          variant="h5"
          sx={{
            color: "#06202b",
            margin: 0,
            padding: 0,
            fontSize: "25px",
            fontWeight: 600,
          }}
        >
          Users List
        </Typography>
        <BackButton
          onClick={() => {
            navigate(-1);
          }}
        >
          ← Back
        </BackButton>
      </Container>
      {users.length == 0 ? (
        <Box sx={{backgroundColor:'#06202b', color:'white', width:'fit-content', padding:'50px 160px', borderRadius:'10px', justifySelf:'center',marginTop:'100px'}}>
          <Typography variant="h5">No Users</Typography>
        </Box>
      ) : (
        <Box sx={{ p: 3, backgroundColor: "#F5EEDD" }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#06202b" }}>
              <TableRow>
                <TableCell sx={{ color: "#F5EEDD" }}>No</TableCell>
                <TableCell sx={{ color: "#F5EEDD" }}>User Name</TableCell>
                <TableCell sx={{ color: "#F5EEDD" }}>Password</TableCell>
                <TableCell sx={{ color: "#F5EEDD" }}>Options</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {users.map((user, index) => (
                <TableRow key={user.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.password}</TableCell>
                  <TableCell>
                    <button
                      style={{
                        backgroundColor: "#06202b",
                        color: "white",
                        padding: "8px 9px",
                        cursor: "pointer",
                        border: "none",
                        borderRadius: "8px",
                      }}
                      onClick={() => handleDelte(user.id)}
                    >
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      )}
    </Section>
  );
};

export default ViewUsers;
