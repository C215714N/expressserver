import selectionModel from "../model/selectionModel.js"

const getFilter = (id) => id ? { 
    $or: [{_id: id}, { "login.username": id } ]
} : {};

export const getAll = (req, res) => {
    const filter = getFilter(req.params.id)
    selectionModel.find(filter)
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
}
export const insertMany = (req, res) => { 
    const newUser = new selectionModel(req.body);
    newUser.save()
        .then(() => res.status(201).json({ message: "candidato agregado", data: newUser }) )
        .catch(err => res.status(500).json(err))
}
export const updateOne = (req, res) => { 
    const { params: { id }, body } = req;
    const filter = getFilter(id);
    selectionModel.updateOne(filter, { $set: body }) 
        .then(()=> res.json({message: `datos de ${id} actualizados`}))
        .catch(err => res.status(500).json(err))
}
export const deleteOne = (req, res) => { 
    const filter = getFilter(req.params.id)
    selectionModel.deleteOne(filter)
        .then(()=> res.json({message: `candidato ${req.params.id} eliminado`}))
        .catch(err => res.status(500).json(err))
}