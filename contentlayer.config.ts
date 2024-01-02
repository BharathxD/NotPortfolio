import { defineDocumentType, makeSource, type ComputedFields } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
  readingTime: {
    type: "number",
    resolve: (doc) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      const content = doc.body.raw as string;
      const WORDS_PER_MINUTE = 200;
      const numberOfWords = content.split(/\s/g).length;
      const minutes = numberOfWords / WORDS_PER_MINUTE;
      return Math.ceil(minutes);
    },
  },
};

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    published: {
      type: "boolean",
      default: true,
    },
    image: {
      type: "string",
      required: false,
    },
    authors: {
      // Reference types are not embedded.
      // Until this is fixed, we can use a simple list.
      // type: "reference",
      // of: Author,
      type: "list",
      of: { type: "string" },
      required: true,
    },
  },
  computedFields,
}));

const Author = defineDocumentType(() => ({
  name: "Author",
  filePathPattern: `authors/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    avatar: {
      type: "string",
      required: true,
    },
    linkedin: {
      type: "string",
      required: true,
    },
  },
  computedFields,
}));

const source = makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Post, Author],
  mdx: {
    rehypePlugins: [
      [
        // @ts-expect-error rehype-pretty-code has no types
        rehypePrettyCode,
        {
          theme: "github-dark-dimmed",
          defaultLang: {
            block: "typescript",
          },
        },
      ],
      rehypeAutolinkHeadings,
      rehypeSlug,
      rehypeCodeTitles,
    ],
  },
});

export { Post, Author };
export default source;
