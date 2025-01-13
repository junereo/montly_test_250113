const {pool} = require('./db');


const getAll = async () => {
    const [result] = await pool.query(`SELECT * FROM comments`);
    return result;
};

const getOne = async (id) => {
    const [result] = await pool.query(`SELECT * FROM comments WHERE id = "${id}"`);
    return result;
};

const create = async (data) => {
    const {user_id, content} = data;

    const result = await pool.query(`INSERT INTO comments(user_id, content) VALUES("${user_id}", "${content}");
        `);

    return result;
};

const update = async (data) => {
    const {id, content} = data;

    const result = await pool.query(`UPDATE comments set content="${content}" WHERE id = ${id};`);
    return result;
};

const drop = async (id) => {
    const result = await pool.query(`DELETE FROM comments WHERE id = ${id};`);
    return result;
};

module.exports = {getAll, getOne, create, update, drop};