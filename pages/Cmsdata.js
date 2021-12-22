import { request } from "../lib/datocms"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Image from "next/dist/client/image"
import luxembourg from "../public/images/luxembourg.webp"
import styled from "styled-components"
import { StructuredText } from "react-datocms"


const HOMEPAGE_QUERY = `query MyQuery {
    allArticles {
      title
      author {
        name
      }
      content {
        value
      }
      slug
      coverImage {
        url
        responsiveImage {
          height
          sizes
          src
          width
        }
      }
      excerpt
      id
      publishDate
    }
  }`

export async function getStaticProps(){
    const data = await request({
        query: HOMEPAGE_QUERY,
    })

    return {
        props: { data }
    }
}

const Box = styled.div`
  z-index: -1;
  top: 5;
`;

export default function Cmsdata({ data }) {
    
    const posts = data.allArticles // access the allArticles Array or object
    console.log("***********************")
    console.log("------------------")
    console.log(posts[0])
    console.log("------------------")
    const { title, author, content, coverImage, excerpt, id, publishDate, slug } = posts[0]
    console.log(title)
    console.log("***********************")
  
    return(
        <div>
          <Navbar/>
            {/* {JSON.stringify(data, null, 2)} */}
            <div className="pt-24">
              <div>
                <div className="relative flex justify-center">
                  <Box>
                    <Image src={luxembourg} alt="hero image"
                        height={1700}/>
                  </Box>
                  <h2 className="sm:text-lg sm:text-white sm:mt-8 lg:text-6xl lg:text-white absolute flex lg:mt-32">YOGA POSES / ASANAS</h2>
                </div>
              </div>
             {posts.map((p,index) => {
                  return(
                      <div key={index} className="flex flex-col bg-blue-300">
                          <h1 className="text-center text-4xl py-5">{p.title}</h1>
                          <div className="flex justify-center">
                            <img src={p.coverImage.url}
                                  width={500} height={200} alt="Pose Pic"
                                  />
                          </div>
                          <div className="text-xl text-left ml-5 my-4">
                            <StructuredText data={p.content}
                                          className="text-4xl"/>
                          </div>
                      </div>
                  )
              })}
            </div>
          <Footer/>
        </div>
    )
}

