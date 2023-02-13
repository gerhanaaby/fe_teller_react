import React, { Component, Fragment } from 'react'
import { Row } from 'react-bootstrap'
import NavbarComponent from '../components/navbar'

import SidebarComponent from '../components/sibebar'



export default class Home extends Component {
  render() {
    return (
        <Fragment>
            {/* <NavbarComponent/>   */}
            <SidebarComponent/>
        </Fragment>
    )
  }
}


