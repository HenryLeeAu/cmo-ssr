import React from 'react'
import styled from 'styled-components';
import SectionBase from './SectionBase'
const Con = styled.div`
    display: inline-block;
    width: 74%;
    vertical-align: middle;
`
const A = styled.a`
 display: inline-block;
    width:  25%;
    vertical-align: middle;
    img{
      width:80%;
    }
`
const Li = styled.li`
vertical-align: middle;
`
const Img = styled.img`
`
export default (props) => {
  return (
    <SectionBase
      header="Web Events"
      headerUpperCase
      sectionBorder
      sectionBgGrey>
      <ul >
        {props.list && props.list.map((article, index) => {
          const { title, id, slug, sponsor, subCategory, imageUrl } = article
          const articleLink = `https://www.cmo.com.au/${props.category}/${id}/${slug}/${subCategory}`;
          return (
            <Li key={`${index}${slug}`}>
              <A
                href={articleLink}
                title={title}>
                <img className="float-left" src={imageUrl} alt={`Sponsor ${sponsor}`} />
              </A>
              <Con>
                <h3 className="small">
                  <a
                    href={articleLink}
                    title={title}>
                    {title}
                  </a>
                </h3>
              </Con>
            </Li>
          )
        })
        }



      </ul>

    </SectionBase>

  )
}

