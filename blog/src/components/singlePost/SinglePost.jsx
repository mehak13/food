import "./singlePost.css"

export default function SinglePost() {
    return(
        <div className="singlePost">
            <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Mehak</b></span>
          <span className="singlePostAuthor">Author: <b>1 hour ago</b></span>
      </div>
      <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos hic iusto dolore doloribus culpa officiis, magni cum neque odio vero laudantium tenetur est quo tempora alias, recusandae, commodi molestias rem!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos hic iusto dolore doloribus culpa officiis, magni cum neque odio vero laudantium tenetur est quo tempora alias, recusandae, commodi molestias rem!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos hic iusto dolore doloribus culpa officiis, magni cum neque odio vero laudantium tenetur est quo tempora alias, recusandae, commodi molestias rem!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos hic iusto dolore doloribus culpa officiis, magni cum neque odio vero laudantium tenetur est quo tempora alias, recusandae, commodi molestias rem!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos hic iusto dolore doloribus culpa officiis, magni cum neque odio vero laudantium tenetur est quo tempora alias, recusandae, commodi molestias rem!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos hic iusto dolore doloribus culpa officiis, magni cum neque odio vero laudantium tenetur est quo tempora alias, recusandae, commodi molestias rem!
      </p>
        </div>
        </div>
    )
}