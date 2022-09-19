const message = (req,res) => {
    res.status(200).send(req.params.message)
    }

module.exports = message;