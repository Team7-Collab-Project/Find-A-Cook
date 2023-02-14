exports.create = async (req, res) => {
    console.log('req.body: ', req.body);
    console.log('req.file: ', req.file);
    { /**ADD USER */}

    res.json({
        message: "Inside Product Controller :)"
    })


    // const { category_name, category_description } = req.body;
    // console.log('New Category: ', req.body)

    // try {
    //     let newCategory = new Category({
    //         category_name: category_name,
    //         category_description: category_description,
    //     });

    //     await newCategory.save();

    //     res.status(200).json({
    //         successMessage: `${newCategory.category_name} was created :)`,
    //         newCategory,
    //     });
    // } catch (err) {
    //     console.log('Category Create Error: ', err);
    //     res.status(500).json({
    //         errorMessage: 'Please try again later',
    //     });
    // }
};