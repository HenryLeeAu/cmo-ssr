import React from 'react';
import styled from 'styled-components';
import SectionBase from './SectionBase';

const Ul = styled.ul`
  position: relative;

  li {
    padding-left: 30px;
    &::before {
      counter-increment: li;
      font-style: italic;
      font-weight: bold;
      font-size: 1.3em;
      width: 22px;
      line-height: 22px;
      display: inline-block;
      text-align: center;
      background: #0089c5;
      color: #fff;
      margin-right: 5px;
      border-radius: 15px;
      position: absolute;
      left: 0;
    }
    &:nth-child(1) {
      &::before {
        content: '1';
      }
    }
    &:nth-child(2) {
      &::before {
        opacity: 0.8;
        content: '2';
      }
    }
    &:nth-child(3) {
      &::before {
        opacity: 0.7;
        content: '3';
      }
    }
    &:nth-child(4) {
      &::before {
        opacity: 0.6;
        content: '4';
      }
    }
    &:nth-child(5) {
      &::before {
        opacity: 0.5;
        content: '5';
      }
    }
  }
`;
export default props => {
  return (
    <SectionBase header="Popular" headerUpperCase sectionBorder sectionBgGrey>
      <Ul>
        {props.list &&
          props.list.map((article, index) => {
            const { title, id, slug } = article;
            return (
              <li key={`${index}${slug}`}>
                <a
                  href={`https://www.cmo.com.au/${
                    props.category
                  }/${id}/${slug}`}
                  title={title}
                >
                  {title}
                </a>
              </li>
            );
          })}
      </Ul>
    </SectionBase>
  );
};
