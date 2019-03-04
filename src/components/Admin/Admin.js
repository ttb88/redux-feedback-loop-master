import React, { Component } from 'react';
import AdminTable from './AdminTable';


class Admin extends Component {


    render() {
        return (
            <div className="admin-header">
                <header className="App-header">
                    <div className="App-title">
                        <h1>Feedback Results</h1>
                    </div>
                </header>
                <AdminTable />
            </div>
        );
    }
}

export default Admin;

