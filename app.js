
const Reviews =()=>{
    return(
        <div className="reviews">
        {/* <div className="cards"> */}
        <h6>Reviews</h6>
        </div> 
    )
}
const AverageRating =()=>{
    return(
        <div className="averageRating">
        {/* <div className="cards"> */}
              <h6>AverageRating</h6>
        </div> 
    )
}
const SentimentAnalysis =()=>{
    return(
        <div className="sentimentAnalysis">
        {/* <div className="cards"> */}
            <h6>SentimentAnalysis</h6>
        </div> 
    )
}
const WebsiteVisitors =()=>{
    return(
        <div className="websiteVisitors">
            <h6>Website visitors</h6>
        </div>
        
    )
}
const Sidebar =()=>{
    return(
        <div className="sidebar">
            <h6>Dashboard</h6>
            <h6>Widget</h6>
            <h6>Reviews</h6>
            <h6>Customers</h6>
            <h6>Online Analysis</h6>
            <h6>Settings</h6>
        </div>
    )
}
const Board =()=>{
    return(
        <div className="board">
        <Sidebar />
        <Reviews />
        <AverageRating/>
        <SentimentAnalysis />
        {/* <Cards /> */}
        <WebsiteVisitors />
        </div>
    )
}

class App extends React.Component {
    render() {
      return (
       <div className="container">
        <Board />
        </div> 
      )
    }
  }
  ReactDOM.render(<App/>, document.getElementById("root"));