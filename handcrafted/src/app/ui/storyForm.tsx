"use client"

import React, { useState } from 'react';
import axios from 'axios';

const StoryForm = ({ userId }) => {
    const [story, setStory] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/story', { userId, userStory: story });
        } catch (error) {
            console.error("Error submitting story:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="story">Write your story here</label>
            <textarea
                value={story}
                onChange={(e) => setStory(e.target.value)}
                rows={4}
                cols={50}
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default StoryForm;