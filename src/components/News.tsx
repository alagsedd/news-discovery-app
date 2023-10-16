import { useContext, useState } from "react";
import NewsCard from "../cards/NewsCard";
import GetNews from "../services/getNews";
import styles from "../styles/News.module.css";
import { Button } from "@mui/material";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import ButtonGroup from "@mui/material/ButtonGroup";
import SelectContext from "../contexts/SelectSortContext";
import NavBarSearchContext from "../contexts/NavBarSearchContext";
import { Link } from "react-router-dom";

const News = () => {
  const pageSize = 5;
  const [page, setPage] = useState(1);
  const { sortBy } = useContext(SelectContext);
  const { search } = useContext(NavBarSearchContext);
  const {
    data: news,
    error,
    isLoading,
  } = GetNews({ page, pageSize, sortBy, search });

  console.log(news);
  console.log(search, "<<Search submitted");
  if (isLoading) return <p>Loading</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <>
      <main className={styles.main}>
        {news.articles.map((item, index) => (
          <Link
            className={styles.link}
            key={index}
            to={`/news-detail/${item.source.id}`}
          >
            <NewsCard
              image={item.urlToImage}
              publishedAT={item.publishedAt}
              title={item.title}
              key={item.source.id}
            />
          </Link>
        ))}
      </main>
      <ButtonGroup
        sx={{ mt: 2, ml: 2 }}
        disableElevation
        variant="contained"
        aria-label="Disabled elevation buttons"
      >
        <Button
          onClick={() => setPage(page - 1)}
          size={"small"}
          startIcon={<FcPrevious />}
          variant="contained"
          color="warning"
        >
          Previous
        </Button>
        <Button
          onClick={() => setPage(page + 1)}
          sx={{ ml: 1 }}
          size={"small"}
          endIcon={<FcNext />}
          variant="contained"
          color="secondary"
        >
          Next{" "}
        </Button>
      </ButtonGroup>
    </>
  );
};

export default News;
