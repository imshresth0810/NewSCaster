import React, { useEffect } from 'react'
import altimg from './altimg.jpg'
import Aos from 'aos';
// import "bower_components/aos/dist/aos.css";

const NewsItem = (props) => {
    let { title, disc, iurl, nurl, author, time, source } = props;
    useEffect(() => {
        Aos.init({ duration: 1000, easing: 'ease-in-quad', });
    }, []);


    return (
        <div className="card flip-left" data-aos="flip-left">
            <div>
                <span className="badge rounded-pill bg-danger" style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    {source}
                </span>
            </div>
            <img className="card-img-top" src={iurl ? iurl : altimg} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{disc}...</p>
                <p className="card-text"><small className="text-muted">By <b>{author}</b> on <b>{new Date(time).toGMTString()}</b></small></p>
                <a href={nurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div >
    )
}

export default NewsItem
