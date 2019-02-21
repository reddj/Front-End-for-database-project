import React, { Component } from 'react'

export default class DatabaseContainer extends Component {

    state = {
        movies: []
    }

    async componentDidMount () {
        try{
            let movies = await fetch ('http://localhost:9000/movies') 
            console.log(movies)
            let moviesJSON = await movies.json()
            this.setState({
                movies: moviesJSON
              })
            // await this.props.getMovieData(this.state.movies)
            return moviesJSON
        }
        catch(error){
            console.log(error.stack)
            return error
          }
    }

    handleClick = (lat, lng) => {
        this.props.getCoordinates(lat, lng)
    }

    render () {
        let returnData = this.state.movies.map(item => {
            return(
               
                    
                    <div class="ui card cardClass">
                    <div class="image">
                        <img src={item.image}></img>
                    </div>
                    <div class="content">
                        <a class="header">{item.title}</a>
                        <div class="meta">
                        <span class="date">{item.release_date}</span>
                        </div>
                        <div class="description">
                            {item.description}
                        </div>
                    </div>
                    <div class="ui animated fade button locationButton" tabindex="0" onClick={this.handleClick.bind(null, parseFloat(item.latitude), parseFloat(item.longitude))}>
                    <div class="visible content">Where was this filmed?</div>
                    <div class="hidden content">
                     {item.location_name}
                    </div>
                    </div>  
                    </div>
                  
                
            )
        })
        return (
            <div>
                {returnData}
            </div>
        )
    }
}

