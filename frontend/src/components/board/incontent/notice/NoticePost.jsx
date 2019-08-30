import React, {Component} from 'react';
import axios from 'axios';


axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken"


class NoticePost extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
          title : "",
          text : ""
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
      }
    
      handleInputChange = (e) => {    
        const target = e.target;
        const value = target.value; 
        const name = target.name;
    
        this.setState({
          [name]: value 
        });
      } //이제 this.state.title = 타이틀 입력값 , this.state.text = text입력값
      
      handleSubmit = (e) =>  {
          
        // const {title,text}=this.state;
        const title = this.state.title
        const text = this.state.text

        axios.post('http://127.0.0.1:8000/SPNU_notice/', {title : title, text : text})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        
        // e.preventDefault()
        
        }
    
    
      render() {
          

        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              title :
              <input
                name="title"
                type="text"
                value={this.state.title}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              text :
              <input
                name="text"
                type="text"
                value={this.state.text}
                onChange={this.handleInputChange} />
            </label>
              <input
                type="submit" 
                onSubmit={this.handleSubmit} />
          </form>
        );
      }}

export default NoticePost;