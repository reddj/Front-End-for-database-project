import React, { Component } from 'react'

export default class MovieList extends Component {

    state = {
        locations: []
    }

    async componentDidMount () {
        try{
            let locations = await fetch ('http://localhost:9000/locations') 
            console.log(locations)
            let moviesJSON = await locations.json()
            this.setState({
                locations: moviesJSON
              })
            // await this.props.getMovieData(this.state.locations)
            return locationsJSON
        }
        catch(error){
            console.log(error.stack)
            return error
          }
    }

    render () {
        let returnData = this.state.locations.map(item => {
            return(
                <li>
                    {item.title}
                </li>
            )
        })
        return (
            <ul>
                {returnData}
            </ul>
        )
   
        }
    } 




