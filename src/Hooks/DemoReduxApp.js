import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import { actionFacebook } from "../redux/actions/FacebookAction";

export default function DemoReduxApp(props) {
  // useSelector thay thế cho mapStateToProps
  let comments = useSelector((state) => state.FacebookReducer.comments);

  // Lấy hàm dispatch từ useDispatch => để gửi giá trị lên reducer
  let dispatch = useDispatch();

  // Lấy thông tin người dùng nhập vào
  let [userComment, setUserComment] = useState({
    name: "",
    comments: "",
    avatar: "",
  });
  console.log(userComment);
  const handleChange = (e) => {
    let { value, name } = e.target;

    setUserComment({
      ...userComment,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let usComment = {
      ...userComment,
      avatar: `https://i.pravatar.cc/150?u=${userComment.name}`,
    };

    dispatch(actionFacebook(usComment));
  };
  return (
    <div className="container">
      <h3>Facebook App!</h3>
      <div className="card text-left">
        <div className="card-header">
          {comments.map((comment, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-1">
                  <img
                    style={{ height: 60, marginBottom: 10 }}
                    src={comment.avatar}
                    alt={comment.avatar}
                  />
                </div>
                <div className="col-11">
                  <h6 className="text-danger">{comment.name}</h6>
                  <p>{comment.content}</p>
                </div>
              </div>
            );
          })}
        </div>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-group">
            <h4 className="card-title">Name</h4>
            <input
              className="form-control"
              name="name"
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group">
            <h4 className="card-title">Content</h4>
            <input
              className="form-control"
              name="content"
              onChange={handleChange}
            ></input>
          </div>
          <div className="form-group">
            <button className="btn btn-success">Sent</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     comments: state.FacebookReducer.comments,
//   };
// };
// export default connect(mapStateToProps)(DemoReduxApp);
