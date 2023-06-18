import {React} from 'react';

import { TbMessageDots } from 'react-icons/tb';
import { FiFolderMinus} from 'react-icons/fi';
import { Draggable } from "react-beautiful-dnd";

import Avatar from './Avatar';

const sta = (value) =>{

    if(value === "low"){
        return (<p className='view-status-orange'>Low</p>)
    }
    if(value === "high"){
        return (<p className='view-status-red'>High</p>)
    }
    return (<p className='view-status-green'>completed</p>)
}

const Card = (props) => {
    const {id,state,status,title,text,avatar,comments,files,img} = props.data;

    return (
        <Draggable draggableId={state} index={id}>
            {(provided)=>(
                <div className='view-card' {...provided.draggableProps}    {...provided.dragHandleProps}    ref={provided.innerRef}>
                    <div className='view-head-card'>
                        {sta(status)}
                        <h2 className='view-para'>...</h2>
                    </div>
                    <h1 className='view-title'>{title}</h1>
                    {text && <p className='view-para2'>{text}</p>}
                    {img && img.length && <img src={img[0]} className='view-img' alt="img" />}
                    <div className='view-head-card'>
                        <Avatar data={avatar} />
                        <div className='titled'>
                            <TbMessageDots  className='f view-message' />
                            <p className='view-para3 mr'>{comments} comments</p>
                            <FiFolderMinus  className='f view-message mr2' />
                            <p className='view-para3'>{files} files</p>
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    )
}

export default Card