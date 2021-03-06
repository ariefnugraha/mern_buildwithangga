import React from 'react'

import ImageHero from '../assets/images/img-hero.jpg';
import ImageHeroFrame from '../assets/images/hero-frame.jpg';
import IconCities from '../assets/images/icons/icon-cities.svg';
import IconTraveler from '../assets/images/icons/icon-traveler.svg';
import IconTreasure from '../assets/images/icons/icon-treasure.svg';

import Button from 'elements/Button';
import formatNumber from 'utils/format-number';
export default function Hero(props) {
    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        })
    }

    return (
        <section className="container pt-4">
            <div className="row align-items-center">
                <div className="col-auto pr-5" style={{ width: "530px" }}>
                    <h1 className="font-weight-bold line-height-1 mb-3">Forget Busy Work <br />Start Next Vacation</h1>
                    <p className="mb-4 font-weight-light text-gray-500 w-75" style={{lineHeight: "150%"}}>
                        We provide what you need to enjoy your
                        holiday with family. Time to make another
                        memorable moments.
                    </p>

                    <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>Show Me Now</Button>

                    <div className="row mt-5" style={{marginTop: "80px"}}>
                        <div className="col-auto" style={{marginRight: "35px"}}>
                            <img width="36" height="36" src={IconTraveler} alt={`${props.data.travelers} Travelers`} />
                            <h6 className="mt-3">{formatNumber(props.data.travelers)} <span className="gray-500 font-weight-light">Travelers</span></h6>
                        </div>
                        <div className="col-auto" style={{marginRight: "35px"}}>
                            <img width="36" height="36" src={IconTreasure} alt={`${props.data.treasures} Treasures`} />
                            <h6 className="mt-3">{formatNumber(props.data.treasures)} <span className="gray-500 font-weight-light">Treasures</span></h6>
                        </div>
                        <div className="col-auto">
                            <img width="36" height="36" src={IconCities} alt={`${props.data.cities} Cities`} />
                            <h6 className="mt-3">{formatNumber(props.data.cities)} <span className="gray-500 font-weight-light">Cities</span></h6>
                        </div>
                    </div>
                </div>

                <div className="col-6 pl-5">
                    <div style={{width: "520px", height: "410px"}}>
                        <img className="img-fluid position-absolute" src={ImageHero} alt="Room" style={{margin: '-30px 0 0 -30px', zIndex: 1}} />
                        <img className="img-fluid position-absolute" src={ImageHeroFrame} alt="Room" style={{margin: '-30px -15px -15 0px'}} />
                    </div>
                </div>

            </div>
        </section>
    )
}
