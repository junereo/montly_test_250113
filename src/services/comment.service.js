const  {getAll, 
        getOne, 
        create, 
        update, 
        drop} = require('../repositories/comment.repository');

const {dateFormat} = require('../utils/comment.utils');

const getCommentAll = async () =>{
    const result = await getAll();
    
    result.map(value => {
        value.created_at = dateFormat(new Date(value.created_at));
        return value.created_at;
    });

    return result;
}

const getCommentOne = async (id) =>{
    const result = await getOne(id);
    return result;
}

const setCommentCreate = async (data) =>{
    const result = await create(data);
    return result;
}

const setCommentUpdate = async (data) =>{
    const result = await update(data);
    return result;
}

const setCommentDelete = async (id) =>{
    const result = await drop(id);
    return result;
}

module.exports = {getCommentAll, getCommentOne, setCommentCreate,
                  setCommentUpdate, setCommentDelete
                };