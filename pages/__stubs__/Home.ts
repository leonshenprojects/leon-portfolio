import { ResumePageProps } from '..';

export const MOCK_HOME: ResumePageProps = {
	data: {
		createdAt: '2022-10-28T19:55:20.675Z',
		updatedAt: '2022-10-31T09:53:45.205Z',
		publishedAt: '2022-10-28T20:02:46.264Z',
		firstName: 'Leon',
		lastName: 'Shen',
		profession: 'Software Engineer',
		Summary:
			'I am a motivated software engineer with a passion for building intuitive user experiences for inspiring products. I enjoy collaborating with stakeholders to scope and refine features. Since moving to Amsterdam from New Zealand , I have worked for a dutch journalism platform and currently an indoor farming startup. I am now looking for a new challenge at a company where my skills can continue to add value.',
		address: {
			id: '1',
			addressLine1: 'Johan Hofmanstraat 315',
			addressLine2: null,
			postCode: '1069KD',
			city: 'Amsterdam',
			country: 'Netherlands',
		},
		mobile: {
			id: '1',
			countryCode: 31,
			areaCode: 6,
			number: 27140316,
		},
		email: 'leon.g.shen0709@gmail.com',
		linkedInUrl: 'https://www.linkedin.com/in/leon-shen',
		profilePicture: {
			data: {
				attributes: {
					name: 'Profile picture - Leon Shen.jpg',
					alternativeText: 'Profile picture - Leon Shen.jpg',
					width: 200,
					height: 200,
					url: '/uploads/Profile_picture_Leon_Shen_c0d9623cc6.jpg',
					hash: '',
					mime: '',
					size: 200,
					provider: '',
				},
			},
		},
		workExperience: [
			{
				id: '1',
				role: 'Senior Software Engineer (Front-end)',
				companyName: 'Infarm',
				startDate: '2022-06-01',
				endDate: null,
				description: null,
				city: 'Amsterdam',
			},
			{
				id: '2',
				role: 'Software Engineer (Front-end)',
				companyName: 'Infarm',
				startDate: '2021-09-01',
				endDate: '2022-05-31',
				description:
					'- Built features for two React-Native apps that allowed maintenance experts and growers to interact with the indoor farms.\n- Contributed to several internal tools that allowed our applications to efficiently communicated with the various back-end and IoT services. E.g. GraphQL middleware and a library for BLE communication with the farms.\n- Mentored junior team members.\n- Collaborated with fellow engineers to write and refine technical tasks.',
				city: 'Amsterdam',
			},
			{
				id: '5',
				role: 'Software Engineer (Front-end)',
				companyName: 'De Correspondent',
				startDate: '2019-10-01',
				endDate: '2021-08-31',
				description:
					"- Part of the small team that delivered the De Correspondent podcast app from scratch using React Native. This app is listed in the Apple App Store and the Google Play Store, with over 35.000 active users when I was working on it.\n- Owned the delivery of the commenting features, allowing members to interact with each other and the editorial team directly from within the app.\n- Migrated the platform's commenting and notification features from React to Vue.\n- Worked in Scrum teams to continually build upon and maintain the website, CMS, and mobile application.\n- Reviewed pull requests, maintain coding standards, and help with shaping the frontend codebases.",
				city: 'Amsterdam',
			},
			{
				id: '6',
				role: 'Software Engineer (Front-end)',
				companyName: 'Weka Online',
				startDate: '2018-04-01',
				endDate: '2019-09-30',
				description:
					'- Collaborated with the design and SEO team to deliver custom website builds based on client requirements using WordPress.\n- Added e-commerce capability to websites using WooCommerce and implemented customisations.\n- Developed integration solutions using PHP and cURL by consuming Restful APIs. Integrated MYOB Advanced with Woocommerce so that customers, orders, and products can be synced automatically.',
				city: 'Auckland',
			},
			{
				id: '7',
				role: 'Payroll Officer',
				companyName: 'Watercare Services',
				startDate: '2015-05-01',
				endDate: '2018-03-31',
				description:
					'- Managed a payroll of 80 employees.\n- Conducted KPI, productivity and health & safety reporting.',
				city: 'Auckland',
			},
			{
				id: '8',
				role: 'Eligibility Officer',
				companyName: 'Health Alliance',
				startDate: '2014-05-01',
				endDate: '2015-04-30',
				description:
					'- Determined the eligibility of patients for publicly funded healthcare.\n- Other responsibilities included invoicing and reporting.',
				city: 'Auckland',
			},
		],
		education: [
			{
				id: '1',
				degree: ' Postgraduate Certicate in Information Technology',
				institution: 'University of Auckland',
				startDate: '2016-05-01',
				endDate: '2017-06-30',
				description: '- Graduated with the _top student award_.',
			},
			{
				id: '2',
				degree: ' Bachelor of Commerce (Accounting and Finance)',
				institution: 'University of Auckland',
				startDate: '2010-01-01',
				endDate: '2014-12-31',
				description: null,
			},
		],
		Skills: [
			{
				id: '1',
				name: 'Typescript',
				category: 'Languages',
			},
			{
				id: '4',
				name: 'Javascript',
				category: 'Languages',
			},
			{
				id: '3',
				name: 'HTML/CSS',
				category: 'Languages',
			},
			{
				id: '5',
				name: 'React',
				category: 'Technologies',
			},
			{
				id: '2',
				name: 'React Native',
				category: 'Technologies',
			},
			{
				id: '6',
				name: 'Jest',
				category: 'Technologies',
			},
			{
				id: '7',
				name: 'Node.js',
				category: 'Technologies',
			},
			{
				id: '8',
				name: 'Next.js',
				category: 'Technologies',
			},
			{
				id: '9',
				name: 'Git',
				category: 'Other',
			},
			{
				id: '11',
				name: 'Unit testing',
				category: 'Other',
			},
		],
		interests: [
			{
				id: '1',
				name: 'Hiking',
			},
			{
				id: '4',
				name: 'Ultimate Frisbee',
			},
			{
				id: '2',
				name: 'Bouldering',
			},
			{
				id: '3',
				name: 'Travelling',
			},
		],
	},
};
