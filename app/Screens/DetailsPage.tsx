import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { fetchPostById } from "../Services/api";
import { Post } from "../Services/types";

const DetailsPage = ({ route }: { route: any }) => {
	const { postId } = route.params;
	const [post, setPost] = useState<Post | null>(null);

	useEffect(() => {
		fetchPostById(postId)
			.then((res) => setPost(res.data))
			.catch((error) => console.error(error));
	}, [postId]);

	if (!post)
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		);

	return (
		<View style={{ padding: 10 }}>
			<Text
				style={{
					fontSize: 20,
					fontWeight: "bold",
					marginBottom: 10,
				}}>
				Title: {post.title}
			</Text>
			<Text
				style={{
					fontSize: 16,
					marginBottom: 10,
				}}>
				Body: {post.body}
			</Text>
		</View>
	);
};

export default DetailsPage;
