import React from 'react';
import { Services } from './http-services';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { ToDo } from './pages/ToDo';
import { Posts } from './pages/Posts';
import { Persistent } from './pages/Persistent';
import './data/db';

export class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allCountries: [],
            currentCountry: null,
            allPosts:[],
        };
    }
    onCountryClick = (country) => {
        this.setState({
            currentCountry: country
        });
    };
    render() {
        return <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home
                        onCountryClick={this.onCountryClick}
                        allCountries={this.state.allCountries}
                        currentCountry={this.state.currentCountry} />
                </Route>

                <Route exact path="/posts">
                    <Posts allPosts={this.state.allPosts}/>
                </Route>

                
                <Route render={props => <ToDo  {...props} />} exact path="/todo" />
                
                <Route render={props => <Persistent  {...props} />} exact path="/persistent" />
            </Switch>
        </BrowserRouter>
    }
    componentDidMount() {
        Services.getAllCountries().then((results) => {
            this.setState({
                allCountries: results.data
            });
        });

        Services.getAllPosts().then((results) => {
            this.setState({
                allPosts: results.data
            });
        });
    }
}