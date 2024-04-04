import React from 'react';
import '../Styles/styles.css';

function RightImageLeftText(props) {
    const { data } = props;
    return(
        <>
            <div className="container-m">
            <div className="r-image-l-text">
                <div className='right-image'>
                    <img src={data.image} alt="right image" />
                </div> 
                <div className='left-text'>
                    <h3>{data?.heading}</h3> 
                    {data?.elivation && <p className='elivation'>{data?.elivation}</p>}
                    <p>{data?.description}</p>
                    {data.lists && 
                    <ul>   
                    {data.lists.map(item => <li>{item.list}</li>)}
                    </ul>
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default RightImageLeftText;
