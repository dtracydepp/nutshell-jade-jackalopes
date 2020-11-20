// converts news object to HTML 


export const NewsAsHTML =(newsObject) => {
    return `
    <div class="newsContainer">
        <div class "news--title">Title: ${newsObject.title}</div>
        <div class "news--synopsis">Synopsis: ${newsObject.synopsis}</div>
        <div class "news--url">Link: <a href="${newsObject.url}">${newsObject.url}</a></div>
        <p>${new Date(newsObject.timestamp).toLocaleDateString('en-US')}</p>
       <button id="deleteNote--${newsObject.id}">Delete</button>
    </div>
    `
}

