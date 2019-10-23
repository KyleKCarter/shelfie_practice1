getInventory = (req, res) => {
    const db = req.app.get('db');
    db.get_inventory().then(product => {
        res.status(200).json(product)
    }).catch(error => {
        console.log(error);
        res.status(500).json("Computer no work")
    })
};

addProduct = (req, res) => {
    const db = req.app.get('db')
    const { image, name, price } = req.body;
    db.create_product(image, name, price).then(() => {
        res.sendStatus(200)
    }).catch(error => {
        console.log(error)
        res.status(500).json("Computer really no work");
    })
}

editProduct = (req, res, next) => {
    db = req.app.get('db')
    const { id } = req.params;
    const {image, name, price} = req.body;
    db.edit_product([+id, image, name, price])
        .then(() => {
            db.get_inventory().then(product => {
                res.status(200).json(product)
            }).catch(error => {
                console.log(error);
                res.status(500).json("Computer no work")
            })
        }).catch(error => {
            console.log(error)
            res.status(500).json("Your code no work")
        })
}

removeProduct = (req, res, next) => {
    db = req.app.get('db')
    const { id } = req.params;
    db.delete_product(id).then(product => {
        res.status(200).json(product)
    }).catch(error => {
        console.log(error)
        res.status(500).json("Computer no work");
    })
}

module.exports = {
    getInventory,
    addProduct,
    editProduct,
    removeProduct
}