import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const LoanCalculator = () => {
  const [amount, setAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [years, setYears] = useState('');
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const principal = parseFloat(amount);
    const rate = parseFloat(interest) / 100 / 12;
    const months = parseInt(years) * 12;
    const emiVal = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
    setEmi(emiVal.toFixed(2));
  };

  return (
    <Container className="my-5">
      <h2>Loan Calculator</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Loan Amount</Form.Label>
          <Form.Control type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Interest Rate (Annual %)</Form.Label>
          <Form.Control type="number" value={interest} onChange={(e) => setInterest(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Loan Tenure (Years)</Form.Label>
          <Form.Control type="number" value={years} onChange={(e) => setYears(e.target.value)} />
        </Form.Group>
        <Button variant="primary" onClick={calculateEMI}>
          Calculate EMI
        </Button>
      </Form>
      {emi && <h5 className="mt-4">Estimated EMI: ₹{emi} / month</h5>}
    </Container>
  );
};

export default LoanCalculator;