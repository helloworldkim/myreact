import React, { Component } from 'react';
import UserApiService from './UserApiService';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class EditUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            userId: '',
            password: '',
            phone: '',
            email: '',
            message: null
        }

    }
    componentDidMount() {
        this.loadUser();
    }

    loadUser = () => {
        UserApiService.fetchUserByID(window.localStorage.getItem("id"))
            .then(res => {
                let user = res.data;
                console.log("user정보", user);
                this.setState({
                    id: user.id,
                    userId: user.userId,
                    password: user.password,
                    phone: user.phone,
                    email: user.email,
                })
            })
            .catch(err => {
                console.error('loadUser() 에러', err);
            })
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {
            id: this.state.id,
            userId: this.state.userId,
            password: this.state.password,
            phone: this.state.phone,
            email: this.state.email,
        }
        console.log("edituser! 정보 보내기전 user정보", user);
        UserApiService.editUser(user)
            .then(res => {
                this.setState({
                    message: user.userName + '님 정보가 수정되었습니다'
                })
                console.log(this.state.message);
                this.props.history.push('/users');
            })
            .catch(err => {
                console.error('saveUser() 에러', err);
            })
    }

    render() {
        return (
            <>
                <Typography variant="h4" style={style}>사용자수정</Typography>
                <form>
                    <TextField type="text" id="userId" name="userId" label="아이디"
                        fullWidth margin="normal" aria-readonly value={this.state.userId} />
                    <TextField type="password" id="password" name="password" label="비밀번호"
                        fullWidth margin="normal" value={this.state.password} onChange={this.onChange} />
                    <TextField type="text" id="phone" name="phone" label="휴대폰"
                        fullWidth margin="normal" value={this.state.phone} onChange={this.onChange} />
                    <TextField type="text" id="email" name="email" label="이메일"
                        fullWidth margin="normal" value={this.state.email} onChange={this.onChange} />
                    <Button variant="contained" color="primary" onClick={this.saveUser}>회원정보 수정</Button>
                </form>
            </>

        );
    }
}
const style = {
    display: 'flex',
    justifyContent: 'center',
}

export default EditUser;