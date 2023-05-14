import { Suspense } from "react";
import { PostDetail } from "./PostDetail";
import { ToggleButton } from "./ToggleButton";

interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

const getPosts = async (): Promise<Post[]> => {
	// 3秒待機
	console.log("Sleep 3s...");
	await new Promise((resolve) => setTimeout(resolve, 3000));

	console.log("Fetching Posts...");
	const url = "https://jsonplaceholder.typicode.com/posts";
	const res = await fetch(url, { cache: "no-store" });
	return res.json();
};

export const PostList = async () => {
	const posts = await getPosts();
	return (
		<ul>
			{posts
				.filter((post) => {
					return post.id <= 10;
				})
				.map((post) => {
					return (
						<li key={post.id}>
							<h3>
								{post.id} {post.title}
							</h3>
							<ToggleButton>
								<Suspense fallback={<div>Loading Detail...</div>}>
									{/* @ts-expect-error Async Server Component */}
									<PostDetail postId={post.id} />
								</Suspense>
							</ToggleButton>
						</li>
					);
				})}
		</ul>
	);
};
