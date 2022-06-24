
const Cards =()=>{
    return(
        <div className="card">Cards</div> 
    )
}
const Map =()=>{
    return(
        <div className="map">Large Map</div>
        
    )
}
const Sidebar =()=>{
    return(
        <div className="sidebar">
            <h4>Dashboard</h4>
            <h4>Widget</h4>
            <h4>Reviews</h4>
            <h4>Customers</h4>
            <h4>Online Analysis</h4>
            <h4>Settings</h4>
        </div>
    )
}
const Board =()=>{
    return(
        <div className="board">
        <Sidebar />
        <Cards />
        <Cards />
        <Cards />
        <Map />
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