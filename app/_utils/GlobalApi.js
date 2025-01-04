import { request,gql } from 'graphql-request'
const MASTER_URL="https://ap-south-1.cdn.hygraph.com/content/"+process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+"/master"
const getAllCourseList=async()=>{
    const query=gql`
    query MyQuery {
  coursList(first: 20, orderBy: createdAt_DESC) {
    author
    name
    free
    demoUrl
    description
    chapter {
      ... on Chapter {
        id
        name
        video {
          url
        }
      }
    }
    sourceCode
    totalChapters
    tags
    slug
    banner {
      url
    }
    youtubeUrl
  }
}
    `
    const result=await request(MASTER_URL,query);
    return result;
}
const getSideBanner=async()=>{
  const query=gql`
  query GetSideBanner {
  sideBanners {
    id
    name
    banner {
      id
      url
    }
    url
  }
}
  `
  const result=await request(MASTER_URL,query);
    return result;
}

const getCourseById=async(courseId)=>{
  const query=gql`
  query MyQuery {
  coursList(where: {slug: "`+courseId+`"}) {
    author
    banner {
      url
    }
    chapter {
      ... on Chapter {
        id
        name
        video {
          url
        }
      }
    }
    demoUrl
    description
    free
    id
    name
    slug
    sourceCode
    totalChapters
  }
}
  `
  const result=await request(MASTER_URL,query);
    return result;
}
export default{
    getAllCourseList,
    getSideBanner,
    getCourseById
}