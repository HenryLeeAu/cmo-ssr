import React from 'react'
import styled from 'styled-components';
import SectionBase from './SectionBase'
import { Link } from "react-router-dom";
export default (props) => {
  return (
    <SectionBase
      header="latest articles"
      headerUpperCase
      >
      <ul className="disc">
        {props.list && props.list.map((article, index) => {
          const { title, id, slug } = article
          return (
            <li key={`${index}${slug}`}>
              <Link
                to={`/${props.category}/${id}`}
                title={title}>
                {title}
              </Link>
            </li>
          )
        })
        }
      </ul>
      <a className="btn-more" href="#"> More › </a>
    </SectionBase>

  )
}

