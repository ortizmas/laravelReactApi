import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TrasferForm from './TransferForm';
import TrasferList from './TransferList';


class Example extends Component {

    constructor(props){
        super(props)

        this.state = {
            money: 0.0,
            transfers: [],
            error: null,
            form: {
                description: '',
                amount: '',
                wallet_id: ''
            }
        }
    }

    async componentDidMount(){
        try {
            let res = await fetch('http://127.0.0.1:8000/api/wallet')
            let data = await res.json()
            this.setState({
                money: data.money,
                transfers: data.transfers
            })
        } catch (error) {
            this.setState({
                error
            })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>
                            <p className="title">$ {this.state.money}</p>
    
                            <div className="card-body">
                                <TrasferForm/>
                            </div>
    
                            <div className="card-body">
                                <TrasferList
                                    transfers={this.state.transfers}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
