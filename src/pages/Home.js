import React from 'react';
import { Link } from 'react-router-dom';
import { CustomMap } from '../CustomMap';
import { Infos } from '../Infos';

export const Home = props => <>
    <CustomMap onCountryClick={props.onCountryClick} allCountries={props.allCountries} />
    <div className='m-2 text-center'>
        <Link className='btn btn-primary' to='/todo'>Voir la liste des todos</Link>
        <Link className='btn btn-primary' to='/posts'>Voir la liste des posts</Link>
    </div>
    <Infos currentCountry={props.currentCountry} />
</>;