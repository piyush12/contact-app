import React from 'react';

export const usePost = (url, options = {}) => {
	const [data, setData] = React.useState(null);
	const [error, setError] = React.useState(null);
	console.log('getoptions', options);

	React.useEffect(() => {
		const fetchData = async () => {
			console.log(options);
			try {
				const response = await fetch(url, options);
				const data = await response.json();
				setData(data);
			} catch (error) {
				setError(error);
			}
		};

		fetchData();
	}, [url]);
	return {data, error};
};
