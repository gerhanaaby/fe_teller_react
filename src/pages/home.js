import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import NavbarReact from '../components/navbar'
import Sidebar from '../components/sibebar'


export default class Home extends Component {
  render() {
    return (
        <Row>
            <NavbarReact/>  
            <Sidebar/>
        </Row>
    )
  }
}


