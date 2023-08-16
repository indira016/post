import React from 'react';
import PostList from './PostList';

const Posts = (props) => {
   

    return (
        <React.Fragment>

            {props.data.map(el => (
                <PostList  key={el.id} title={el.title} />
            ))}

        </React.Fragment>
    );
};

export default Posts;