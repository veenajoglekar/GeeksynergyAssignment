import React, { Component } from 'react'

const About = () => {
    return (
        <>
            <div className='container mt-4' style={{textAlign: 'left'}}>
                <div className='row'>
                    <h3 className='col-4'>Company : </h3>
                    <p className='col-8'>Geeksynergy Technologies Pvt Ltd</p>
                </div>
                <div className='row'>
                    <h3 className='col-4'>Address : </h3>
                    <p className='col-8'>Sanjayanagar, Bengaluru-56</p>
                </div>
                <div className='row'>
                    <h3 className='col-4'>Phone : </h3>
                    <p className='col-8'>XXXXXXXXX09</p>
                </div>
                <div className='row'>
                    <h3 className='col-4'>Email : </h3>
                    <p className='col-8'>XXXXXX@gmail.com</p>
                </div>
            </div>
        </>
    )
}

export default About