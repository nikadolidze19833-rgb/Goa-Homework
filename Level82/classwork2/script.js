fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {
        const filteredPosts = posts.filter(post =>
            post.title.startsWith("s")
        );

        console.log(filteredPosts);
    })
    .catch(error => console.log(error));;