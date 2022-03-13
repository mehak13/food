import "./post.css"

export default function Post() {
    return(
        <div className="post">
        <img
        className="postImg"
        src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
        alt=""
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Italian</span>
                <span className="postCat">Continental</span>
                <span className="postCat">Chinese</span>
                <span className="postCat">Indian</span>
                <span className="postCat">Sea Food</span>
            </div>
            <span className="postTitle">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            </span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>  
        <p className="postDesc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit exercitationem rem soluta quo asperiores et dolorum tempore voluptates excepturi? Ad beatae itaque quaerat eius dolor vitae nisi soluta praesentium aut!
        </p>
        </div>
    )
}