import React, { useState } from 'react';
import iconBookmark from '../assets/images/icon-bookmark.svg';
import '../styles/bookmark-btn.css';

const BookmarkBtn = () => {

    const [bookmarked, setBookmarked] = useState(0);

    const onBtnSubmit = () => {
        if(bookmarked === 0) {
            setBookmarked(bookmarked + 1);
        }
        if(bookmarked === 1) {
            setBookmarked(bookmarked - 1);
        }
        console.log(bookmarked);
    }

    const display = () => {
        if(bookmarked === 0) {
            return (
                <div className="bookmark-container">
                    <img
                        src={iconBookmark}
                        alt="icon bookmark"
                        className="icon-bookmark"
                    />
                    <input 
                        type="button" 
                        value="Bookmark" 
                        className="bookmark-btn"
                        onClick={onBtnSubmit}
                    />
                </div>
            );
        }else {
            return (
                <div className="bookmarked-container">
                    <img
                        src={iconBookmark}
                        alt="icon bookmark"
                        className="icon-bookmarked"
                    />
                    <input 
                        type="button" 
                        value="Bookmarked!" 
                        className="bookmarked-btn"
                        onClick={onBtnSubmit}
                    />
                </div>
            );
        }
    }

    return (
        <div>
            {display()}
        </div>
    );
}

export default BookmarkBtn;