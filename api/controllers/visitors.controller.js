
const Visitors = require('../models/visitors.model')
const VisitorsCheckIn = require('../models/visitor_check_in.model')
const validationForm = require('../validations/visitors.validation')
        
class VisitorsController {
    getAll = () => {
        return (req, res, next) => {
            Visitors.getAll().then(data => {
                res.status(200).json({
                    rows : data
                })
            }).catch(err => {
                res.status(400).json(err)
            })
        }
    }
    report = () => {
        return (req, res, next) => {
            Visitors.report(req.query).then(data => {
                res.status(200).json(data)
            }).catch(err => {
                res.status(400).json(err)
            })
        }
    }
    getById = () => {
        return (req, res, next) => {
            const id = req.params.id
            if (!id) {
                res.status(401).json({
                    message: 'id is required'
                })
            }
            Visitors.getById(id).then(data => {
                res.status(200).json(data[0] ? {row : data[0]} : null)
            }).catch(err => {
                res.status(400).json(err)
            })
        }
    }
    getByColumn = () => {
        return (req, res, next) => {
            const column = req.query.column
            const value = req.query.value
            if (!column || !value) {
                res.status(401).json({
                    message: 'validation error'
                })
            }
            Visitors.getByColumn(column, value).then(data => {
                res.status(200).json({rows : data})
            }).catch(err => {
                res.status(400).json(err)
            })
        }
    }
    createOne = () => {
        return (req, res, next) => {
            const data = req.body
            const validation = validationForm(data)
            if (validation.error) {
                res.status(401).json({
                    message: validation.error.details[0].message
                })
            } else {
                data.user_id = req.user.user_id
                Visitors.createOne(data).then(data => {
                    res.status(200).json({new_data : data})
                }).catch(err => {
                    if(err.errno == 1062) {
                        res.status(400).json({
                            message: 'Phone Number already exists'
                        })
                    } else {
                        res.status(400).json(err)
                    }
                })
            }
        }
    }
    createOneAndCheck = () => {
        return (req, res, next) => {
            const data_visitor = req.body.visitor
            const data_check_in = req.body.check_in
            const validation = validationForm(data_visitor)
            if (validation.error) {
                res.status(401).json({
                    message: validation.error.details[0].message
                })
            } else {
                Visitors.createOne(data_visitor).then(data => {
                    data_check_in.visitor_id = data.visitor_id
                    VisitorsCheckIn.createOne(data_check_in).then(() => {
                        res.status(200).json({new_data : data})
                    })
                }).catch(err => {
                    res.status(400).json(err)
                })
            }
        }
    }
    updateByID = () => {
        return (req, res, next) => {
            const id = req.params.id
            if (!id) {
                res.status(401).json({
                    message: 'id is required'
                })
            }
            const data = req.body
            const validation = validationForm(data)
            if (validation.error) {
                res.status(401).json({
                    message: validation.error.details[0].message
                })
            } else {
                Visitors.updateByID(data, id).then(data => {
                    res.status(200).json({new_data : data})
                }).catch(err => {
                    res.status(400).json(err)
                })

            }
        }
    }
    updateByColumn = () => {
        return (req, res, next) => {
            const data = req.body
            const validation = validationForm(data)
            if (validation.error) {
                res.status(401).json({
                    message: validation.error.details[0].message
                })
            } else {
                if (req.query.column || req.query.value) {
                    const column = req.query.column
                    const value = req.query.value
                    Visitors.updateByColumn(data, column, value).then(data => {
                        res.status(200).json({new_data : data})
                    }).catch(err => {
                        res.status(400).json(err)
                    })
                } else {
                    res.status(400).json({
                        message: 'validation error'
                    })

                }
            }
        }
    }
    deleteByID = () => {
        return (req, res, next) => {
            const id = req.params.id
            if (!id) {
                res.status(401).json({
                    message: 'id is required'
                })
            }
            Visitors.deleteByID(id)
                .then(data => {
                    if (data == 1) {
                        res.status(200).json({
                            deleted_id: id
                        })
                    } else if (data == 0) {
                        res.status(200).json({
                            message: 'data not found'
                        })
                    }
                }).catch(err => {
                    res.status(400).json(err)
                })
        }
    }
    createList = () => {
        return (req, res, next) => {
            const data = req.body
            let list = []
            for (let index = 0; index < data.list.length; index++) {
                const element = data.list[index];
                const validation = validationForm(element)
                if (validation.error) {
                    res.status(401).json({
                        message: validation.error.details[0].message
                    })
                } else {
                    list.push(element)
                }
            }
            Visitors.createList(list).then(data => {
                res.status(200).json({rows : data})
            }).catch(err => {
                res.status(400).json(err)
            })
        }
    }
    deleteList = () => {
        return (req, res, next) => {
            const body = req.body
            if (body.list && body.list.length > 0) {
                Visitors.deleteList(body.list)
                    .then(data => {
                        if (data == 1) {
                            res.status(200).json({
                                deleted_list: body.list
                            })
                        } else if (data == 0) {
                            res.status(200).json({
                                message: 'data not found'
                            })
                        }else {
                            res.status(200).json({
                                deleted_list: body.list
                            })
                        }
                    }).catch(err => {
                        res.status(400).json(err)
                    })
            } else {
                res.status(401).json({
                    message: 'list is required'
                })
            }
        }
    }
}
module.exports = new VisitorsController()