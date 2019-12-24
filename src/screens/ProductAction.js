import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { addProducts, updateProducts } from "../store/products/actionCreator";
const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0)
  },
  total: {
    fontWeight: "700"
  },
  title: {
    marginTop: theme.spacing(2)
  }
}));

const ProductAction = props => {
  const classes = useStyles();

  const { history, addProducts, updateProducts } = props;
  const { data, index, type } = history.location.state;
  const routeTo = (routeName, props) => {
    history.push(routeName, props);
  };
  const handleAddClick = (event, path, props) => {
    event.preventDefault();
    routeTo(path, props);
  };
  const handleBackClick = (event, path, props) => {
    event.preventDefault();
    routeTo(path, props);
  };
  const [productDetails, setProductsDetails] = useState({
    name: "",
    description: "",
    price: ""
  });

  useEffect(() => {
    if (type == "E") {
      setProductsDetails(data);
    }
  }, [data]);

  const handleChange = e => {
    setProductsDetails({
      ...productDetails,
      [e.target.name]: e.target.value
    });
  };

  const updateProduct = e => {
    e.preventDefault();
    if (type == "E") {
      updateProducts(productDetails, index).then(() => {
        console.log("updated");
        handleBackClick(e, "/productlist", {});
      });
    } else {
      addProducts(productDetails).then(() => {
        console.log("updated");
        handleBackClick(e, "/productlist", {});
      });
    }
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Product Action
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            name="name"
            value={productDetails.name}
            onChange={e => handleChange(e)}
            label="Product Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="description"
            value={productDetails.description}
            onChange={e => handleChange(e)}
            label="Description"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            name="price"
            value={productDetails.price}
            label="Price"
            onChange={e => handleChange(e)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} style={{ textAlign: "right" }} sm={12}>
          <Button
            variant="contained"
            style={{ marginRight: 10 }}
            onClick={e => updateProduct(e)}
          >
            {type == "E" ? "Update" : "Add"} Product
          </Button>
          <Button
            variant="contained"
            style={{ marginRight: 10 }}
            onClick={e => handleBackClick(e, "/productlist", {})}
          >
            Back
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
const mapStateToProps = state => ({
  productsData: state.products.products
});
const mapDispatchToProps = {
  addProducts,
  updateProducts
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductAction);
