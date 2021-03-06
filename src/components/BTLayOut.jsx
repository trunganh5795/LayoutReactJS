import React, { Component } from 'react'
import Footer from './Footer';
import Header from './Header'
import ItemsDetail from './ItemsDetail';
import NavBar from './NavBar'

export default class BTLayOut extends Component {
    renderData = () => {
        let arr = [];
        for (let i = 0; i < 4; i++) {
            arr.push(<ItemsDetail />)
        }
        return arr
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className="container">

                    <Header />
                    <div className="row">
                        {this.renderData()}
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}
