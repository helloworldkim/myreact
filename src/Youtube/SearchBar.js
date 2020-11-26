import React, { Component } from 'react';
import * as Icons from 'react-bootstrap-icons';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
        }
    }

    handelChange = (e) => {
        // console.log(e.target.value);
        this.setState({
            term: e.target.value
        });
    }
    handelSubmit = (e) => {
        e.preventDefault();
        if (this.state.term === '') {
            alert('검색어를 입력하세요');
            return;
        }
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        console.log('SearchBar render');
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form className='card card-sm' onSubmit={this.handelSubmit}>
                            <div className="card-body row align-items-center">
                                <div className="col-auto">
                                    <Icons.Search />
                                </div>
                                <div className="col">
                                    <input type="text"
                                        name='youtube_search'
                                        className='form-control-lg col'
                                        style={{ border: 0 }}
                                        placeholder='input search words'
                                        onChange={this.handelChange}
                                        value={this.state.term} />
                                </div>
                                <div className="col-auto">
                                    <button type='submit' className='btn btn-sm btn-success'>Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;