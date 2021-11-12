import React, { Component } from 'react'
import { Outlet } from 'react-router'

export default class ProductWrap extends Component {
    render() {
        return (
            <div>
                <h2>Welcome to Products page Wrap</h2>
                <Outlet/>
            </div>
        )
    }
}
