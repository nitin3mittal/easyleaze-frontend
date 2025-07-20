import { Container, Card } from 'react-bootstrap';

const AdminDashboard = () => {
  return (
    <Container fluid className="my-5">
      <h2>Admin Dashboard</h2>
      <div className="d-flex gap-4 flex-wrap">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Total Users</Card.Title>
            <Card.Text>120</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Properties Listed</Card.Title>
            <Card.Text>85</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Pending Approvals</Card.Title>
            <Card.Text>12</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default AdminDashboard;