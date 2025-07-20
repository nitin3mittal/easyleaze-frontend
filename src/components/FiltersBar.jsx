import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const FiltersBar = ({ onFilter }) => {
  const [bhk, setBhk] = useState('');
  const [furnishing, setFurnishing] = useState('');
  const [price, setPrice] = useState('');
  const [sort, setSort] = useState('');

  const handleFilter = (e) => {
    e.preventDefault();
    onFilter({ bhk, furnishing, price, sort });
  };

  return (
    <Form onSubmit={handleFilter} className="mb-4">
      <Form.Group className="mb-3">
        <Form.Label>BHK</Form.Label>
        <Form.Select value={bhk} onChange={(e) => setBhk(e.target.value)}>
          <option value="">All</option>
          <option value="1 BHK">1 BHK</option>
          <option value="2 BHK">2 BHK</option>
          <option value="3 BHK">3 BHK</option>
          <option value="4 BHK">4 BHK</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Furnishing</Form.Label>
        <Form.Select value={furnishing} onChange={(e) => setFurnishing(e.target.value)}>
          <option value="">All</option>
          <option value="Furnished">Furnished</option>
          <option value="Semi-Furnished">Semi-Furnished</option>
          <option value="Unfurnished">Unfurnished</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Price Range (₹ Lakhs)</Form.Label>
        <Form.Select value={price} onChange={(e) => setPrice(e.target.value)}>
          <option value="">All</option>
          <option value="50">Upto 50</option>
          <option value="100">Upto 100</option>
          <option value="200">Upto 200</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Sort By</Form.Label>
        <Form.Select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Default</option>
          <option value="newest">Newest First</option>
          <option value="low-high">Price Low to High</option>
          <option value="high-low">Price High to Low</option>
        </Form.Select>
      </Form.Group>

      <Button type="submit" variant="primary" className="w-100">
        Apply Filters
      </Button>
    </Form>
  );
};

export default FiltersBar;