
import Link from 'next/link';
import '../Styles/Home.css'
// import Base from './components/page';
// import Dashboard from './dashboard/page';
// import Appto from './appto/Appto';

export default function Home() {
  return (
    <main className=" min-h-screen ">
      <div className="containerMain">
        <div className="navContainer">
          <ul className='navContainerUl'>
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
        </div>
        <h1 className="tagName">
        Home page
      </h1>
      </div>
     
    </main>
  );
}
