exports.create = async (req, res) => {
    console.log('req.body: ', req.body);
    console.log('req.file: ', req.file);

    res.json({
        message: 'Product Controller'
    })
}