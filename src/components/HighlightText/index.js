import React from 'react';
import '../Styles/styles.css';

function HighlightText(props) {
    const { data, highlightImage } = props;
    return(
        <>
            <div className="container-m">
            <div className="highlight-text">
                <div className='highlight-left-text'>
                    <h3>Location Highlights</h3>
                    <ul>
                        {data.map(item => <li>{item.text}</li>)
                        }
                    </ul>
                </div>
                <div className='highlight-right-image'>
                    <img src={highlightImage} alt="highlight Image" />
                </div> 
            </div>
        </div>
        </>
    )
}

export default HighlightText;
