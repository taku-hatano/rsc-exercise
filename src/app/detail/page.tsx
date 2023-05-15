import { PostListWithDetail } from "@/components";
import { Suspense } from "react";

const Home = () => {
	return (
		<main>
			<div>
				<h1>App Sample</h1>
			</div>
			<div>
				<Suspense fallback={<div>Loading...</div>}>
					{/* @ts-expect-error Async Server Component */}
					<PostListWithDetail />
				</Suspense>
			</div>
		</main>
	);
};

export default Home;
