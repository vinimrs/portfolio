import React, { useState } from 'react';
import * as S from './CardStyles';
import { AiFillGithub, AiOutlineGlobal } from 'react-icons/ai';

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
}) => {
    const [openVideo, setOpenVideo] = useState(false);

    return (
        <S.CardDiv  key={id} >
            <S.Card2>
                <S.CardImage
                    src={image}
                    role="img"
                    onMouseEnter={() => {
                        setOpenVideo(true);
                    }}
                    onMouseLeave={() => {
                        setOpenVideo(false);
                    }}
                >
                    <span onClick={() => setOpenVideo(!openVideo)}>Hover to preview</span>
                    {openVideo && (
                        <video src={preview} className="video" autoPlay muted loop />
                    )} 
                </S.CardImage>
                <div style={{ width: '100%', padding: '24px 18px' }}>
                    <S.CardTitle>{title}</S.CardTitle>
                    <S.Text>{description}</S.Text>
                    <S.LinksDiv>
                        <S.RepoLink href={source} target="_blank">
                            <AiFillGithub size="3rem" />
                            <span>Visualize o código</span>
                        </S.RepoLink>
                        <S.RepoLink href={visit} target="_blank">
                            <AiOutlineGlobal size="3rem" />
                            <span>Visualize o projeto</span>
                        </S.RepoLink>
                    </S.LinksDiv>
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
                </div>
            </S.Card2>
        </S.CardDiv>
    );
};

export default Card;
