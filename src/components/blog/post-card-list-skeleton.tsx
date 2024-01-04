import PostCardSkeleton from "./post-card-skeleton";

const PostCardListSkeleton = () => Array.from({ length: 10 }, (_, i) => <PostCardSkeleton key={i} />);

export default PostCardListSkeleton;
