import React from 'react';
import {Link} from 'react-router-dom'
import { Container, Topside, RepoIcon, Botside, StarIcon, ForkIcon, } from './styles';

interface props{
    username: string;
    reponame: string;
    description?: string;
    language?: string
    stars: number;
    forks: number;
}

const RepoCard = ({username, reponame, description, language, stars, forks}: props) => {
    const languageClass = language ? language.toLowerCase() : 'other';
  return (
      <Container>
          <Topside>
                <header>
                <RepoIcon />
                <Link  to={`/${username}/${reponame}`}>{reponame}</Link>
                </header>
          </Topside>

          <Botside>
                <ul>
                    <li>
                        <div className={`language ${languageClass}`}></div>
                        <span>{language}</span>
                    </li>
                    <li>
                        <StarIcon />
                        <span>{stars}</span>
                    </li>
                    <li>
                        <ForkIcon />
                        <span>{forks}</span>
                    </li>
                </ul>
          </Botside>
      </Container>
  )
}

export default RepoCard;
