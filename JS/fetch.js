let url = "https://jsonplaceholder.typicode.com/posts";
//fetch()
//fetch returns a promise
//fetch method takes url as a first argument
//http methods will be second argument

const fetchPosts = () => {
    fetch(url)
        .then((res) => {
            console.log(res);
            return res.json();
        })
        .then((data) => {
            console.log(data);
            let postData = "";
            data.map((posts) => {
                postData += `${posts.title}`;
            });
            postData += "";
            const divElement = document.getElementById("users");
            divElement.innerText = postData;
        })
        .catch((err) => {
            console.log(err);
        });
};
fetchPosts();