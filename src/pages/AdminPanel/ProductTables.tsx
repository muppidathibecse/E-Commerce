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

const ProductTables = ({ data }: any) => {
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
