import { Container, Table, Button } from 'react-bootstrap';

const AdminApprovals = () => {
  const dummyProperties = [
    { id: 1, title: '2 BHK Flat in Gurugram' },
    { id: 2, title: '3 BHK Villa in Noida' },
    { id: 3, title: 'Office Space in Hyderabad' },
  ];

  const handleApprove = (title) => {
    alert(`Property "${title}" approved!`);
  };

  const handleReject = (title) => {
    alert(`Property "${title}" rejected!`);
  };

  return (
    <Container fluid className="my-5">
      <h2>Listing Approval Queue</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Property Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyProperties.map((property) => (
            <tr key={property.id}>
              <td>{property.id}</td>
              <td>{property.title}</td>
              <td>
                <Button
                  variant="success"
                  className="me-2"
                  onClick={() => handleApprove(property.title)}
                >
                  Approve
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleReject(property.title)}
                >
                  Reject
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminApprovals;