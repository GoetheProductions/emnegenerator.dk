import React, { Component } from 'react';
import '../../styles/rubix.css';
import { Well, Navbar, Nav, NavItem, Table, Image, Button, Icon, ButtonToolbar } from '@sketchpixy/rubix';
import { Link } from 'react-router';

export class Menu extends Component {
    render() {
        const navbarInstance = (
            <Well>
                <Navbar fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                    <Link to='/admin/index'>Kompanion administration</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav className='admin-nav'>
                    <Link className='link' to='/admin/users'>Brugere</Link>
                    <Link className='link' to='/admin/events'>Events</Link>
                    <Link className='link-out' to='/'>
                        <Button bsStyle='red' rounded 
                            onClick={
                                () => console.log('loggin out')
                            }>
                            <Icon glyph='ss-exit'/>
                        </Button>
                    </Link>
                </Nav>
                </Navbar>
            </Well>
        );

        return (
            <div>
                { navbarInstance }
            </div>
        )
    }
}

export class UserTable extends Component {
    render() {
        const tableInstance = (
            <Table className='table' responsive striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>Billede</th>
                        <th>Email</th>
                        <th>Oprettelsesdato</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                <tr>
                    <td><Image src="http://placehold.it/55x55" circle  /></td>
                    <td>Otto@basse.dk</td>
                    <td>06-10-2015</td>
                    <td>
                        <ButtonToolbar>
                            <Button bsStyle='green' rounded 
                                onClick={ () => console.log('email user') }>
                                <Icon glyph='ss-mail'/>
                            </Button>
                            <Button bsStyle='blue' rounded 
                                onClick={ () => console.log('see user') }>
                                <Icon glyph='ss-view'/>
                            </Button>
                            <Button bsStyle='red' rounded 
                                onClick={
                                    () => console.log('whoa.. you are trying to delete a user, maybe insert a mordal here ;)')
                                }>
                                <Icon glyph='ss-trash'/>
                            </Button>
                        </ButtonToolbar>
                    </td>

                </tr>
                <tr>
                    <td><Image src="http://placehold.it/55x55" circle  /></td>
                    <td>Otto@basse.dk</td>
                    <td>06-10-2015</td>
                    <td>
                        <ButtonToolbar>
                            <Button bsStyle='green' rounded 
                                onClick={ () => console.log('email user') }>
                                <Icon glyph='ss-mail'/>
                            </Button>
                            <Button bsStyle='blue' rounded 
                                onClick={ () => console.log('see user') }>
                                <Icon glyph='ss-view'/>
                            </Button>
                            <Button bsStyle='red' rounded 
                                onClick={
                                    () => console.log('whoa.. you are trying to delete a user, maybe insert a mordal here ;)')
                                }>
                                <Icon glyph='ss-trash'/>
                            </Button>
                        </ButtonToolbar>
                    </td>
                </tr>
                <tr>
                    <td><Image src="http://placehold.it/55x55" circle  /></td>
                    <td>Otto@basse.dk</td>
                    <td>06-10-2015</td>
                    <td>
                    <ButtonToolbar>
                        <Button bsStyle='green' rounded 
                            onClick={ () => console.log('email user') }>
                            <Icon glyph='ss-mail'/>
                        </Button>
                        <Button bsStyle='blue' rounded 
                            onClick={ () => console.log('see user') }>
                            <Icon glyph='ss-view'/>
                        </Button>
                        <Button bsStyle='red' rounded 
                            onClick={
                                () => console.log('whoa.. you are trying to delete a user, maybe insert a mordal here ;)')
                            }>
                            <Icon glyph='ss-trash'/>
                        </Button>
                    </ButtonToolbar>
                    </td>
                </tr>
                </tbody>
            </Table>
        );

        return (
            <div>
                { tableInstance }
            </div>
        )
    }
}


export class EventTable extends Component {
    render() {
        const tableInstance = (
            <Table className='table' responsive striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>Billede</th>
                        <th>Event navn</th>
                        <th>Lokation</th>
                        <th>Starter</th>
                        <th>Kategori</th>
                        <th>Oprettet af</th>
                        <th>Oprettelsesdato</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td><Image src="http://placehold.it/55x55" circle  /></td>
                    <td>Vildskab i vandet</td>
                    <td>555 Park St. Pittsfield, MA 01201</td>
                    <td>4-10-2016 - 14.30</td>
                    <td>Aktiv</td>
                    <td>Peter Mogensen</td>
                    <td>21-09-2016</td>
                    <td>
                        <ButtonToolbar>
                            <Button bsStyle='green' rounded 
                                onClick={ () => console.log('email user') }>
                                <Icon glyph='ss-edit'/>
                            </Button>
                            <Button bsStyle='blue' rounded 
                                onClick={ () => console.log('see user') }>
                                <Icon glyph='ss-view'/>
                            </Button>
                            <Button bsStyle='red' rounded 
                                onClick={
                                    () => console.log('whoa.. you are trying to delete a user, maybe insert a mordal here ;)')
                                }>
                                <Icon glyph='ss-trash'/>
                            </Button>
                        </ButtonToolbar>
                    </td>
                </tr>
                <tr>
                    <td><Image src="http://placehold.it/55x55" circle  /></td>
                    <td>Vildskab i vandet</td>
                    <td>555 Park St. Pittsfield, MA 01201</td>
                    <td>4-10-2016 - 14.30</td>
                    <td>Aktiv</td>
                    <td>Peter Mogensen</td>
                    <td>21-09-2016</td>
                    <td>
                        <ButtonToolbar>
                            <Button bsStyle='green' rounded 
                                onClick={ () => console.log('email user') }>
                                <Icon glyph='ss-edit'/>
                            </Button>
                            <Button bsStyle='blue' rounded 
                                onClick={ () => console.log('see user') }>
                                <Icon glyph='ss-view'/>
                            </Button>
                            <Button bsStyle='red' rounded 
                                onClick={
                                    () => console.log('whoa.. you are trying to delete a user, maybe insert a mordal here ;)')
                                }>
                                <Icon glyph='ss-trash'/>
                            </Button>
                        </ButtonToolbar>
                    </td>
                </tr>
                <tr>
                    <td><Image src="http://placehold.it/55x55" circle  /></td>
                    <td>Vildskab i vandet</td>
                    <td>555 Park St. Pittsfield, MA 01201</td>
                    <td>4-10-2016 - 14.30</td>
                    <td>Aktiv</td>
                    <td>Peter Mogensen</td>
                    <td>21-09-2016</td>
                    <td>
                        <ButtonToolbar>
                            <Button bsStyle='green' rounded 
                                onClick={ () => console.log('email user') }>
                                <Icon glyph='ss-edit'/>
                            </Button>
                            <Button bsStyle='blue' rounded 
                                onClick={ () => console.log('see user') }>
                                <Icon glyph='ss-view'/>
                            </Button>
                            <Button bsStyle='red' rounded 
                                onClick={
                                    () => console.log('whoa.. you are trying to delete a user, maybe insert a mordal here ;)')
                                }>
                                <Icon glyph='ss-trash'/>
                            </Button>
                        </ButtonToolbar>
                    </td>
                </tr>
                </tbody>
            </Table>
        );

        return (
            <div>
                { tableInstance }
            </div>
        )
    }
}