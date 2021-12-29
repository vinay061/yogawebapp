/** Cmsdata.js */
import { request } from "../lib/datocms"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Image from "next/dist/client/image"
import luxembourg from "../public/images/luxembourg.jpg"
import styled from "styled-components"


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
    //const { newdata } = data
    // const posts = newdata.allArticles
    //console.log(newdata.allArticles)
    console.log(data)
    console.log(`Type of data is: ${typeof(data)}`)
    const posts = data.allArticles // access the allArticles Array or object
    console.log(`Type of posts is:${typeof(posts)}`)
    console.log(posts)
    console.log("---------------------------")
    console.log(data.allArticles[0])
    console.log("***********************")
    console.log(`Title: ${data.allArticles[0].title}`)
    console.log(data.allArticles[0].author.name)
    console.log(data.allArticles[0].content.value.schema)
    console.log(`Slug: ${data.allArticles[0].slug}`)
    console.log(`Image URL: ${data.allArticles[0].coverImage.url}`)
    console.log(`Excerpt: ${data.allArticles[0].excerpt}`)
    console.log(`ID: ${data.allArticles[0].id}`)
    console.log(`Publish Date: ${data.allArticles[0].publishDate}`)
    console.log("***********************")
    console.log("***********************")
    console.log(`Title: ${data.allArticles[1].title}`)
    console.log(data.allArticles[1].author.name)
    console.log(data.allArticles[1].content.value.schema)
    console.log(`Slug: ${data.allArticles[1].slug}`)
    console.log(`Image URL: ${data.allArticles[1].coverImage.url}`)
    console.log(`Excerpt: ${data.allArticles[1].excerpt}`)
    console.log(`ID: ${data.allArticles[1].id}`)
    console.log(`Publish Date: ${data.allArticles[1].publishDate}`)
    console.log("***********************")
    console.log("-------------------------------")
    // const { titleData, ...rest} = 
    // console.log(titleData)
    // console.log(`Benefits: ${posts.content}`)
    // const obj = posts.content
    // console.log(typeof(obj))
    // console.log("converting object to array")
    // const arrayData = Object.entries(data)
    // console.log(typeof(arrayData))
    // console.log(arrayData)
    // console.log(`Element 0: ${arrayData[0]}`)
    // console.log(`Element 1: ${arrayData[1]}`)
    // console.log(`Element second: ${Object.values(arrayData)}`)
    // arrayData.forEach(e => {
    //   console.log(e)
    // })
    // Object.entries(data).map(item => {
    //   console.log(item)
    // })
    // arrayData.map(post => {
    //   console.log(`Title:${post.title}, Author:${post.author}`)
    // })
    const keyVal = Object.keys(posts)
    console.log(`Keys: ${keyVal}`)
    const valData = Object.values(posts)
    console.log(`Values: ${valData}`)
    const convObje = Object.values(valData) //Convert the values of posts to an array
    console.log(convObje)
    //Iterate over each element in the array
    convObje.map(entry => {
      console.log("consolidated entries:")
      console.log(entry)
      console.log('Single Entry is as follows:')
      console.log(entry.title)
      console.log(entry.author.name)
      const entryArray = Object.values(entry)
      console.log("entry array:")
      console.log(entryArray)
      console.log(entryArray[2].value.document.children[0])
      //entryArray[2].value.document.children[0]
      //the above gives the deepest access
      const deepAccess = entryArray[2].value.document.children[0]
      console.log(`Deep access type ${deepAccess}`)
      const deepVal = Object.values(deepAccess)
      console.log(deepVal)
      console.log(deepVal[1][0].value)
      const finalContent = deepVal[1][0].value // This gives the content which we want
      console.log(`Content is: ${finalContent}`)
    })
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
                <h2 className="text-6xl text-white absolute flex mt-32">{data.allArticles[0].title}</h2>
              </div>
              
              
              
              </div>
              <h1>First Way of display</h1>
              {posts.map((p,index) => {
                  return(
                      <div key={index}>
                          <h1>{p.title}</h1>
                          <h2>{p.author.name}</h2>
                          <h3>{}</h3>
                      </div>
                  )
              })}
            </div>
            <div>
              <h2>Second way of display data</h2>
              {convObje.map((entry,index) => {
                const entryArray = Object.values(entry)
                const deepAccess = entryArray[2].value.document.children[0]
                const deepVal = Object.values(deepAccess)
                const finalContent = deepVal[1][0].value

                return(
                  <div key={index}>
                    <h1>Title: {entry.title}</h1>
                    <h1>Author: {entry.author.name}</h1>
                    <h2>{finalContent}</h2>
                    <img src={entry.coverImage.url} width={500} height={200}/>
                  </div>
                )
              })

              }
            </div>
          <Footer/>
        </div>
    )
}


/**End of Cmsdata.js */