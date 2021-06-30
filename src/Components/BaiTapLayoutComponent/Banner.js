import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="container">
                        <div className="p-2 p-lg-1 bg-light rounded-3 text-left">
                            <div className="m-4 m-lg-5">
                                <h1 className="display-3 fw-bold">A warm welcome!</h1>
                                <p className="fs-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ad nihil tempore illum delectus quae assumenda maxime exercitationem quia, dignissimos quasi error ex libero quam voluptas ut, magnam eius deleniti dolores mollitia? Omnis, repellat facilis quis ad provident laudantium deleniti libero corrupti, aut nesciunt est error culpa? Ad, nam voluptates?</p>
                                <a className="btn btn-primary btn-lg" href="#!">Call to action</a>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
