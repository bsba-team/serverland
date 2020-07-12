module.exports = async (app) => {
    const posts = require('./controller.js');

    // Create a new Post
    await app.post('/posts', posts.create);

    // Retrieve all Posts
    await app.get('/posts', posts.findAll);

    // Retrieve a single Post with postId
    await app.get('/posts/:postId', posts.findOne);

    // Update a Post with postId
    await app.put('/posts/:postId', posts.update);

    // Delete a Post with postId
    await app.delete('/posts/:postId', posts.delete);
}