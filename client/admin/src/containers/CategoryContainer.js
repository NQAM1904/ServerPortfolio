import React, { Component } from 'react'
import CategoryComponent from '../components/category/CategoryComponent';
class CategoryContainer extends Component {
    render() {
        return (
            <CategoryComponent {...this.props} />
        )
    }
}

export default CategoryContainer
