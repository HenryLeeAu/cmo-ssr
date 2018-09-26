import React from 'react'
import styled from 'styled-components';
import SectionBase from './SectionBase'
const Con = styled.div`
  margin-left:75px;
`
export default (props) => {

  return (
    <SectionBase
      header="Featured Whitepapers"
      headerUpperCase
      sectionBorder
      sectionBgGrey>
      <ul >
        {props.list && props.list.map((article, index) => {
          const { title, id, slug, description, imageUrl } = article
          const articleLink = `https://www.cmo.com.au/${props.category}/${id}/${slug}`;
          return (
            <li className="cf" key={`${index}${slug}`}>
              <a
                href={articleLink}
                title={title}>
                <img className="float-left img-shadow" src={imageUrl} />
              </a>
              <Con>
                <h3>
                  <a
                    href={articleLink}
                    title={title}>
                    {title}
                  </a>
                </h3>
                <p>{description}</p>

              </Con>
            </li>

          )
        })
        }



      </ul>
      <a className="btn-more" href="#"> More Whitepapers › </a>
    </SectionBase>

  )
}

