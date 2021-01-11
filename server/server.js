const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


let posts =[
    {
      id: 0,
      title: "Title Zero",
      headline: "Headline Zero",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum justo id mattis fringilla. Aliquam varius lorem sed felis faucibus, ac eleifend dolor congue. Morbi consequat ipsum non sapien blandit viverra. Nullam nec convallis felis. Etiam nec varius lectus. Fusce lacus tellus, bibendum ut euismod et, sollicitudin a diam. Integer tellus nunc, tempor sed facilisis id, accumsan a dolor. Donec fermentum nisi id est gravida, vel dignissim ante efficitur. Donec convallis tincidunt sem, at euismod lectus vulputate id. Nullam bibendum commodo ante eu varius. Morbi tincidunt nisi rutrum ex imperdiet maximus. Vivamus sit amet ipsum vitae sem tristique posuere ut et leo. Donec placerat magna sed nisl commodo, ac auctor elit tempus.",
      date: "10/12/2020 @ 10:42",
      comments: [
        { user: "Anonymous Person",
          comment: "This is my first comment on the site.",
          date: "12/12/2020 @ 10:42",
        },
      ],
    },
    {
      id: 1,
      title: "Title One",
      headline: "Headline One",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum justo id mattis fringilla. Aliquam varius lorem sed felis faucibus, ac eleifend dolor congue. Morbi consequat ipsum non sapien blandit viverra. Nullam nec convallis felis. Etiam nec varius lectus. Fusce lacus tellus, bibendum ut euismod et, sollicitudin a diam. Integer tellus nunc, tempor sed facilisis id, accumsan a dolor. Donec fermentum nisi id est gravida, vel dignissim ante efficitur. Donec convallis tincidunt sem, at euismod lectus vulputate id. Nullam bibendum commodo ante eu varius. Morbi tincidunt nisi rutrum ex imperdiet maximus. Vivamus sit amet ipsum vitae sem tristique posuere ut et leo. Donec placerat magna sed nisl commodo, ac auctor elit tempus.",
      date: "07/12/2020 @ 14:14",
      comments: [],
    },
    {
      id: 2,
      title: "Title Two",
      headline: "Headline Two",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum justo id mattis fringilla. Aliquam varius lorem sed felis faucibus, ac eleifend dolor congue. Morbi consequat ipsum non sapien blandit viverra. Nullam nec convallis felis. Etiam nec varius lectus. Fusce lacus tellus, bibendum ut euismod et, sollicitudin a diam. Integer tellus nunc, tempor sed facilisis id, accumsan a dolor. Donec fermentum nisi id est gravida, vel dignissim ante efficitur. Donec convallis tincidunt sem, at euismod lectus vulputate id. Nullam bibendum commodo ante eu varius. Morbi tincidunt nisi rutrum ex imperdiet maximus. Vivamus sit amet ipsum vitae sem tristique posuere ut et leo. Donec placerat magna sed nisl commodo, ac auctor elit tempus.",
      date: "03/12/2020 @ 11:10",
      comments: [],
    }
  ];

//let posts = []

app.get('/', (req, res) => {
  res.send(posts);
})

app.get('/story/:id', (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find(post => post.id === id);
  res.send(post);
});

app.post('/story/:id', (req, res) => {
  let id = Number(req.params.id);
  let comment = {
    user: req.body.name,
    comment: req.body.content,
    date: req.body.date,
  }
  posts[id].comments.push(comment);
  console.log(posts);
})

app.post('/new', (req, res) => {
  let post = {
    id: posts.length,
    title: req.body.title,
    headline: req.body.headline,
    body: req.body.body,
    date: req.body.date,
    comments: [],
  }
  posts.push(post);
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})