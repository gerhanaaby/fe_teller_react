function Checkbox() {
    return (
      <Form>
        {['checkbox'].map((type) => (
          <div key={`default-${type}`} className="mb-3">
            <Form.Check 
                type={type}
                id={`default-${type}`}
                label={`default ${type}`}
            />

            <Form.Check
                type={type}
                id={`default-${type}`}
                label={`default ${type}`}
            />
          </div>
        ))}
      </Form>
    );
  }
  
  export default Checkbox;