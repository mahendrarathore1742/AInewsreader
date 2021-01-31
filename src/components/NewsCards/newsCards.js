import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { Grid, Grow, Typography } from "@material-ui/core";
import useStyle from "./style.js";
import "./style.css";
const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyle();

  const infoCards = [
    {
      color: "linear-gradient(to right, #348f50, #56b4d3)",
      title: "Latest News",
      text: "Give me the latest news"
    },
    {
      color: "linear-gradient(to right, #d31027, #ea384d)",
      title: "News by Categories",
      info:
        "Business, Entertainment, General, Health, Science, Sports, Technology",
      text: "Give me the latest Technology news"
    },
    {
      color: "linear-gradient(to right, #c31432, #240b36)",
      title: "News by Terms",
      info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
      text: "What's up with PlayStation 5"
    },
    {
      color: "#283593",
      title: "News by Sources",
      info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
      text: "Give me the news from CNN"
    }
  ];

  if (!articles.length) {
    return (
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map(infoCard => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{ background: infoCard.color }}
              >
                <Typography variant="h5" component="h5">
                  {infoCard.title}
                </Typography>
                {infoCard.info ? (
                  <Typography variant="h6" component="h6">
                    <strong>{infoCard.title.split(" ")[2]}</strong>: <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant="h6" component="h6">
                  Try saying: <br /> <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
              <NewsCard article={article} activeArticle={activeArticle} i={i} />
            </Grid>
          );
        })}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
