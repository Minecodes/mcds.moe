import rss from "@astrojs/rss";
import { getCollection, render } from "astro:content";
import type { APIRoute } from "astro";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parse = new MarkdownIt();

export const GET: APIRoute = async (context) => {
  const posts = await getCollection("blog");
  return rss({
    title: "Minecodes",
    description: "A blog about web development, programming, and more.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
      content: sanitizeHtml(
        parse.render(post.body
          ?.replace(/import\s+\{\s*Tweet\s*\}\s*from\s+['"]astro-embed['"];?/g, "")
          .replace(/<Tweet\s+.*?\/>/g, "")
          .replace(/<Tweet\s+.*?>.*?<\/Tweet>/g, "")
        ),
        {
          allowedTags: ["p", "a", "ul", "ol", "li", "blockquote", "code", "pre", "h1", "h2", "h3", "h4", "h5", "h6", "img"],
        }
      ),
      author: "contact@minecodes.de",
    })),
  });
}
