import { Link, routes } from '@redwoodjs/router'

const AboutPage = () => {
  return (
    <>
      <header>
        <h1>HeaderTitle</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>MainArea-AboutPage</h1>
        <p>
          Find me in <tt>./web/src/pages/AboutPage/AboutPage.js</tt>
        </p>
        <p>Hello</p>
        <p>
          My default route is named <tt>about (or is it "home"?)</tt>, link to
          me with `<Link to={routes.home()}>Return Home</Link>`
        </p>
      </main>
    </>
  )
}

export default AboutPage
