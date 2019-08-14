import React from 'react';

export const useFetch = (url, options = {}) => {
	const [data, setData] = React.useState(null);
	const [error, setError] = React.useState(null);

	React.useEffect(() => {
		const fetchData = async () => {
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
