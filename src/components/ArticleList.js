import { getPostsMeta } from '@/lib/posts';
import Article from './Article';
import { useEffect, useState } from 'react';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings/lib';
import rehypeHighlight from 'rehype-highlight/lib';
import rehypeSlug from 'rehype-slug';
import CustomImage from '@/components/CustomImage';

export default function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getPostsMeta() {
      const res = await fetch(
        'https://api.github.com/repos/JerryDoran/remote-mdx-blog-manager/git/trees/main?recursive=1',
        {
          headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
          },
        }
      );

      const repoFiletree = await res.json();

      const filesArray = repoFiletree.tree
        .map((obj) => obj.path)
        .filter((path) => path.endsWith('.mdx'));

      console.log('filesArray', filesArray);

      const posts = [];

      // cannot use a forEach loop because it will not 'await' a promise when looping through the filesArray
      for (const file of filesArray) {
        const post = await getPostByName(file);
        console.log('Post', post);
        if (post) {
          const { meta } = post;
          posts.push(meta);
        }
        console.log('Posts', posts);
      }

      const articles = posts?.sort((a, b) => (a.date < b.date ? 1 : -1));
      setArticles(articles);
    }
    async function getPostByName(fileName) {
      const res = await fetch(
        `https://raw.githubusercontent.com/JerryDoran/remote-mdx-blog-manager/main/${fileName}`,
        {
          headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
          },
        }
      );

      if (!res.ok) return undefined;

      const rawMDX = await res.text();

      if (rawMDX === '404: Not Found') return undefined;

      const { frontmatter, content } = await compileMDX({
        source: rawMDX,
        components: {
          CustomImage,
        },
        options: {
          parseFrontmatter: true,
          mdxOptions: {
            rehypePlugins: [
              rehypeHighlight,
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: 'wrap' }],
            ],
          },
        },
      });

      const id = fileName.replace(/\.mdx$/, '');

      const blogPostObj = {
        meta: {
          id,
          title: frontmatter.title,
          date: frontmatter.date,
          tags: frontmatter.tags,
        },
        content,
      };

      return blogPostObj;
    }

    getPostsMeta();
  }, []);

  // console.log(articles);

  if (!articles) {
    return <p className='mt-10 text-center'>Sorry, no articles available</p>;
  }
  return (
    <div className='mt-6 mx-auto max-w-2xl'>
      <ul className='w-full list-none'>
        {/* {posts?.map((post) => (
          <Article key={post.id} post={post} />
        ))} */}
      </ul>
    </div>
  );
}
