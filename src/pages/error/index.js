import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class ErrorPage extends Component {
  static path = '/';
  render() {
    return (
        <div className='alert alert-danger'>
            <h3>Страница не найдена такая вот засада</h3>
            <p>Перейти на <Link to='/'>главную</Link></p>
        </div>
    );
  }
}

export default ErrorPage;
