import React, { Component } from 'react';
import './style.less';
class HomePage extends Component {
    static path = '/';
    render() {
        return (
            <div className='row b-nome'>
                <div className='col-xl-12'>
                    <ul>
                        <li>Item l</li>
                    </ul>
                    <div className='col-xl-4'>
                        <input type='text' className='form-control'/>
                        <button className='btn btn-primary'>Add todo</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default HomePage;
