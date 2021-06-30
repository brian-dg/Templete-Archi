import React, { Component, Fragment } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {
    Row, Col,
    Card, CardBody,
    CardTitle,Table
} from 'reactstrap';


class ButtonsStandardSolid extends Component {

    render() {
        return (
            <Fragment>
                <Card>
                    <Table className="mb-0" bordered>

                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>
            </Fragment>
        );
    }
};

export default ButtonsStandardSolid;
