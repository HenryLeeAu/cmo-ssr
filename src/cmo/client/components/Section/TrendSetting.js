import React from 'react'
import styled from 'styled-components';
import SectionBase from './SectionBase'

export default (props) => {
  return (
    <SectionBase 
      header="Trendsetting" 
      headerUpperCase>
      <ul >
        {props.list && props.list.map((article, index) => {
          const { title, id, slug,description } = article
            return (
              <li key={`${index}${slug}`}>
              <h3>  
                <a
                  href={`https://www.cmo.com.au/${props.category}/${id}/${slug}`}
                  title={title}>
                    {title}
                </a>
              </h3>
              <p>{description}</p>
            </li>
            )
          })
        }
       
       

      </ul>
    </SectionBase>

  )
}

