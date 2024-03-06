
import Link from 'next/link';
import '../Styles/Home.css';
import BlogContent from './content-blog/page';


export default function Home() {
  return (
    <main className=" min-h-screen ">
      <div className="containerMain">
        <div className="navContainer">
          <ul className='navContainerUl pt-12 '>
            <li>
              <Link className='relevantTitle' href="/relevant">Relevant</Link>
              </li>
            <li>
              <Link  className='linkTitle' href="/latest">Latest</Link>
              </li>
            <li>
              <Link className='linkTitle' href="/top">top</Link>
              </li>
          </ul>
          <div className="contentContainer">
            <BlogContent></BlogContent>

          </div>
        </div>
       
      </div>
     
    </main>
  );
}
