"use client"

import React, { useState, FormEvent, useEffect } from 'react';
import axios from 'axios';

interface StoryFormProps {
    userId: string;
}

const StoryForm: React.FC<StoryFormProps> = ({ userId }) => {
    const [story, setStory] = useState("");
    const [showMessage, setShowMessage] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // send story using POST request
            await axios.post("/api/story", { userId, userStory: story });

            // reset field and display success msg
            setStory("");
            setShowMessage(true);
        } catch (error) {
            console.error("Error submitting story:", error);
        }
    };
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowMessage(false);
        }, 3000);
        return () => clearTimeout(timeout);
    }, [showMessage]);

    return (
        <>
        {showMessage && <p className='success'>Story submitted successfully!</p>}
        <form onSubmit={handleSubmit}>
            <label htmlFor="story">Write or update your story here</label>
            <textarea
                id='story'
                value={story}
                onChange={(e) => setStory(e.target.value)}
                rows={4}
                cols={50}
                required
            />
            <button type="submit">Submit</button>
        </form>
        </>
    );
};

export default StoryForm;
