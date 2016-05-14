import Post from './models/post';

export default function () {
  Post.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const content1 = `Task 1`;

    const content2 = `Task 2`;

    const post1 = new Post({ slug: 'hello-mern', cuid: 'cikqgkv4q01ck7453ualdn3hd', content: content1 });
    const post2 = new Post({ slug: 'lorem-ipsum', cuid: 'cikqgkv4q01ck7453ualdn3hf', content: content2 });

    Post.create([post1, post2], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
