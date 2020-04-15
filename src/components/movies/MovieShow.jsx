import React, { Component } from 'react'

export class MovieShow extends Component {
    render() {
        return (
            <div className='MovieShow container'>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mt-5">
                            <div className="card-body">
                                <h4 className='card-title'>Title</h4>
                                <p className="caard-text">Sub Title</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieShow
