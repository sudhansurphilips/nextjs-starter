import styles from './styles.module.css'
import Link from 'next/link'
import {useState} from 'react';

const FirstLevelMenu = props => {
  const [isNavCollapsed , setIsNavCollapsed ] = useState(false);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <div className={styles.firstLevelMenu}>
      <nav className='navbar navbar-expand-lg navbar-dark container-lg bg-philips-primary-nav-bar'>
        <div className='p-brand navbar-brand'>
          <div
            className='p-shape-top'
            aria-hidden='true'
            style={{
              position: 'absolute',
              top: 0
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              version='1.1'
              preserveAspectRatio='xMidYMid meet'
              x='0'
              y='0'
              width='98'
              height='45'
              viewBox='0, 0, 196, 90'
            >
              <path
                d='M154.001,90.001 C176.012,90.022 195.966,82.011 196.001,60 L196.001,0.001 L-0.001,0.001 L-0.001,90.001 L154.001,90.001 z'
                fill='#fff'
                id='Shape_top'
              ></path>
            </svg>
          </div>
          <div
            className='p-philips'
            style={{
              position: 'absolute',
              top: 15,
              left: 6
            }}
          >
            <img
              src='/images/wordmark_1x.svg'
              srcSet='/images/wordmark_1x.svg 1x, /images/wordmark_2x.svg 2x'
              width='85'
              alt='Philips - Click here to navigate to the homepage'
            />
          </div>
        </div>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label='Toggle navigation'
          onClick={handleNavCollapse}
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className={isNavCollapsed ? 'collapse navbar-collapse': 'pl-1 pl-sm-1 pl-md-1 pl-lg-0 pr-1 pr-sm-1 pr-md-1 pr-lg-0 navbar-collapse'} id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <Link href={`/`}>
                <a className='nav-link'>
                  Home <span className='sr-only'>(current)</span>
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link href={`/products`}>
                <a className='nav-link'>Products</a>
              </Link>
            </li>
          </ul>
          <form className='form-inline my-2 my-lg-0'>
            <input
              className='form-control mr-sm-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            ></input>
            <button
              className='btn btn-outline-light my-2 my-sm-0'
              type='submit'
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default FirstLevelMenu
