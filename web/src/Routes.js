import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/contact" page={ContactPage} name="contact" />
      <Private unauthenticated="home">
        <Route path="/posts/new" page={NewPostPage} name="newPost" />
        <Route
          path="/posts/{id:Int}/edit"
          page={EditPostPage}
          name="editPost"
        />
        <Route path="/posts/{id:Int}" page={PostPage} name="post" />
        <Route path="/posts" page={PostsPage} name="posts" />
      </Private>
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
