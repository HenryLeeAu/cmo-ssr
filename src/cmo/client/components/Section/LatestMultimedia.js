import React from 'react';
import styled from 'styled-components';
import SectionBase from './SectionBase';
const Con = styled.div`
  margin-left: 116px;
`;
const Img = styled.img``;
export default props => {
  return (
    <SectionBase header="Latest Multimedia" headerUpperCase>
      <ul>
        {props.list &&
          props.list.map((article, index) => {
            const { title, id, slug, category, imgUrl } = article;
            const articleLink = `https://www.cmo.com.au/${category}/${id}/${slug}/`;
            const alt = `${category}-${title}`;
            return (
              <li className="cf" key={`${index}${slug}`}>
                <a href={articleLink} title={alt}>
                  <Img className="float-left" src={imgUrl} alt={alt} />
                </a>
                <Con>
                  <h3 className="small">
                    <a href={articleLink} title={alt}>
                      <span className="tag">{category}</span>
                      {title}
                    </a>
                  </h3>
                </Con>
              </li>
            );
          })}
      </ul>
      <div>
        <div className="inline-block col-6">
          <a className="btn-more" href="#">
            {' '}
            More Slideshows ›{' '}
          </a>
        </div>
        <div className="inline-block col-6">
          <a className="btn-more" href="#">
            {' '}
            More Videos ›{' '}
          </a>
        </div>
      </div>
    </SectionBase>
  );
};
