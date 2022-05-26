import React from 'react';
import { Container, Main, LeftSide, RightSide } from './styles';
import ProfileData from '../../components/ProfileData';

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
                <RightSide></RightSide>
            </Main>
        </Container>
    );
};
export default  Profile
