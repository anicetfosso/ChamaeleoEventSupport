import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Post, PostItemProps } from "../Services/types";

const PostItem: React.FC<PostItemProps> = ({ item, onPress }) => (
	<TouchableOpacity onPress={onPress} style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" }}>
		<Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.title}</Text>
		<Text>{item.body.slice(0, 50)}...</Text>
	</TouchableOpacity>
);

export default PostItem;
