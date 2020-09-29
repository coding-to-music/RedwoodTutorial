import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'

const HomePage = () => {
  return (
    <BlogLayout>
      <main>
        <p>dev.to/codingtomusic</p>
        <p>twitter.com/ThomasConnors</p>
        <p>github.com/coding-to-music</p>
      </main>
      <BlogPostsCell />
    </BlogLayout>
  )
}

export default HomePage
