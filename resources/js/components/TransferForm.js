import React from 'react';

const TrasferForm = () => (
	<form>
		  <div className="row">
		    <div className="col">
		      <input type="text" name="description" className="form-control" placeholder="Descrição"/>
		    </div>
		    <div className="col">
		      <input type="text" name="amount" className="form-control" placeholder="Monto"/>
		    </div>
			<button type="submit" className="btn btn-primary mb-2">Add
			</button>
		  </div>
	</form>
);

export default TrasferForm;
