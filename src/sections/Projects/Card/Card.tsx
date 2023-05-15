import React, { useState } from 'react';
import * as S from './CardStyles';
import { AiFillGithub, AiOutlineGlobal } from 'react-icons/ai';
import Image from 'next/image';

interface Tags {
  name?: string;
  link?: string;
}

interface CardProps {
  id?: number;
  image?: string;
  title?: string;
  description?: string;
  source?: string;
  visit?: string;
  preview?: string;
  status?: string;
  tags?: Array<Tags>;
}

const Card: React.FC<CardProps> = ({
  id,
  preview,
  image,
  description,
  source,
  visit,
  title,
  tags,
  status,
}) => {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <S.Container key={id}>
      <S.Card2>
        <S.Figure
          onMouseEnter={() => {
            setOpenVideo(true);
          }}
          onMouseLeave={() => {
            setOpenVideo(false);
          }}
        >
          <Image
            src={openVideo ? preview : image}
            alt={`${openVideo ? 'preview' : 'image'} of ${title}`}
            width={300}
            height={300}
            className="video"
          />
          <figcaption onClick={() => setOpenVideo(!openVideo)}>
            Click or Hover to preview
          </figcaption>
        </S.Figure>
        <S.Body>
          <S.CardTitleWrapper>
            <S.CardTitle>{title}</S.CardTitle>
            <S.CardStatus status={status}>{status}</S.CardStatus>
          </S.CardTitleWrapper>
          <S.Text>{description}</S.Text>
          {status !== 'Deprecated' && (
            <S.LinksDiv>
              {source ? (
                <S.RepoLink href={source} target="_blank">
                  <AiFillGithub size="3rem" />
                  <span>Visualize o código</span>
                </S.RepoLink>
              ) : null}
              {visit ? (
                <S.RepoLink href={visit} target="_blank">
                  <AiOutlineGlobal size="3rem" />
                  <span>Visite o projeto</span>
                </S.RepoLink>
              ) : null}
            </S.LinksDiv>
          )}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              padding: '24px 0 12px 0',
            }}
          >
            {tags.map((tag, index) => (
              <S.TagLink href={tag.link} key={index}>
                {tag.name}
              </S.TagLink>
            ))}
          </div>
        </S.Body>
      </S.Card2>
    </S.Container>
  );
};

export default Card;
