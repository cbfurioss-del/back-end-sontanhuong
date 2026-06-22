const users = [
  { id: 1, name: 'Nguyen Van A', email: 'a@example.com' },
  { id: 2, name: 'Tran Thi B', email: 'b@example.com' }
];

exports.getStatus = (req, res) => {
  res.json({
    success: true,
    app: process.env.APP_NAME || 'back-end-sontanhuong',
    status: 'OK'
  });
};

exports.getUsers = (req, res) => {
  res.json({ success: true, users });
};

exports.createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ success: false, message: 'Name and email are required.' });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser);

  res.status(201).json({ success: true, user: newUser });
};
