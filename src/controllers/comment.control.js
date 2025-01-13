const {getCommentAll, 
       getCommentOne, 
       setCommentCreate,
       setCommentUpdate, 
       setCommentDelete
    } = require('../services/comment.service');

const getList = async (req, res)=>{
    const commentList =  await getCommentAll();
    res.render("list.html",{
        commentList
    });
};

const viewList = async (req, res)=>{
    const id = parseInt(req.params.id);
    console.log(id);
    const [comment] = await getCommentOne(id);
    res.render("write.html",{
        comment
    });
};

const writeList = async (req, res)=>{
    const { content } = req.body;
    const data = {
        user_id : "kim",
        content : content
    }
    await setCommentCreate(data);

    res.status(200).redirect('/comment/list');
};

const updateList = async (req, res)=>{
    const id = parseInt(req.params.id);
    const { content } = req.body;
    
    const data = {
        id,
        content
    }

    const [comment] = await setCommentUpdate(data);
    console.log(comment);
    res.status(200).redirect('/comment/list');
};

const deleteList = async (req, res)=>{
    const id = parseInt(req.params.id);
    await setCommentDelete(id);
    res.status(200).redirect('/comment/list');
};

module.exports = {getList, viewList, updateList, writeList, deleteList};