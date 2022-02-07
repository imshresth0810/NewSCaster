import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [tres, setTres] = useState(0);
    document.title = `NewsCaster - ${(props.category).charAt(0).toUpperCase() + (props.category).slice(1)}`;
    const updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=77d847fb6a1b417f95b48e986b69dab4&page=${page}&pageSize=${props.pageS}`;
        setLoading(true);
        let data = await fetch(url);
        let pdata = await data.json();
        setArticles(pdata.articles)
        setTres(pdata.totalResults)
        setLoading(false)
    }
    useEffect(() => {
        updateNews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const fetchMoreData = async () => {
        setPage(page + 1);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=77d847fb6a1b417f95b48e986b69dab4&page=${page}&pageSize=${props.pageS}`;
        let data = await fetch(url);
        let pdata = await data.json();
        setArticles(articles.concat(pdata.articles))
        setTres(pdata.totalResults)
    }
    return (
        <div className="container mb-3" >
            <h1 className="text-center" style={{ marginTop: "60px" }}> NewsCaster - {(props.category).charAt(0).toUpperCase() + (props.category).slice(1)} Top Headlines </h1>
            {loading && <Spinner />}
            <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== tres} loader={<Spinner />}>
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4 my-2" key={element.url} >
                                <NewsItem title={element.title ? element.title : ""} author={element.author ? element.author : "Gaurav Shresth"} disc={element.description ? element.description.slice(0, 95) : ""} iurl={element.urlToImage} nurl={element.url} time={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    )
}
News.defaultProps = {
    country: "in",
    category: "technology",
    pageS: 5
}
News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageS: PropTypes.number

}
export default News
