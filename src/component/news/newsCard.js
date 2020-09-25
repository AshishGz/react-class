import React, {Component} from 'react';

class NewsCard extends Component {
    render() {
        return (

            <div style={{padding:12,border:'1px solid #f5f5f5',margin:20,cursor:'pointer'}}
            onClick={()=>window.open(this.props.newsData.url,'_blank')}
            >
                <h3 style={{fontSize:16,fontWeight:700}}>{this.props.newsData.title}</h3>
                <h4 style={{fontSize:14,fontWeight:400,color:'#aaaaaa'}}>{this.props.newsData.source.name}, {this.props.newsData.publishedAt}</h4>
                <div style={{display:'grid',gridTemplateColumns:'70% 30%'}}>
                    <div>
                        {this.props.newsData.content}
                    </div>
                    <div>
                        <img src={this.props.newsData.urlToImage} style={{width:'100%'}}/>
                    </div>
                </div>
            </div>

        );
    }
}

export default NewsCard;
