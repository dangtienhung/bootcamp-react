import './App.css';

import { useState } from 'react';

function App() {
	// useState is a React Hook
	// useState dùng để quản lý trạng thái state của component
	const arrayName = ['Huy', 'Hùng', 'Hà', 'Hưng', 'Hải'];

	return (
		<div>
			{arrayName.map((name, index) => {
				return <div key={index}>{name}</div>;
			})}
		</div>
	);
}

export default App;
