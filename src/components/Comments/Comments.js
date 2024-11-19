import React, { useState } from 'react';

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState({ text: '', rating: 0 });

    const handleSubmit = (e) => {
        e.preventDefault();
        setComments([...comments, newComment]);
        setNewComment({ text: '', rating: 0 });
    };

    return (
        <section>
            <h2>Leave a Comment</h2>
            <form onSubmit={handleSubmit}>
                <textarea 
                    placeholder="Your comment"
                    value={newComment.text}
                    onChange={(e) => setNewComment({...newComment, text: e.target.value})}
                ></textarea>
                <input 
                    type="number"
                    min="1"
                    max="5"
                    value={newComment.rating}
                    onChange={(e) => setNewComment({...newComment, rating: e.target.value})}
                />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>
                        <p>{comment.text}</p>
                        <p>Rating: {comment.rating} / 5</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Comments;
