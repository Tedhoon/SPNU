import React, { Component } from 'react';

class App extends Component {
    state = {
        Boards: []
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/SPNU_notice/');
            const Boards = await res.json();
            this.setState({
                Boards
            });
        } catch (e) {
            console.log(e);
        }
    };

    render() {
        return (
            <div>
                {this.state.Boards.map(Board => (
                  
                    <div key={Board.id}> 
                        <h1>{Board.title}</h1>
                        <span>{Board.author}</span>
                        <span>{Board.text}</span>
                        <span>{Board.created_date}</span>
                        <span>{Board.hits}</span>
                    </div>
                ))}
            </div>
        );
    }
}

export default App;