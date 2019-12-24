import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { removeProduct } from "../store/products/actionCreator";
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

const ProductDetails = props => {
  const classes = useStyles();

  const { history, addProducts, updateProducts, removeProduct } = props;
  const { data, index, type } = history.location.state;

  const routeTo = (routeName, props) => {
    history.push(routeName, props);
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
    if (type == "V") {
      setProductsDetails(data);
    }
  }, [data]);

  const handleAddClick = (event, path, props) => {
    event.preventDefault();
    routeTo(path, props);
  };

  const handleDelete = e => {
    removeProduct(index);
    handleBackClick(e, "/productlist", {});
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Product summary
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Name: {productDetails.name}
          </Typography>
          <Typography gutterBottom>Price: {productDetails.price}</Typography>
          <Typography gutterBottom>
            Description: {productDetails.description}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button
            variant="contained"
            style={{ marginRight: 10 }}
            onClick={e =>
              handleAddClick(e, "/productaction", {
                data: productDetails,
                index: index,
                type: "E"
              })
            }
          >
            Edit
          </Button>
          <Button
            variant="contained"
            style={{ marginRight: 10 }}
            onClick={e => handleDelete(e)}
          >
            Delete
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
  removeProduct
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
