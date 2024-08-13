import { NavLink } from 'react-router-dom';

const Header = () => {
  const navItems = [
    { path: '/overview', title: 'OVERVIEW' },
    { path: '/authentication', title: 'AUTHENTICATION' },
    { path: '/endpoints', title: 'ENDPOINTS' },
    { path: '/tutorials', title: 'TUTORIALS' },
    { path: '/code-examples', title: 'CODE EXAMPLES' },
    { path: '/pricing', title: 'PRICING' },
  ];

  return (
    <div className='bg-gray-900'>
      <header className="max-w-screen-2xl container mx-auto px-0 py-8 bg-indigo-500">
        <h1 className="text-4xl text-white mb-4">Book Generator API</h1>
      </header>
      <nav className="max-w-screen-2xl bg-gray-800 px-0 py-4 sticky top-0 z-1000 shadow-inner">
        <ul className="md:flex justify-center flex-wrap list-none 2xl:flex-col items-center">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-white font-medium text-sm no-underline transition-colors duration-3 ease-linear  mx-4 my-2">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-white hover:text-blue-300'  // Active state + hover effect
                    : 'text-primary hover:text-blue-500' // Inactive state + hover effect
                }
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <main className='max-w-4xl mx-auto my-8 px-0 py-8'>
        <section id='overview' className='bg-gray-800 rounded-lg p-8 mb-8 shadow-md border border-gray-800 border-solid'>
          <h2 className='flex justify-between text-2xl mt-8 text-indigo-400'>Overview</h2>
          <p className='text-justify m-0 p-0 text-white box-border'>The Book Generator API allows you to generate books on various topics using different language models. This documentation provides details on how to use the API, including authentication, available endpoints, and code examples.</p>
        </section>
        <section id='authentication' className='bg-gray-800 rounded-lg p-8 mb-8 shadow-md border border-gray-800 border-solid'>
          <h2 className='flex justify-between text-2xl mt-8 text-indigo-400'>Authentication</h2>
          <p className='text-justify m-0 p-0 text-white box-border'>To use the API, you need to include your API key in the header of each request:</p>
          <pre className='font-mono bg-[var(--code-background)] rounded p-4 overflow-x-auto whitespace-pre-wrap break-words text-3 border border-gray-600'>
            <code className='font-mono  text-gray-300 bg-[var(--code-background)] rounded p-4 overflow-x-auto  break-words text-3 border border-gray-600'>
            X-API-Key: YOUR_API_KEY
            </code>
          </pre>
          <p className='text-justify m-0 p-0 text-white box-border'>To generate an API key, use the button below:</p>
          <button className='bg-green-500 flex justify-start text-gray-900 font-bold border-none p-3 px-6 rounded cursor-pointer text-base transition duration-300 ease-in-out transform hover:scale-105 mt-4'>Generate Key</button>
          <div className='mt-2 font-mono bg-[var(--code-background)] rounded p-4 overflow-x-auto whitespace-pre-wrap break-words text-3 border border-gray-600'></div>
        </section>
        <section id='end-points' className='bg-gray-800 rounded-lg p-8 mb-8 shadow-md border border-gray-800 border-solid'>
          <h2 className='flex justify-between text-2xl mt-8 text-indigo-400'>Endpoints</h2>
          <h3 className='flex justify-between text-xl mt-8 mb-2 text-indigo-400'>Generate Book</h3>
          <p className='text-justify m-0 p-0 text-white box-border'>
            <span className='bg-green-300 text-gray-800 font-bold p-1 px-2 rounded font-bold mt-4 mr-2'>POST</span>
          </p>
        </section>
        <section id='tutorials' className='bg-gray-800 rounded-lg p-8 mb-8 shadow-md border border-gray-800 border-solid'>
          <h2 className='flex justify-between text-2xl mt-8 text-indigo-400'>Tutorials</h2>
          <p className='text-justify m-0 p-0 text-white box-border'>The Book Generator API allows you to generate books on various topics using different language models. This documentation provides details on how to use the API, including authentication, available endpoints, and code examples.</p>
        </section>
        <section id='code-exmaples' className='bg-gray-800 rounded-lg p-8 mb-8 shadow-md border border-gray-800 border-solid'>
          <h2 className='flex justify-between text-2xl mt-8 text-indigo-400'>Code Exmaples</h2>
          <p className='text-justify m-0 p-0 text-white  box-border'>The Book Generator API allows you to generate books on various topics using different language models. This documentation provides details on how to use the API, including authentication, available endpoints, and code examples.</p>
        </section>
        <section id='pricing' className='bg-gray-800 rounded-lg p-8 mb-8 shadow-md border border-gray-800 border-solid'>
          <h2 className='flex justify-between text-2xl mt-8 text-indigo-400'>API Pricing</h2>
          <p className='text-justify m-0 p-0 text-white box-border'>The Book Generator API allows you to generate books on various topics using different language models. This documentation provides details on how to use the API, including authentication, available endpoints, and code examples.</p>
        </section>
      </main>
    </div>
  );
};

export default Header;
