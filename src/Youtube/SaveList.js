import React, { Component } from 'react';

class SaveList extends Component {
    constructor(props) {
        super(props);

        this.state={
            video:null
        }

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul className='list-group'>
                            {this.props.videos.map(
                                (item)=>{
                                return <li key={item.idx} className='list-group-item'>
                                    <div className='row'>
                                    {/* <div className="col">{item.snippet.title}</div> */}
                                    <div className="col" dangerouslySetInnerHTML={{__html:item.snippet.title}}></div>
                                        <div className="col-auto">
                                            <input 
                                            type='button'
                                            className='btn btn-sm btn-info'
                                            // onClick={function(e){
                                            //     this.props.handleFavoriteSelect(item);
                                            // }.bind(this)}
                                            onClick={()=>this.props.handleFavoriteSelect(item)}
                                            value='view'
                                            />
                                            <input 
                                            type='button'
                                            className='btn btn-sm btn-danger'
                                            value='delete'
                                            onClick={()=>this.props.handleFavoriteDelete(item.idx)}
                                            />
                                        </div>
                                    </div>
                                </li>
                                }
                                
                            )}
                            
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SaveList;