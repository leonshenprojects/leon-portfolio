import { AppProps } from "next/app";
import { cmsBaseUrl } from "../../lib/constants";
import resumeTestData from "../../lib/resumeTestData";
import { ApiResumeResume } from "../../types/cmsShemas";

interface ResumePageProps {
	data: ApiResumeResume;
}

export default async function Resume() {
	const revalidatedData = await fetch(`${cmsBaseUrl}/api/resume/?populate=%2A`, {
    next: { revalidate: 60 },
  });

	// console.log("Resume data with server component", revalidatedData);

	return <div>About</div>;
}
