import React from "react";
import { View, FlatList } from "react-native";
import useFetchPosts from "../hooks/useFetchPosts";
import PostItem from "../components/PostItem";
import { Post } from "../Services/types";

interface HomePageProps {
	navigation: {
		navigate: (screen: string, params: { postId: number }) => void;
	};
}

const HomePage: React.FC<HomePageProps> = ({ navigation }) => {
	const posts = useFetchPosts();

	return (
		<View>
			<FlatList
				data={posts}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => <PostItem item={item} onPress={() => navigation.navigate("Details", { postId: item.id })} />}
			/>
		</View>
	);
};

export default HomePage;
