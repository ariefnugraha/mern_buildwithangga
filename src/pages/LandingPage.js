import React, {Component} from 'react'
import landingPage from '../json/landingPage.json';

import Header from '../parts/Header';
import Hero from '../parts/Hero';
import MostPick from '../parts/MostPick';
import Categories from 'parts/Categories';

export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.mostPicked = React.createRef();
    }

    render() {
        return (
            <>
                <Header {...this.props}></Header>
                <Hero refMostPicked={this.mostPicked} data={landingPage.hero} />
                <MostPick refMostPicked={this.mostPicked} data={landingPage.mostPicked} />
                <Categories data={landingPage.categories} />
            </>
        )
    }
}
