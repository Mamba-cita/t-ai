import express from 'express';


const app = express();


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, Tomi!');
});


// API endpoints


app.get('/users', (req, res) => {
    // Fetch users from database
    res.json([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
    ]);
});


app.get('/story', (req, res) => {
    const url = req.query.url;
    console.log(url);

    return res.json({
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vulputate, orci non pharetra pulvinar, arcu erat finibus neque, et consectetur velit ex euismod nisi. In euismod orci vel dui luctus, id viverra arcu facilisis. Sed sagittis neque vel ipsum ultricies, non eleifend ipsum ultricies. Sed lobortis, ipsum vel bibendum viverra, velit urna semper est, id ullamcorper metus neque ac neque. Vestibulum facilisis, arcu eu pharetra ultricies, velit ex condimentum felis, in congue nunc libero ut justo.',
    });
  });
  








app.listen(5000, () => {
    console.log('Server is running on port 5000');
});