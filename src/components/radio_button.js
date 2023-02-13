import Form from 'react-bootstrap/Form';

function CheckExample() {
  return (
    <Form>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
        <Form.Check
          inline
          label="1"
          name="group1"
          type={type}
          id={`inline-${type}-1`}
        />
        <Form.Check
          inline
          label="2"
          name="group1"
          type={type}
          id={`inline-${type}-2`}
        />
      </div>
      ))}
    </Form>
  );
}

export default CheckExample;