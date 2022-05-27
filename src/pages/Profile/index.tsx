import React from 'react';
import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading } from './styles';
import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';

const Profile = () => {
    return (
        <Container>
            <Main>
                <LeftSide></LeftSide>
                <ProfileData
                    username={'adammartinss'}
                    name={'Adam Martins Santos'}
                    avatarUrl={
                        'https://avatars.githubusercontent.com/u/103488271?v=4'
                    }
                    followers={1300}
                    following={2}
                    company={'@Adam_Robo'}
                    location={'Curitiba, Brasil'}
                    email={'gamebacon7654@gmail.com'}
                    blog={'undefined'}
                />
                <RightSide>
                    <Repos>
                        <h2>Random repos</h2>
                        <div>
                            {[1,2,3,4,5,6].map(n=>(
                                <RepoCard
                                    key={n}
                                    username={'adammartinss'}
                                    reponame={'gitClone'}
                                    description={'Clone a repository from github'}
                                    language={n % 3 === 0 ? 'TypeScript' : 'JavaScript'}
                                    stars={8}
                                    forks={4}
                                />
                            ))}
                        </div>
                    </Repos>

                    <CalendarHeading>
                        Random calendar (do not represent actual data)
                    </CalendarHeading>


                </RightSide>
            </Main>
        </Container>
    );
};
export default  Profile
