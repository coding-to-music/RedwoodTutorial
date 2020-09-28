import { Link, NavLink, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <>
      <header>
        <h1>HomePage</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <p>dev.to/codingtomusic</p>
        <p>twitter.com/ThomasConnors</p>
        <p>github.com/coding-to-music</p>
        <p>
          Find me in <tt>./web/src/pages/HomePage/HomePage.js</tt>
        </p>
        <p>
          My default route is named <tt>home</tt>, link to me with `
          <Link to={routes.home()}>Home</Link>`
        </p>
      </main>
    </>
  )
}

export default HomePage
