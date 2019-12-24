import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { removeProduct } from "../store/products/actionCreator";
import { connect } from "react-redux";
const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const ListDetails = props => {
  const { history, productsData, removeProduct } = props;
  const classes = useStyles();

  const routeTo = (routeName, props) => {
    history.push(routeName, props);
  };
  const handleAddClick = (event, path, props) => {
    event.preventDefault();
    routeTo(path, props);
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, [productsData]);

  const handleDelete = index => {
    removeProduct(index);
  };

  return (
    <>
      <div style={{ marginTop: 10, marginBottom: 10, float: "right" }}>
        <Button
          variant="contained"
          onClick={e =>
            handleAddClick(e, "/productaction", {
              data: {},
              index: "",
              type: "A"
            })
          }
        >
          Add Product
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row, index) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.description}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    size="small"
                    style={{ marginRight: 10 }}
                    onClick={e =>
                      handleAddClick(e, "/productdetails", {
                        data: row,
                        index: index,
                        type: "V"
                      })
                    }
                  >
                    View
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    style={{ marginRight: 10 }}
                    onClick={e =>
                      handleAddClick(e, "/productaction", {
                        data: row,
                        index: index,
                        type: "E"
                      })
                    }
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={e => handleDelete(index)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const mapStateToProps = state => ({
  productsData: state.products.products
});
const mapDispatchToProps = {
  removeProduct
};
export default connect(mapStateToProps, mapDispatchToProps)(ListDetails);
