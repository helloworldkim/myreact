import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UserApiService from './UserApiService';

const style = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem'
}
const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap',
}

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            password: '',
            phone: '',
            email: '',
            message: null
        }
    }
    onChange = (e) => {
        // console.log("타켓name", e.target.name, "타겟value", e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    saveUser = (e) => {
        e.preventDefault();
        let user = {
            userId: this.state.userId,
            password: this.state.password,
            phone: this.state.phone,
            email: this.state.email,
        }
        UserApiService.addUser(user)
            .then(res => {
                console.log("addUser 응답상태", res.status);
                if (res.status === 200) {
                    alert('정상적으로 가입되셨습니다');
                    //회원가입은 정상적으로 되지만 페이지 이동하는것 구현해야함
                    this.props.history.push('/');
                }
            })
            .catch(err => {
                console.log(err);
            })

    }

    render() {
        return (
            <>
                <Typography variant="h4" style={style}>사용자추가</Typography>
                <form sytyle={formContainer}>
                    <TextField type="text" id="userId" name="userId" label="아이디"
                        fullWidth margin="normal" value={this.state.userId} onChange={this.onChange} />
                    <TextField type="password" id="password" name="password" label="비밀번호"
                        fullWidth margin="normal" value={this.state.password} onChange={this.onChange} />
                    <TextField type="text" id="phone" name="phone" label="휴대폰번호"
                        fullWidth margin="normal" value={this.state.phone} onChange={this.onChange} />
                    <TextField type="text" id="email" name="email" label="이메일"
                        fullWidth margin="normal" value={this.state.email} onChange={this.onChange} />
                    <Button variant="contained" color="primary" onClick={this.saveUser}>회원가입</Button>
                </form>
            </>

        );
    }
}

export default AddUser;