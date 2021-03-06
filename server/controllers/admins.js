const db = require('../models');

exports.getAll = (req, res) => {
  db.Admin.findAll()
    .then((users) => {
      // console.log('getAll Admins =', users);
      res.json(users);
    }).catch((err) => {
      console.log(err);
    });
};

exports.getOne = (req, res) => {
  const id = req.params.id;
  db.Admin.findOne({
    where: {
      id,
    },
  }).then((user) => {
    if (!user) {
      res.json({ message: 'Invalid user id' });
    } else {
      res.json(user);
    }
  }).catch((err) => {
    console.log(err);
  });
};

exports.edit = (req, res) => {
  const id = req.params.id;
  db.Admin.update(req.body, {
    where: {
      id,
    },
  }).then((status) => {
    console.log('after edit admin, status=', status);

    if (status[0] > 0) {
      res.json(true);
    } else {
      res.json(false);
    }
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  db.Admin.update({
    isDeleted: true,
  }, {
    where: {
      id,
    },
  }).then((status) => {
    console.log('after delete admin, status=', status);

    if (status[0] > 0) {
      res.json(true);
    } else {
      res.json(false);
    }
  });
};
