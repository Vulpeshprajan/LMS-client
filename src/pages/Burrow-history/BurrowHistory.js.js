import React, { useEffect, useState } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchBurrowAction, returnBurrowAction } from "./burrowAction";
import { ReviewForm } from "../../components/review/ReviewForm";
import { CustomModal } from "../../components/modal/CustomModal";
const BurrowHistory = () => {
  const dispatch = useDispatch();

  const [selectedReview, setSelectedReview] = useState({})

  const { burrows } = useSelector((state) => state.burrowInfo);
  const { user } = useSelector((state) => state.userInfo);

  useEffect(() => {
    dispatch(fetchBurrowAction());
  }, [dispatch]);

  const handleOnReturn = ({ bookId, _id }) => {
    if (window.confirm("Are you sure you want to return this book?")) {
      const obj = { bookId, burrowId: _id };

      dispatch(returnBurrowAction(obj));
    }
  };
  const handleOnReview = (burrowBook) => {
    setSelectedReview(burrowBook)
    console.log(burrowBook)
  
  }



  return (
    <UserLayout title="BurrowHistory">
      {selectedReview?._id && <CustomModal>
      <ReviewForm selectedReview={selectedReview}/>
        </CustomModal>
}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Thumbnail</th>
            <th>Book Name</th>
            <th>Student Name</th>
            <th>Due Date</th>
            <th>Return Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {burrows.map((item, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>
                <img src={item.thumbnail} alt="" />
              </td>
              <td>{item.bookName}</td>
              <td>{item.userName}</td>
              <td>{item?.dueDate?.slice(0, 10)}</td>
              <td></td>
              <td>
                {item.userId === user._id && !item.isRetured ? (
                  <Button onClick={() => handleOnReturn(item)}> Return </Button>
                ) : (
                  <Button variant="success" onClick={()=> handleOnReview(item)}> Leave Review </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </UserLayout>
  );
};

export default BurrowHistory;
