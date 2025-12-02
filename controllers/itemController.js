// CRUD OPERATION (ITEMS)

// CREATE

export const createItem = (req, res) => {
    const { title, description} = req.body;

    db.query(
        "INSERT INTO items (title, description) VALUE (?,?)",
        [title, description],
        (err) => {
            if(err) return res.json({error:err});
            res.json({message: "Item created successfully"});
        }
    )
};

// READ

export const getItems = (req, res) => {
    db.query("SELECT * FROM items"), (err,result) => {
        if(err) return res.json({error:err});
        res.json(result);
    }
}

// UPDATE

export const updateItem = (req, res) => {
    const {id} = req.params;

    const {title, description} = req.body;

    db.query(
        "UPDATE items SET title = ?, description = ? WHERE id = ?",
        [title, description, id],
        (err) => {
            if(err) return res.json({error:err});
            res.json({message: "Item updated successfully"});
        }
    );
};

// DELETE

export const deleteItem = (req, res) => {
    const {id} = req.params;

    db.query(
        "DELETE FROM items WHERE id = ?",
        [id],
        (err) => {
            if(err) return res.json({error:err});
            res.json({message: "Item deleted successfully"});
        }
    );
}                           