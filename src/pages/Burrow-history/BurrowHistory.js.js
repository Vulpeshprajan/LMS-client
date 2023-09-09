import React, { useEffect } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getBurrowAction } from "./burrowAction";
const BurrowHistory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBurrowAction());
  }, [dispatch]);

  return (
    <UserLayout title="BurrowHistory">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Thumbnail</th>
            <th>Book Name</th>
            <th>Student Name</th>
            <th>Burrow Date</th>
            <th>Return Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </UserLayout>
  );
};

export default BurrowHistory;
