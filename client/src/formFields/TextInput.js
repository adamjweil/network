
import React from 'react';
import { connect } from 'react-redux';
import config from ('config');

const TextInput = props => {

    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
        <div className="form-group">
            <input type="text" className={formControl} /> {...props}
        </div>
    );
}

export default connect()(TextInput);
