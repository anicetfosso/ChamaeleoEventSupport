import { useEffect, useState } from "react";
import { fetchPosts } from "../Services/api";
import { Post } from "../Services/types";

const useFetchPosts = (): Post[] => {
	const [posts, setPosts] = useState<Post[]>([]);

	useEffect(() => {
		fetchPosts()
			.then((res) => setPosts(res.data))
			.catch((error) => console.error(error));
	}, []);

	return posts;
};

export default useFetchPosts;
