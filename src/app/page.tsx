import { PostList } from "@/components";
import { Suspense } from "react";

export default () => {
	return (
		<main>
			<div>
				<h1>App Sample</h1>
			</div>
			<div>
				<Suspense fallback={<div>Loading...</div>}>
					{/* @ts-expect-error Async Server Component */}
					<PostList />
				</Suspense>
			</div>
		</main>
	);
};
