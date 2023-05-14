interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

const getPost = async (postId: number): Promise<Post> => {
	// 3秒待機
	console.log("Sleep 3s...");
	await new Promise((resolve) => setTimeout(resolve, 3000));

	console.log(`Fetching Post(postId=${postId})...`);
	const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
	const res = await fetch(url, { cache: "no-store" });
	return res.json();
};

export const PostDetail = async (props: { postId: number }) => {
	const post = await getPost(props.postId);
	return (
		<ul>
			<li>userId: {post.userId}</li>
			<li>body: {post.body}</li>
		</ul>
	);
};
