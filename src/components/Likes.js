import React from 'react';
import {connect} from "react-redux";

import '../App.css'

const Likes = (props) => {
    console.log(props, 'likes');
    return (
        <div className="button-controls">
            <button>💖 {props.likes}</button>
            <button>Dislike</button>
        </div>
    )
}

function mapStateToProps(state) {
    console.log('mapStateToProps > ', state)
    return {
        likes: state.likes
    }
}

export default connect(mapStateToProps)(Likes);