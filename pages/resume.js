// Resume.js
import Layout, { siteTitle } from '../components/layout';

export default function Resume() {
  return (
    <Layout>
      <iframe 
        src="/public/resume.pdf" 
        style={{width:'100%', height:'800px'}} 
        frameborder="0" 
        allowFullScreen
      />
      <p>
        If you cannot view the file, please download it: 
        <a href="/public/resume.pdf">Download PDF</a>
      </p>
    </Layout>
  );
}