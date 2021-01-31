import React, { useEffect, useState } from "react";
import "./index.css";
import { Typography } from "@material-ui/core";
import useStyles from "./style.js";
import NewsCards from "./components/NewsCards/newsCards";
import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from "words-to-numbers";

//Api key put here.
const alankey =
  "Your API key";
const App = () => {
  const classes = useStyles();
  const [newArticles, setArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(0);

  useEffect(() => {
    alanBtn({
      key: alankey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle(prevActiveArticle => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText("Please try that again...");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening...");
          } else {
            alanBtn().playText("Please try that again...");
          }
        }
      }
    });
  }, []);
  return (
    <div>
      <div className={classes.logoContainer}>
        {newArticles.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}>
              <Typography variant="h5" component="h2">
                Try saying: <br />
                <br />
                Open article number [4]
              </Typography>
            </div>
            <div className={classes.card}>
              <Typography variant="h5" component="h2">
                Try saying: <br />
                <br />
                Go back
              </Typography>
            </div>
          </div>
        ) : (
          <h1>Your AI news reader</h1>
        )}

        <img
          src="https://i.ibb.co/f9fRBZf/robotic-5714849-960-720-removebg-preview.png"
          className={classes.alanlogo}
          alt="logo"
        />
      </div>
      <NewsCards articles={newArticles} activeArticle={activeArticle} />
    </div>
  );
};

export default App;
