import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductTables = ({ data }: any) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ p: 3, backgroundColor: "#F5EEDD" }}>
      {data.map((category: any) => (
        <Box key={category.id} sx={{ mb: 5 }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
            {category.productName}
          </Typography>

          <Paper elevation={3}>
            <Table>
              <TableHead sx={{ backgroundColor: "#06202b" }}>
                <TableRow>
                  <TableCell sx={{ width: "30%", color: "#F5EEDD" }}>
                    Name
                  </TableCell>
                  <TableCell sx={{ width: "10%", color: "#F5EEDD" }}>
                    Image
                  </TableCell>
                  <TableCell sx={{ width: "10%", color: "#F5EEDD" }}>
                    Reviews
                  </TableCell>
                  <TableCell
                    sx={{ width: "10%", textAlign: "center", color: "#F5EEDD" }}
                  >
                    Stars
                  </TableCell>
                  <TableCell
                    sx={{ width: "10%", textAlign: "center", color: "#F5EEDD" }}
                  >
                    New Price
                  </TableCell>
                  <TableCell
                    sx={{ width: "10%", textAlign: "center", color: "#F5EEDD" }}
                  >
                    Old Price
                  </TableCell>
                  <TableCell
                    sx={{ width: "10%", textAlign: "center", color: "#F5EEDD" }}
                  >
                    Color
                  </TableCell>
                  <TableCell
                    sx={{ width: "10%", textAlign: "center", color: "#F5EEDD" }}
                  >
                    Size
                  </TableCell>
                  <TableCell
                    sx={{ width: "10%", textAlign: "center", color: "#F5EEDD" }}
                  >
                    Edit
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {category.data.map((item: any) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.cardName}</TableCell>

                    <TableCell>
                      <img src={item.cardImage} alt="" width={50} height={50} />
                    </TableCell>

                    <TableCell>{item.cardReview}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {item.noOfStar}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      ₹{item.newRs}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      ₹{item.oldRs}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {item.defaultColorName}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {item.defaultSize}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      <button
                        onClick={() => {
                          navigate("/add-product", {
                            state: {
                              item,
                              productName: category.productName,
                              mode: "edit",
                            },
                          });
                        }}
                      >
                        Eidt
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Box>
      ))}
    </Box>
  );
};

export default ProductTables;
