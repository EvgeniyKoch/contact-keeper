import express from 'express';
import { users, auth, contacts } from './routes';

const app = express();

app.get('/', (req, res) => {
	res.json({ msg: "Welcome to the ContactKeeper API!"});
});

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/contacts', contacts);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
