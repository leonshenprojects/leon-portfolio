import { gql } from '@apollo/client';

export const RESUME_QUERY = gql`
	query {
		resume {
			data {
				attributes {
					firstName
					lastName
					profession
					Summary
					address {
						addressLine1
						addressLine2
						postCode
						city
						country
					}
					mobile {
						countryCode
						areaCode
						number
					}
					email
					linkedInUrl
					profilePicture {
						data {
							attributes {
								name
								alternativeText
								width
								height
								url
							}
						}
					}
					workExperience {
						id
						role
						companyName
						startDate
						endDate
						description
						city
					}
					education {
						id
						degree
						institution
						startDate
						endDate
						description
					}
					Skills {
						id
						name
						category
					}
					interests {
						id
						name
					}
				}
			}
		}
	}
`;
