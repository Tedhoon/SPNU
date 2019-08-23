import React, { Component } from 'react';
import axios from 'axios';

    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.xsrfHeaderName = "X-CSRFToken"



class SpnuNotice extends Component {

    

    constructor(props) {
        super(props);

        
        this.state = {};
    }

    async componentDidMount(){
        this._getBoards();
        
    }

    _renderBoard = () => {
        const Boards = this.state.Boards.map(Board => {
            return( 
            <div key={Board.id}> 
            <h1>{Board.title}</h1>
            <span>{Board.author}</span>
            <span>{Board.text}</span>
            <span>{Board.created_date}</span>
            <span>{Board.hits}</span>
            </div>)
        })
        return Boards

    }


    _getBoards = async () => {


        const Boards = await axios
        .get('http://127.0.0.1:8000/SPNU_notice')
        .then(({ data })=> {
            console.log(data);
            this.setState(
              { Boards : data.results }
            );
            
          })
          .catch((err)=> {})
          console.log(Boards)
        
      }


    render(){
        return(
            <div>
                <h1> hello world </h1>
                {this.state.Boards ? this._renderBoard() : "loading"}
            </div>
        )
    }

}

export default SpnuNotice;