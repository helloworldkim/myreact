import React, { Component } from 'react';
import UserApiService from './UserApiService';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';


const style = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem'
}
const hovercursor = {
    cursor: 'pointer'
}

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            message: null
        }

    }
    componentDidMount() {
        console.log('componentDidMount run');
        this.reloadUserList();
    }
    reloadUserList = () => {
        UserApiService.fetchUsers()
            .then(res => {
                this.setState({ users: res.data });
            })
            .catch(err => {
                console.error("reloadUserList에러:", err);
            });
    }
    editUser = (id) => {
        //props로 id값을 넘겨주는게 아니라 localstorage에 저장해서 가져감 session처럼 사용
        window.localStorage.setItem('id', id);
        this.props.history.push('/EditUser');
    }

    deleteUser = (id) => {
        console.log(id);
        var boolean = window.confirm("정말로 삭제하시겠습니까?");
        if (boolean) {
            UserApiService.deleteUser(id)
                .then(res => {
                    this.setState({
                        message: '성공적으로 삭제했습니다',
                        users: this.state.users.filter(user => user.id !== id)
                    });
                })
                .catch(err => {
                    console.error('deleteUser() 에러!', err);
                })
        }


    }


    render() {
        return (
            <>
                <Typography variant='h6' style={style}>사용자 리스트</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>id</TableCell>
                            <TableCell align='center'>userId</TableCell>
                            <TableCell align='center'>password</TableCell>
                            <TableCell align='center'>phone</TableCell>
                            <TableCell align='center'>email</TableCell>
                            <TableCell align='center'>Edit</TableCell>
                            <TableCell align='center'>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.users.map((user) => {
                            return <TableRow key={user.id}>
                                <TableCell align='center'>{user.id}</TableCell>
                                <TableCell align='center'>{user.userId}</TableCell>
                                <TableCell align='center'>{user.password}</TableCell>
                                <TableCell align='center'>{user.phone}</TableCell>
                                <TableCell align='center'>{user.email}</TableCell>
                                <TableCell align='center' onClick={() => this.editUser(user.id)}>
                                    <CreateIcon variant='contained' style={hovercursor} color='secondary'>수정</CreateIcon>
                                </TableCell>
                                <TableCell align='center' onClick={() => this.deleteUser(user.id)}>
                                    <DeleteIcon align='center' style={hovercursor} type='button' value='삭제'></DeleteIcon>
                                </TableCell>
                            </TableRow>
                        })}
                    </TableBody>

                </Table>

            </>
        );
    }
}

export default UserList;