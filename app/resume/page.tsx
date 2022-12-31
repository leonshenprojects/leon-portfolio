import { AppProps } from 'next/app';
import { cmsBaseUrl } from '../../lib/constants';
import resumeTestData from '../../lib/resumeTestData';
import { ApiResumeResume } from '../../types/cmsShemas';

interface ResumePageProps {
	data: ApiResumeResume;
}

export default async function Resume() {
	const { data } = await getResumeData();

	console.log('Resume data with server component', data);

	return <div>About</div>;
}

const getResumeData = async () => {
	const res = await fetch(`${cmsBaseUrl}/api/resume/?populate=%2A`, {
		next: { revalidate: 60 },
	});

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}

	return res.json();
};
