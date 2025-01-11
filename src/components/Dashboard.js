import React, { useEffect, useState } from 'react';
import { db } from "../config/firebase";
import { getDocs, collection, addDoc , orderBy, query} from "firebase/firestore";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTextArea,
  MDBCardImage,
  MDBIcon
} from "mdb-react-ui-kit";
import { useAuth } from '../contexts/AuthContext';
import '../assets/index.css'

export default function Dashboard() {
  const [commentsList, setCommentsList] = useState([]);
  const [comment, setComment] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const commentsCollection = collection(db, "comments");
  const { currentUser } = useAuth();

  const getComments = async () => {
    try {
        const commentQuery = query(commentsCollection, orderBy("date", "desc"));
        //const data = await getDocs(commentsCollection);
        const data = await getDocs(commentQuery);
        const filteredData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        setCommentsList(filteredData);
    } catch (err) {
        console.error(err);
        setError("Failed to fetch comments.");
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  const handleSubmitComment = async () => {
    try {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleString();
        await addDoc(commentsCollection, {
            comment: comment.trim(),
            username: currentUser.email,
            date: formattedDate,
            userId: currentUser?.uid,
        });
      getComments();
      setComment("");
      setError("");
    } catch (err) {
      setError("Failed to add comment.");
      console.error(err);
    }
  };

  return (
    <div>
        <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
            <MDBRow className="justify-content-center">
                <MDBCard>
                <MDBCardBody>
                    <div className="d-flex flex-start align-items-center">
                    <MDBCardImage
                        className="rounded-circle shadow-1-strong me-3"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                        alt="avatar"
                        width="60"
                        height="60"
                    />
                    <div>
                        <h6 className="fw-bold text-primary mb-1">Lily Coleman</h6>
                        <p className="text-muted small mb-0">
                        Dog Sitter - Espoo
                        </p>
                    </div>
                    </div>

                    <p className="mt-3 mb-4 pb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip consequat.
                    </p>
                </MDBCardBody>
                <MDBCardFooter
                    className="py-3 border-0"
                    style={{ backgroundColor: "#f8f9fa" }}
                >
                </MDBCardFooter>
                </MDBCard>
           
            </MDBRow>
        </MDBContainer>
   
   <section style={{ backgroundColor: "#eee", minHeight: "100vh" }}>
      <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
        <MDBRow className="justify-content-center">
          <MDBCol md="12" lg="10" xl="8">
            <MDBCard>
              <MDBCardBody>
                {commentsList.length === 0 && (
                  <p className="text-center text-muted">
                    No Reviews yet. Be the first to leave a review!
                  </p>
                )}
                {commentsList.map((item) => (
                  <div key={item.id} className="mb-3">
                    <div className="d-flex flex-column align-items-start">
                        <h6 className="fw-bold text-primary mb-1">
                            {item.username}
                        </h6>
                        <p className="text-muted small mb-0">
                        Shared on: {item.date.substring(0, item.date.indexOf(','))}
                        </p>
                      <p className="mt-2 mb-0">{item.comment}</p>
                    </div>
                  </div>
                ))}
              </MDBCardBody>
              <MDBCardFooter
                className="py-3 border-0"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                {error && <p className="text-danger">{error}</p>}
                <div className="d-flex flex-start w-100">
                  <MDBTextArea
                    label="Leave a Review"
                    id="textAreaExample"
                    rows={4}
                    style={{ backgroundColor: "#fff" }}
                    wrapperClass="w-100"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </div>
                <div className="float-end mt-2 pt-1">
                  <MDBBtn
                    size="sm"
                    className="me-1-button"
                    onClick={handleSubmitComment}
                    disabled={!comment.trim() || !currentUser}
                  >
                    Submit
                  </MDBBtn>
                  <MDBBtn
                    size="sm"
                    className="me-1-button"
                    onClick={() => setComment("")}
                  >
                    Cancel
                  </MDBBtn>
                </div>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    </div>
  );
}
