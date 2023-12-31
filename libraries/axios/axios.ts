import axios from 'axios';

export const getBlogs = async () => {
	const response = await axios({
		method: 'GET',
		url: `${process.env.NEXT_PUBLIC_BLOG_URL}/articles?username=ctvnjhnrmmlp`,
	});

	return response.data;
};

export const getBlog = async (id: number) => {
	const response = await axios({
		method: 'GET',
		url: `${process.env.NEXT_PUBLIC_BLOG_URL}/articles/${id}`,
	});

	return response.data;
};
