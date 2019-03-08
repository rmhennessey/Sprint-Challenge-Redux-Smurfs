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

    render() {
        return (
            
            <div>
                <h2>Welcome to the Smurf Village</h2>
                {this.props.smurfsList.map((smurf, index) => (
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
    smurfsList: state.smurfs
});

export default connect(
    mapStateToProps,
    {addSmurf, getSmurfs}
    )(SmurfList);