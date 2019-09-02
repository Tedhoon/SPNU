import React, {Component} from 'react';
import axios from 'axios';



axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken"



class NoticeDetail extends Component {
    
    

    constructor(props) {
        super(props);
        
        this.state = {};

        
        this._deleteBoard= this._deleteBoard.bind(this);

        
    }
    // state = {};
    
    
    // componentWillMount(match){
        
    //     // const hello = ({match}) => {
    //     //     return(
    //     //         {match.params.name}
    //     //     )
    //     // }
        
    // }

    async componentDidMount(){
        this._getBoards();
        
    }

    _renderBoard = () => {
        
        const Boards = this.state.Boards
        const Board_id = Boards.id
        const Board_title = Boards.title
        const Board_text = Boards.text
        return(
            <div>

            <h1>{Board_id}</h1>
            <h3>{Board_title}</h3>
            <h3>{Board_text}</h3>
            </div>
        )
    }

    _deleteBoard = () => {
        
            axios.delete(`http://127.0.0.1:8000/SPNU_notice/${this.props.id}/`)
        
        
    }


    _getBoards = async () => {
        //function 앞에 async를 붙이면 promise객체를 불러오고 .then을 써서 불러올 때 까지 기다려준다는 느낌?!
        //await은 promise가 resolve되서 돌아올 때 까지 기다려주는(다음 줄로 넘어가지 않는 친구!!) => 비동기지만 동기처럼 쓸 수 있슴다
        
        const Boards = await axios
        
    
        .get(`http://127.0.0.1:8000/SPNU_notice/${this.props.id}/`)
        
        .then(({ data })=> {
            console.log(data);
            this.setState(
              { Boards : data }
            );
            // console.log(this.state.Boards)
            
          })
        .catch((err)=> {})
        console.log(Boards)
        
      }


    render(){
        return(

            <div>
                <h1>{this.props.id}</h1>
                
                <h1> 디테일 페이지 </h1>
                {this.state.Boards ? this._renderBoard() : "loading"}
                <button onClick = {this._deleteBoard}>삭제</button>
            </div>
        )
    }


}

export default NoticeDetail;