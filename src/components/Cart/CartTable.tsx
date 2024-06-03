import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { CardTablePropsType, } from "../../types";
import CartItem from "./CartItem";

const CartTable = ({ data, onStockError }: CardTablePropsType) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Stock</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              cartItem={cartItem}
              onStockError={onStockError}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartTable;
