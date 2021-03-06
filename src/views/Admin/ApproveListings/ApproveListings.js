import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import ChartistGraph from "react-chartist";
import { makeStyles } from "@material-ui/core/styles";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import { useAuth0 } from "@auth0/auth0-react";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import GridContainer from "components/Grid/GridContainer.js";
import Tasks from "components/Tasks/Tasks.js";
import CardBody from "components/Card/CardBody.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import { bugs, website, server } from "variables/general.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { Loading } from "../../../components";
import Listing from "./EditItem";
import { Link } from "react-router-dom";
import classNames from "classnames";
const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  const [items, setData] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;
  const history = useHistory();
  const { user, getAccessTokenSilently } = useAuth0();
  const { email, picture, username, user_id } = user;
  const [currentListing, setCurrentListing] = useState(["A", "B"]);
  const [currentIndex, setIndex] = useState(0);
  const [currentRented, setCurrentRented] = useState(["A", "C"]);
  const [isLoadingTrue, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const token = await getAccessTokenSilently();
        let userid = localStorage.getItem("userid");
        let result = await fetch(`${apiUrl}/api/items/unapproved`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        const res = await result.json();
        console.log(res);
        await setData((previndex) => res);
        setLoading(false)
      } catch {}
    })(items);
  }, [user.sub]);

  if (isLoadingTrue === true) {
    return <Loading />;
  }
  return (
    <GridContainer>
      <Card>
        <CardHeader color="danger">
          <h4 className={classes.cardTitleWhite}>Approve Items</h4>
          <p className={classes.cardCategoryWhite}>
            Items that were requested by Owners to be listed on RentNoww. These items are currently not publicly available.
          </p>
        </CardHeader>
        <CardBody>
          <GridContainer>
            {items.map((item, i) => {
              return (
                <Listing
                  title={item.name}
                  price={item.price}
                  location={item.address.address}
                  state={item.address.state}
                  country={item.address.country}
                  zip={item.address.zip}
                  city={item.address.city}
                  image={item.pictures}
                  brand={item.brand}
                  category={item.category}
                  type={item.type}
                  description={item.description}
                  pictures={item.pictures}
                  id={item.id}
                  googleLink={item.address.google_map_link}
                />
              );
            })}
            {items.length === 0 ? (
              <h5>
                Looks like you have not listed items to rent out, Try doing that
                by clicking on <Link to="/addListing">Add Items to Listing!</Link>
              </h5>
            ) : (
              <></>
            )}
          </GridContainer>
        </CardBody>
      </Card>
    </GridContainer>
  );
}
