import axios from "axios";
import { Post } from "./types";

const API_BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = () => axios.get<Post[]>(API_BASE_URL);
export const fetchPostById = (id: number) => axios.get<Post>(`${API_BASE_URL}/${id}`);
