import React from 'react';

const TrasferForm = ({form, onChange, onSubmit}) => (
	<form onSubmit={onSubmit}>
		  <div className="row">
		    <div className="col">
				<input 
					type="text" 
					name="description" 
					value={form.description}
					className="form-control" 
					placeholder="Descrição"
					onChange={onChange}
				/>
		    </div>
		    <div className="col">
			  	<input 
					type="text" 
					name="amount" 
					value={form.amount} 
					className="form-control" 
					placeholder="Monto"
					onChange={onChange}
				/>
		    </div>
			<button type="submit" className="btn btn-primary mb-2">Add
			</button>
		  </div>
	</form>
);

export default TrasferForm;
