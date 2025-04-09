import './LandingPage.css';
import { useState } from 'react';

function LandingPage() {
  const [posts, setPosts] = useState([
    {
      content: "Naruto Uzumaki: Believe it!",
      timestamp: new Date(),
      author: "NarutoFan123",
      profilePic: "https://via.placeholder.com/50",
    },
    {
      content: "Monkey D. Luffy: I'm gonna be the Pirate King!",
      timestamp: new Date(),
      author: "OnePieceLover",
      profilePic: "https://via.placeholder.com/50",
    },
    {
      content: "Goku: Kamehameha!",
      timestamp: new Date(),
      author: "SaiyanWarrior",
      profilePic: "https://via.placeholder.com/50",
    },
  ]);
  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      setPosts([
        {
          content: newPost,
          timestamp: new Date(),
          author: "You",
          profilePic: "https://via.placeholder.com/50",
        },
        ...posts,
      ]);
      setNewPost('');
    }
  };

  return (
    <div className="landing-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">Anime Blog</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Search</a></li>
          <li><a href="#">Videos</a></li>
          <li><a href="#">Notifications</a></li>
          <li><a href="#">Messages</a></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="post-container">
          {/* Wrapper for Create Post and Recent Posts */}
          <div className="post-wrapper">
            {/* Create Post Section */}
            <div className="post-row">
              <h2>Create a Post</h2>
              <form onSubmit={handlePostSubmit} className="post-form">
                <textarea
                  placeholder="What's on your mind?"
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  className="post-input"
                ></textarea>
                <button type="submit" className="post-button">Post</button>
              </form>
            </div>

            {/* Fake Post */}
            <div className="post-row clickable">
              <div className="post-header">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Profile"
                  className="profile-pic"
                />
                <div>
                  <p className="post-author">AnimeLover99</p>
                  <span className="timestamp">{new Date().toLocaleString()}</span>
                </div>
              </div>
              <p className="post-content">
                "Attack on Titan is the best anime ever! The story, the action, and the twists are unmatched!"
              </p>
              <div className="post-actions">
                <button>Like</button>
                <button>Comment</button>
                <button>Share</button>
              </div>
            </div>

            {/* Recent Posts Heading */}
            <h2 className="recent-posts-heading">Recent Posts</h2>

            {/* Recent Posts Section */}
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <div key={index} className="post-row clickable">
                  <div className="post-header">
                    <img
                      src={post.profilePic}
                      alt="Profile"
                      className="profile-pic"
                    />
                    <div>
                      <p className="post-author">{post.author}</p>
                      <span className="timestamp">{post.timestamp.toLocaleString()}</span>
                    </div>
                  </div>
                  <p className="post-content">{post.content}</p>
                  <div className="post-actions">
                    <button>Like</button>
                    <button>Comment</button>
                    <button>Share</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="post-row no-posts">
                <p>No posts yet. Start sharing your thoughts!</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;