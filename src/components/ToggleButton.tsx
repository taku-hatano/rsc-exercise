"use client";

import { ReactNode, useState } from "react";

export const ToggleButton = (props: { children: ReactNode }) => {
	const [open, setOpen] = useState(true);

	return (
		<>
			<button onClick={() => setOpen(!open)}>{open ? "閉じる" : "開く"}</button>
			{open && props.children}
		</>
	);
};
