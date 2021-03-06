/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function Notifications() {
  const classes = useStyles();
  const [tl, setTL] = React.useState(false);
  const [tc, setTC] = React.useState(false);
  const [tr, setTR] = React.useState(false);
  const [bl, setBL] = React.useState(false);
  const [bc, setBC] = React.useState(false);
  const [br, setBR] = React.useState(false);
  React.useEffect(() => {
    return function cleanup() {
      var id = window.setTimeout(null, 0);
      while (id--) {
        window.clearTimeout(id);
      }
    };
  });
  
  return (
    <Card>
      <CardBody>
        <GridContainer>
          {/* <GridItem xs={12} sm={12} md={12}>
            <h5>Notifications States</h5>
            <br />
            <SnackbarContent
              message={
                'INFO - This is a regular notification made with color="info"'
              }
              close
              color="info"
            />
            <SnackbarContent
              message={
                'SUCCESS - This is a regular notification made with color="success"'
              }
              close
              color="success"
            />
            <SnackbarContent
              message={
                'WARNING - This is a regular notification made with color="warning"'
              }
              close
              color="warning"
            />
            <SnackbarContent
              message={
                'DANGER - This is a regular notification made with color="danger"'
              }
              close
              color="danger"
            />
            <SnackbarContent
              message={
                'PRIMARY - This is a regular notification made with color="primary"'
              }
              close
              color="primary"
            />
          </GridItem> */}
        </GridContainer>
        
      </CardBody>
    </Card>
  );
}
