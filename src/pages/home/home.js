import React, { Component } from 'react';
class HomePage extends Component {
    static path = '/';
    render() {
        return (
            <div>
                <div className='alert alert-success'>Хоме</div>
            </div>
        );
    }
}

export default HomePage;
