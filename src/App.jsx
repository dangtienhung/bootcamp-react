import './App.css';

import { useState } from 'react';

function App() {
	// useState is a React Hook
	// useState dùng để quản lý trạng thái state của component
	const arrayName = ['Huy', 'Hùng', 'Hà', 'Hưng', 'Hải', 'Hà'];

	const [data, setData] = useState(arrayName);
	const handleClick = (name) => {
		const newDate = data.filter((nameItem) => {
			if (name !== nameItem) {
				return nameItem;
			}
		});
		setData(newDate);
	};

	return (
		<div className="flex flex-col gap-4">
			{data.map((name, index) => {
				return (
					<div key={index} className="flex gap-4 items-center">
						<p>{name}</p>
						<button
							onClick={() => handleClick(name)}
							className="border py-2 px-4 border-red-500 rounded"
						>
							Delete
						</button>
					</div>
				);
			})}
		</div>
	);
}

export default App;
