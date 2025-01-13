const validDateContent = (req, res, next) => {
    try {
        const { content } = req.body;
        if(!content) throw new Error("컨텐츠가 빈값입니다.");
        next();
    } catch (error) {
        console.log(error);
        res.send("컨텐츠가 빈값입니다.");
    }
}

module.exports = {
    validDateContent
}