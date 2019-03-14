import React from 'react';
import { connect } from 'react-redux';

import { getSmurfs, addSmurf } from '../actions';

class SmurfList extends React.Component {
    state = {
        name: '',
        age: '',
        height: ''
    }

    componentDidMount() {
        this.props.getSmurfs();
    }

    handleChanges = e => {
        this.setState({ [e.target.name] : e.target.value });
    };

    submitHandler = e => {
        e.preventDefault();
        const newSmurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        }

        this.props.addSmurf(newSmurf);

        this.setState({
            name: '',
            age: '',
            height: ''
        })
    }




    render() {
        return (
            
            <div>
                <h2>Welcome to the Smurf Village</h2>
                <form>
                    <input
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChanges}
                        placeholder='smurf name'
                    />
                    <input
                        type='text'
                        name='age'
                        value={this.state.age}
                        onChange={this.handleChanges}
                        placeholder='smurf age'
                    />
                    <input
                        type='text'
                        name='height'
                        value={this.state.height}
                        onChange={this.handleChanges}
                        placeholder='smurf height'
                    />
                    <button onClick={this.submitHandler}>Add a Smurf</button>
                </form>
                {this.props.smurfs.map((smurf, index) => (
                    <ul key={index}>
                        <li>Name: {smurf.name}</li>
                        <li>Age: {smurf.age}</li>
                        <li>Height: {smurf.height}</li>
                    </ul>
                ))}
            
            </div>
        )
    }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs
});

export default connect(
    mapStateToProps,
    {addSmurf, getSmurfs}
    )(SmurfList);