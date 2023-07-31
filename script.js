// JavaScript Code 
    /* Function to fetch blog posts from an API (simulated here with an array) */
    function fetchBlogPosts() {
        return new Promise((resolve, reject) => {
            // Simulated blog posts data
            const blogPosts = [
                {
                    title: "First Blog Post",
                    content: "This is my first blog post. Welcome to my blog!"
                },
                {
                    title: "Second Blog Post",
                    content: "In this post, I will talk about JavaScript boilerplate code for blogs."
                }
                // Add more blog posts here
            ];

            // Simulating a delay of 1 second to mimic API call
            setTimeout(() => {
                resolve(blogPosts);
            }, 1000);
        });
    }

    // Function to display blog posts on the page
    function displayBlogPosts() {
        const blogContainer = document.getElementById("blogContent");

        fetchBlogPosts()
            .then((blogPosts) => {
                let html = "";
                blogPosts.forEach((post) => {
                    html += `<h1>${post.title}</h1><p>${post.content}</p>`;
                });
                blogContainer.innerHTML = html;
            })
            .catch((error) => {
                console.error("Error fetching blog posts:", error);
            });
    }

    // Call the function to display blog posts when the page loads
    window.onload = displayBlogPosts;