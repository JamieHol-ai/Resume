import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Navbar from '../components/navbar';


export default function Resume() {
    return (
        <Layout>
            <iframe 
        src="resume.pdf" 
        style={{width:'100%', height:'800px'}} 
        frameborder="0" 
        allowFullScreen
      >
        This browser does not support PDFs. Please download the PDF to view it: 
        <a href="resume.pdf">Download PDF</a>
      </iframe>
        </Layout>
    );
}