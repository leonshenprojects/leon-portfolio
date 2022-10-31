import { GetStaticProps } from "next";
import { AppProps } from "next/app";
import { cmsBaseUrl } from "../lib/constants";
import { ApiResumeResume } from "../types/cmsShemas";

interface ResumePageProps {
  data: ApiResumeResume;
}

export default function Resume({ pageProps }: AppProps<ResumePageProps>) {
  console.log("Resume data", pageProps.data);

  return <div>About</div>;
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${cmsBaseUrl}/api/resume/?populate=%2A`);
  const data = await res.json();

  return { props: { pageProps: data } };
};
