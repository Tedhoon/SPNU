import React, {Component} from 'react';
import axios from 'axios';



class Notice extends Component {
    
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

            </div>
            )
        })
        return Boards

    }


    _getBoards = async () => {
        //function 앞에 async를 붙이면 promise객체를 불러오고 .then을 써서 불러올 때 까지 기다려준다는 느낌?!
        //await은 promise가 resolve되서 돌아올 때 까지 기다려주는(다음 줄로 넘어가지 않는 친구!!) => 비동기지만 동기처럼 쓸 수 있슴다
        const Boards = await axios
        .get('http://127.0.0.1:8000/SPNU_notice/')
        .then(({ data })=> {
            console.log(data.results);
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

export default Notice;