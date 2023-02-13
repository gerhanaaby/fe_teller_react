function FieldNumeric() {
  return (
    <NumericInput 
	className="form-control" 
	value={ 50 } 
	min={ 0 } 
	max={ 100 } 
	step={ 1 } 
	precision={ 2 } 
	size={ 5 } 
/>
  );
}

export default FieldNumeric;