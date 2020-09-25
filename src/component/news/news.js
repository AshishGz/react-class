import React, {Component} from 'react';
import axios from "axios";
import NewsCard from "./newsCard";

class News extends Component {

    state={
        news:[],
        isLoading:true
    };
    componentDidMount() {
        let self=this;
        axios.get('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9b017d9c85e140f58bd094de3f1b99d3').then(function (res) {
            self.setState({
                news:res.data.articles,
                isLoading:false
            })
        }).catch(function (error) {

        })
    }

    render() {
        return (
            <div style={{maxWidth:600,margin:'auto',display:'block'}}>
                {this.state.isLoading ? 'Loading..' :
                    <div>
                        {this.state.news.map((news)=>(
                            <NewsCard newsData={news}/>
                        ))}
                    </div>
                }
            </div>
        );
    }
}

export default News;
