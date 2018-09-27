import React from 'react';
import styled from 'styled-components';
import SectionBase from './SectionBase';
import { Link } from 'react-router-dom';
const Con = styled.div`
  margin-left: 75px;
`;
export default props => {
  return (
    <SectionBase header="blogs" headerUpperCase sectionBorder>
      <ul>
        {props.list &&
          props.list.map((article, index) => {
            const {
              subCategory,
              publishedDate,
              imageUrl,
              title,
              description,
              slug,
              author,
            } = article;
            const articleLink = `/${props.category}/${subCategory}/${
              publishedDate.year
            }/${publishedDate.month}/${publishedDate.date}/${slug}`;
            return (
              <li className="cf" key={`${index}${slug}`}>
                <Link to={articleLink}>
                  <img className="float-left" src={imageUrl} />
                </Link>
                <Con>
                  <h3>
                    <a href={articleLink}>{title}</a>
                  </h3>
                  <p>{description}</p>
                  <div>
                    <a
                      href={`https://www.cmo.com.au/${props.category}/${
                        author.subCategory
                      }/${author.slug}`}
                      className="author"
                    >
                      {author.name}
                    </a>
                  </div>
                </Con>
              </li>
            );
          })}
      </ul>
      <a className="btn-more" href="#">
        {' '}
        More ›{' '}
      </a>
    </SectionBase>
  );
};
