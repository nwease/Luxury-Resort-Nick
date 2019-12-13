import React from 'react';
import Hero from '../globals/hero';
import homeImg from '../assets/homeBcg.jpeg';
import Banner from '../globals/Banner';
import { PrimaryBtn } from '../globals/buttons';

const Header = () => {
    return (
        <Hero img={homeImg}>
            <Banner
                greeting='Welcome to '
                title='Luxury Resort Nick'
                text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci assumenda consectetur dicta eius possimus sint? Assumenda iure nemo voluptas.'
            >
                <PrimaryBtn t='1rem'>
                    View Now
                </PrimaryBtn>

                {/*<PrimaryBtn as='a' href='https://www.google.com'>*/}
                {/*    View Now*/}
                {/*</PrimaryBtn>*/}
            </Banner>
        </Hero>
    );
};

export default Header;
