import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TrasferForm from './TransferForm';
import TrasferList from './TransferList';
import url from './url';



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
                wallet_id: 3
            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async handleSubmit(e){
        e.preventDefault()
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(this.state.form)
            }

            let res = await fetch(`${url}/api/transfer`, config)
            let data = await res.json()

            this.setState({
                transfers: this.state.transfers.concat(data),
                money: this.state.money + (parseInt(data.amount))
            })
            
        } catch (error) {
            this.setState({
                error
            })
        }
    }

    handleChange(e){
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    async componentDidMount(){
        try {
            let res = await fetch(`${url}/api/wallet`)
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
                                <TrasferForm
                                    form={this.state.form}
                                    onChange={this.handleChange}
                                    onSubmit={this.handleSubmit}
                                />
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
