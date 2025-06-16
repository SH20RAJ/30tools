import APITester from "@/components/tools/developer/APITesterTool";

export const metadata = {
  title: 'API Tester - Test REST APIs and HTTP Requests | 30tools',
  description: 'Test REST APIs and HTTP requests online. Send GET, POST, PUT, DELETE requests with custom headers and parameters.',
  keywords: 'api tester, rest api tester, http requests, api testing, postman alternative, api client',
  openGraph: {
    title: 'API Tester - Test REST APIs and HTTP Requests | 30tools',
    description: 'Test REST APIs and HTTP requests online.',
    type: 'website',
  },
};

export default function APITesterPage() {
  return <APITester />;
}
