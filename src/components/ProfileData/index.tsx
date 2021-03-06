import React from 'react';

import { Container, Flex, Avatar, Row, PeopleIcon, Column, CompanyIcon, LocationIcon, EmailIcon, BlogIcon,  } from './styles';

interface Props {
username: string;
avatarUrl: string;
name: string;
followers: number;
following: number;
company?: string;
location?: string;
email?: string;
blog?: string;
}
const ProfileData = ({username, name, avatarUrl, followers, following, company, location, email, blog}:Props) => {
  return (
      <Container>
          <Flex>
              <Avatar src={avatarUrl} alt={username} />
              <div>
                  <h1>{name}</h1>
                  <h2>{username}</h2>
              </div>
          </Flex>
          <Row>
              <li>
                  <PeopleIcon />
                  <b>{followers}</b>
                  <span>followers</span>
                  <span>·</span>
              </li>
              <li>
                  <b>{following}</b>
                  <span>following</span>
              </li>
          </Row>
          <Column>
            {company && (
                <li>
                    <CompanyIcon />
                    <span>{company}</span>
                </li>
            )}
          </Column>
          <Column>
            {location && (
                <li>
                    <LocationIcon />
                    <span>{location}</span>
                </li>
            )}
          </Column>
          <Column>
            {email && (
                <li>
                    <EmailIcon />
                    <span>{email}</span>
                </li>
            )}
          </Column>
          <Column>
            {blog && (
                <li>
                    <BlogIcon />
                    <span>{blog}</span>
                </li>
            )}
          </Column>
      </Container>
  ); 
}
export default ProfileData;
