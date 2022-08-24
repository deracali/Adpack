import React from 'react';

const TestiMonialsDetails = ({ testiMonialDetail }) => {
    const { name, address, description, img } = testiMonialDetail;
    console.log("testiMonialDetail" + testiMonialDetail)
    return (
        <div className="item">
            <div className="shadow-effect">
                <img className="img-circle" src={img} />
                <p className='desc'>{description}</p>
                <p className="name">{name}</p>
            </div>

        </div>
    );
};

export default TestiMonialsDetails;