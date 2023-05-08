import { print } from 'graphql';
import { GraphQLClient } from 'graphql-request';

interface BlogPost {
  id: number;
  title: string;
  content: string;
}

async function retrieveBlogPosts(): Promise<BlogPost[]> {
  const endpoint = 'http://theapp.local/graphql';
  const query = `
    query {
      posts(first: 10) {
        nodes {
          id
          title
          content
        }
      }
    }
  `;
  
  
    
    const graphQLClient = new GraphQLClient(endpoint);
    
    try {
      const data = await graphQLClient.request(print(query));
      return data.posts.nodes;
    } catch (err) {
      console.error(err);
      return [];
    }
  }  
}

export { retrieveBlogPosts };