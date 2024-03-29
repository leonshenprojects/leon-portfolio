export const data = {
	resume: {
		__typename: 'ResumeEntityResponse',
		data: {
			__typename: 'ResumeEntity',
			attributes: {
				__typename: 'Resume',
				firstName: 'Leon',
				lastName: 'Shen',
				profession: 'Software Engineer',
				Summary:
					"As a proactive software engineer, I'm dedicated to crafting user-focused solutions for diverse industries. My career journey from New Zealand to Amsterdam has allowed me to contribute to a variety of sectors including journalism, indoor farming tech, and e-commerce, currently at the Netherlands' largest webshop. While I'm not actively seeking a new role, I'm always open to exploring compelling opportunities where my skills can further drive innovation and growth.",
				address: {
					__typename: 'ComponentUserAddress',
					addressLine1: 'Johan Hofmanstraat 315',
					addressLine2: null,
					postCode: '1069KD',
					city: 'Amsterdam',
					country: 'Netherlands',
				},
				mobile: {
					__typename: 'ComponentUserMobile',
					countryCode: 31,
					areaCode: 6,
					number: 27140316,
				},
				email: 'leon.g.shen0709@gmail.com',
				linkedInUrl: 'https://www.linkedin.com/in/leon-shen',
				profilePicture: {
					__typename: 'UploadFileEntityResponse',
					data: {
						__typename: 'UploadFileEntity',
						attributes: {
							__typename: 'UploadFile',
							name: 'thumbnail_Profile_picture_Leon_Shen.jpg',
							alternativeText: null,
							width: 156,
							height: 156,
							url: 'https://res.cloudinary.com/dubjjvwgs/image/upload/v1690908458/thumbnail_Profile_picture_Leon_Shen_7cb416eb6b.jpg',
						},
					},
				},
				workExperience: [
					{
						__typename: 'ComponentResumeWorkExperience',
						id: '1',
						role: 'Senior Software Engineer (Front-end)',
						companyName: 'bol.com',
						startDate: '2022-11-01',
						endDate: null,
						description:
							'- Part of a multi-disciplinary product team that maintains and innovates upon the bol.com homepage to improve key metrics such as click-through and conversion rate.\n' +
							'- Collaborate closely with the advertising teams to serve relevant ads throughout the webshop.\n' +
							'- Rebuilding the homepage in the new micro frontend architecture with Nx, Next.js and GraphQL.',
						city: 'Utrecht',
					},
					{
						__typename: 'ComponentResumeWorkExperience',
						id: '2',
						role: 'Senior Software Engineer (Front-end)',
						companyName: 'Infarm',
						startDate: '2022-06-01',
						endDate: '2022-10-31',
						description: null,
						city: 'Amsterdam',
					},
					{
						__typename: 'ComponentResumeWorkExperience',
						id: '3',
						role: 'Software Engineer (Front-end)',
						companyName: 'Infarm',
						startDate: '2021-09-01',
						endDate: '2022-05-31',
						description:
							'- Built features for two React-Native apps that allowed maintenance experts and growers to interact with the indoor farms.\n' +
							'- Contributed to several internal tools that allowed our applications to efficiently communicated with the various back-end and IoT services. E.g. GraphQL middleware and a library for BLE communication with the farms.\n' +
							'- Mentored junior team members.\n' +
							'- Collaborated with fellow engineers to write and refine technical tasks.',
						city: 'Amsterdam',
					},
					{
						__typename: 'ComponentResumeWorkExperience',
						id: '4',
						role: 'Software Engineer (Front-end)',
						companyName: 'De Correspondent',
						startDate: '2019-10-01',
						endDate: '2021-08-31',
						description:
							'- Part of the small team that delivered the De Correspondent podcast app from scratch using React Native. This app is listed in the Apple App Store and the Google Play Store, with over 35.000 active users when I was working on it.\n' +
							'- Owned the delivery of the commenting features, allowing members to interact with each other and the editorial team directly from within the app.\n' +
							"- Migrated the platform's commenting and notification features from React to Vue.\n" +
							'- Worked in Scrum teams to continually build upon and maintain the website, CMS, and mobile application.\n' +
							'- Reviewed pull requests, maintain coding standards, and help with shaping the frontend codebases.',
						city: 'Amsterdam',
					},
					{
						__typename: 'ComponentResumeWorkExperience',
						id: '5',
						role: 'Software Engineer (Front-end)',
						companyName: 'Weka Online',
						startDate: '2018-04-01',
						endDate: '2019-09-30',
						description:
							'- Collaborated with the design and SEO team to deliver custom website builds based on client requirements using WordPress.\n' +
							'- Added e-commerce capability to websites using WooCommerce and implemented customisations.\n' +
							'- Developed integration solutions using PHP and cURL by consuming Restful APIs. Integrated MYOB Advanced with Woocommerce so that customers, orders, and products can be synced automatically.',
						city: 'Auckland',
					},
					{
						__typename: 'ComponentResumeWorkExperience',
						id: '6',
						role: 'Payroll Officer',
						companyName: 'Watercare Services',
						startDate: '2015-05-01',
						endDate: '2018-03-31',
						description:
							'- Managed a payroll of 80 employees.\n' +
							'- Conducted KPI, productivity and health &amp; safety reporting.',
						city: 'Auckland',
					},
					{
						__typename: 'ComponentResumeWorkExperience',
						id: '7',
						role: 'Eligibility Officer',
						companyName: 'Health Alliance',
						startDate: '2014-05-01',
						endDate: '2015-04-30',
						description:
							'- Determined the eligibility of patients for publicly funded healthcare.\n' +
							'- Other responsibilities included invoicing and reporting.',
						city: 'Auckland',
					},
				],
				education: [
					{
						__typename: 'ComponentResumeEducation',
						id: '1',
						degree: 'Postgraduate Certificate in Information Technology',
						institution: 'University of Auckland',
						startDate: '2016-05-01',
						endDate: '2017-06-30',
						description: '- _top student award_',
					},
					{
						__typename: 'ComponentResumeEducation',
						id: '2',
						degree: 'Bachelor of Commerce (Accounting and Finance)',
						institution: 'University of Auckland',
						startDate: '2010-01-01',
						endDate: '2014-12-31',
						description: null,
					},
				],
				Skills: [
					{
						__typename: 'ComponentResumeSkill',
						id: '1',
						name: 'Typescript',
						category: 'Languages',
					},
					{
						__typename: 'ComponentResumeSkill',
						id: '2',
						name: 'Javascript',
						category: 'Languages',
					},
					{
						__typename: 'ComponentResumeSkill',
						id: '3',
						name: 'HTML/CSS (SCSS)',
						category: 'Languages',
					},
					{
						__typename: 'ComponentResumeSkill',
						id: '4',
						name: 'Java',
						category: 'Languages',
					},
					{
						__typename: 'ComponentResumeSkill',
						id: '5',
						name: 'React',
						category: 'Technologies',
					},
					{
						__typename: 'ComponentResumeSkill',
						id: '6',
						name: 'React Native',
						category: 'Technologies',
					},
					{
						__typename: 'ComponentResumeSkill',
						id: '7',
						name: 'React Testing Library',
						category: 'Technologies',
					},
					{
						__typename: 'ComponentResumeSkill',
						id: '8',
						name: 'Jest',
						category: 'Technologies',
					},
					{
						__typename: 'ComponentResumeSkill',
						id: '9',
						name: 'Cypress',
						category: 'Technologies',
					},
					{
						__typename: 'ComponentResumeSkill',
						id: '10',
						name: 'Storybook',
						category: 'Technologies',
					},
					{
						__typename: 'ComponentResumeSkill',
						id: '11',
						name: 'Node.js',
						category: 'Technologies',
					},
					{
						__typename: 'ComponentResumeSkill',
						id: '12',
						name: 'Next.js',
						category: 'Technologies',
					},
					{
						__typename: 'ComponentResumeSkill',
						id: '13',
						name: 'Nx',
						category: 'Technologies',
					},
					{
						__typename: 'ComponentResumeSkill',
						id: '14',
						name: 'Stitches (CSS-in-JS)',
						category: 'Technologies',
					},
				],
				interests: [
					{
						__typename: 'ComponentResumeInterest',
						id: '1',
						name: 'Hiking',
					},
					{
						__typename: 'ComponentResumeInterest',
						id: '2',
						name: 'Ultimate Frisbee',
					},
					{
						__typename: 'ComponentResumeInterest',
						id: '3',
						name: 'Bouldering',
					},
					{
						__typename: 'ComponentResumeInterest',
						id: '4',
						name: 'Tennis',
					},
					{
						__typename: 'ComponentResumeInterest',
						id: '5',
						name: 'Travelling',
					},
				],
			},
		},
	},
};
