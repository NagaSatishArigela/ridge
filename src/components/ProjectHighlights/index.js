import React from 'react';
import '../Styles/styles.css';

function ProjectHightlights(props) {
    const { data } = props;
    return(
        <>
            <div className="container-m">
            <div className="project-text">
                <h3>Project Highlights</h3>
                <ul>
                    {data.map(item => <li>
                        <img src={item.image} alt="project highlight"/>
                        <h5>{item.text}</h5></li>)
                    }
                </ul>
            </div>
        </div>
        </>
    )
}

export default ProjectHightlights;
