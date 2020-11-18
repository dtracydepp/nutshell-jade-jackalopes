// converts news object to HTML 


export const NewsAsHTML =(newsObject) => {
    return `
    <div class="newsContainer">
        <h3 class "news">My News Articles:</h3>
        <div class "news--title">Title: ${newsObject.title}</div>
        <div class "news--synopsis">Synopsis: ${newsObject.synopsis}</div>
        <div class "news--url">Link to Article: ${newsObject.url}</div>
        <p>${new Date(newsObject.timestamp).toLocaleDateString('en-US')}</p>
       <button id="deleteNote--${newsObject.id}">Delete</button>
    </div>
    `
}

