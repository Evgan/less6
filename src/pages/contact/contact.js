import React, { Component } from 'react';
class ContactPage extends Component {
    static path = '/contact';
    render() {
        return (
            <div>
                <div className='alert alert-success'>Контакты!!</div>
            </div>
        );
    }
}

export default ContactPage;
