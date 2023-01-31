import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types';
import Spinner from "./Spinner"

export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize : 9,
    category:'science'

  }
  static PropsTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string

  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    // console.log("hello this is my constructure");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title=`${this.capitalizeFirstLetter(this.props.category)} -NewsGeek`;
  }
  
  async updateNews(){
    const url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading:false});
    // console.log(parsedData);
    this.setState({
    articles: parsedData.articles,
    totalResults: parsedData.totalResults,
    loading:false
  });

  }





  async componentDidMount() {
    // let url =
    //   `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9d39bd2103e14d7bb4e06379ece8c5c0&page=1&pageSize=${this.props.pageSize}`;
    //    let data = await fetch(url);
    //    let parsedData = await data.json();
    //    console.log(parsedData);
    //    this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    // });
    this.updateNews()
  }
  handleNextClick = async () => {

    console.log("Next");
    // if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
    // } 
    // else {

    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9d39bd2103e14d7bb4e06379ece8c5c0&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;

    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //   // console.log(parsedData)

    //     this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //   });
    // }
    this.setState({page: this.state.page+1})
    this.updateNews();
  };

  handlePrevClick = async () => {

    // console.log("Previous");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9d39bd2103e14d7bb4e06379ece8c5c0&page=${ this.state.page - 1 }&pageSize=${this.props.pageSize}`;

    // let data = await fetch(url);
    // let parsedData = await data.json();
    // // console.log(parsedData)

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    // })
    this.setState({page: this.state.page-1})
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3 ">
        <h1 className="text-center" style={{margin: '35px 0px', marginTop:'90px'}}>NewsGeek -Top  {this.capitalizeFirstLetter(this.props.category)} Headlines </h1>
        {this.state.loading && <Spinner/>}

        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
