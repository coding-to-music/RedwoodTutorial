import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>tmcdev</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.about()}>about</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <p>{children}</p>
      </main>
    </>
  )
}

export default BlogLayout

{
  /*

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
*/
}
