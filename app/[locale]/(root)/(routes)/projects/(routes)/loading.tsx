import type { NextPage } from "next";
import { Skeleton } from "@/components/ui/skeleton";
const Loading: NextPage = () => {
	return (
		<div className="flex flex-col space-y-10 md:flex-wrap md:flex-row md:space-y-0 md:gap-10 items-center justify-center">
			<Skeleton className="w-[350px] h-[500px] rounded-lg" />
			<Skeleton className="w-[350px] h-[500px] rounded-lg" />
			<Skeleton className="w-[350px] h-[500px] rounded-lg" />
			<Skeleton className="w-[350px] h-[500px] rounded-lg" />
			<Skeleton className="w-[350px] h-[500px] rounded-lg" />
			<Skeleton className="w-[350px] h-[500px] rounded-lg" />
		</div>
	);
};

export default Loading;
