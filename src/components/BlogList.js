import React from 'react';

const BlogList = () => {
  const posts = [
    {
      title: "Первая запись блога",
      content: "Это текст первой записи блога.",
      date: "2024-09-01",
      tags: ["React", "JavaScript"]
    },
    {
      title: "Вторая запись блога",
      content: "Это текст второй записи блога.",
      date: "2024-09-02",
      tags: ["Web Development", "Frontend"]
    }
  ];

  return (
    <div>
      <h2>Записи блога</h2>
      {posts.map((post, index) => (
        <div key={index}>
          <h3>{post.title}</h3>
          <p>{post.date}</p>
          <p>{post.content}</p>
          <p>Теги: {post.tags.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;