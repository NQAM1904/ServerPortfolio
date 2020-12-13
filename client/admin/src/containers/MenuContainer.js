import React, { Component } from 'react'

import MenuComponent from '../components/menu/MenuComponent';

class MenuContainer extends Component {
    render() {
        return (
            <MenuComponent {...this.props} />
        )
    }
}
export default MenuContainer;
