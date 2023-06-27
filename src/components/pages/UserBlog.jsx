import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Default from "../templates/Default";

import Loading from "../atoms/Loading";
import UserBio from "../molecules/UserBio";
import PostListWrapper from "../molecules/PostListWrapper";

export default function UserBlog() {
  const { userId } = useParams();

  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getApiData = async () => {
      const [userResponse, postsResponse] = await Promise.all([
        fetch(
          `https://63cf09718a780ae6e6710dbe.mockapi.io/users/${userId}`
        ).then((response) => response.json()),
        fetch(
          `https://63cf09718a780ae6e6710dbe.mockapi.io/users/${userId}/posts`
        ).then((response) => response.json()),
      ]);

      setUser(userResponse);
      setPosts(postsResponse);
      setIsLoading(false);
    };

    getApiData();
  }, [userId]);

  return isLoading ? (
    <Loading />
  ) : (
    <Default>
      <div className="user-blog">
        <UserBio user={user} />
        <PostListWrapper posts={posts} />
      </div>
    </Default>
  );
}
