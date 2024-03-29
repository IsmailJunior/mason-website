import type { NextPage } from "next";
import List from "@/components/list";
import { collection, getDocs } from "firebase/firestore";
import { store } from "@/lib/firebase";
import { deleteProject } from "@/actions/actions";
const Page: NextPage = async () => {
	const projectsCollection = collection(store, "projects");
	const projectsSnapshot = await getDocs(projectsCollection);
	const projects = projectsSnapshot.docs.map(doc => ({
		...doc.data(),
		id: doc.id,
	}));
	return (
		<div>
			<List items={projects} deleteFunc={deleteProject} />
		</div>
	);
};

export default Page;
