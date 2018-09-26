import React, { Component } from "react"
import styled from 'styled-components';
import { Helmet } from 'react-helmet'

const Header = styled.h1`
  font-size:39px;
  font-weight:normal;
  line-height:1.2;
  margin:0;
`
const HeaderDescription = styled.p`
  font-size:19px;
  color: #777;
  margin: 0 0 15px;
`
const Author = styled.p`
  list-style-type: none;
  padding: 0;
  margin: 0 0 10px;
  font-size: 13px;
  border-top: 0 solid #ddd;
  text-transform: uppercase;
  color: #999;
  font-weight: 400;
`
const ImageWrapper = styled.figure`
  padding:0;
  margin:0;
  text-align:center;
  img{
    max-width:100%;
    display:inline-block;
  }
  figcaption{
    color: #888;
    font-weight: normal;
    font-size: 0.85em;
    padding: 5px 20px 5px 20px;
    text-align: center;
    border-bottom: 1px solid #eee;
  }
  

`
const Tags = styled.aside`
  font-style: italic;
  ul{

    list-style: none;
    margin:0;
    padding:0;
    li{
      display:inline-block;
      a{
        display: inline-block;
        font-size: .85em;
        background: #f3f3f3;
        color: #555;
        padding: 5px 10px;
        margin: 0 0 5px 5px;
        border-radius: 15px;
        transition: all .1s ease-in;
        &:hover{
          background: #33a0d1;
          color: #fff;
        }
      }
    }
  }

`
const  Article = (props) => {
 
  const show =()=> {
    const { title, description, featuredImageUrl, content, featuredImageCaption, author, publishedTime, tags,SiteTitlePrefix } = props
    return (
      <article>
         <Helmet>
          <title>{SiteTitlePrefix(title)}</title>
        </Helmet>
        <header>
          <Header>{title}</Header>
          <HeaderDescription>{description}</HeaderDescription>
          { author && ( <Author><a href={`https://www.cmo.com.au/author/${author.id}/${author.slug}/articles`}>{author.name}</a> ({author.team}){publishedTime} </Author>)}
         
        </header>
        <ImageWrapper>
          <img src={featuredImageUrl} />
          <figcaption>{featuredImageCaption}</figcaption>
        </ImageWrapper>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <Tags>
          <ul>
            <span className="inline-block">Tags:</span>
            {tags &&
              tags.map((item, index) => {
                return (
                  <li key={`${index}${item.slug}`}>
                    <a href={`/tag/${item.slug}/`}>{item.name}</a>
                  </li>
                )
              })
            }
          </ul>

        </Tags>
      </article>
    )
  }
  return show()

}
export default Article