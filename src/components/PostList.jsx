import React from 'react';
import classes from './PostList.module.css'

const PostList = (props) => {

    return (
            <div> 
                <ul className={classes.post}>
                <li>{props.title}</li>
            </ul>
            </div>
    );
};

export default PostList;