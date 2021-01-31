import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    padding: "3%",
    borderRadius: 10,
    color: "white",
    backgroundColor: "rgba(21, 101, 192)",
    margin: "0 12px",
    textAlign: "center",
    height: "25vmin",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      textAlign: "center",
      width: "100%",
      height: "initial",
      "&:nth-of-type(1)": {
        marginBottom: "12px"
      }
    }
  },

  logoContainer: {
    display: "flex",
    justifyContent: "space-around",

    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      textAlign: "center"
    }
  },
  alanLogo: {
    height: "auto",
    width: "100%",
    borderRadius: "15%",
    padding: "0 5%",
    margin: "3% 0",
    [theme.breakpoints.down("sm")]: {
      height: "35vmin"
    }
  }
}));
