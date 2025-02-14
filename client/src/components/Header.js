import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Payments from './Payments'

class Header extends Component {
    renderUserStatus() {
        switch (this.props.auth) {
            case null:
                return "Loading..."
            case false:
                return <li><a href="/auth/google">Login in with Google</a></li>
            default:
                return [
                    <li><Payments/></li>,
                    <li style={{ margin: '0px 10px'}}>Credits: {this.props.auth.credits || 0}</li>,
                    <li><a href='/api/logout'>Logout</a></li>
                ]
        }
    }

    render() {
        console.log(this.props)
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to={this.props.auth ? "/surveys" : "/"} className="brand-logo">ItsTRD</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.renderUserStatus()}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {auth: state.auth}
}

export default connect(mapStateToProps)(Header)