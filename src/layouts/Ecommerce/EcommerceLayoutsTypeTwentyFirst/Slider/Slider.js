import React,{Component} from 'react';
import 'swiper/css/swiper.min.css'
import classes from './Slider.module.css';
import Swiper from 'swiper';
import Oval from "../../../../components/Frame/Frame";
import {ChevronLeft, ChevronRight} from "../../../../components/Icons/Icons";

let ecommerceSlider = null;

class Slider extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        ecommerceSlider = new Swiper(`.${classes.swiperContainer}`,{
            slidesPerView: 'auto',
            spaceBetween: 20,
            centeredSlides: false,
            navigation: {
                nextEl: `.${classes.swiperButtonNext}`,
                prevEl: `.${classes.swiperButtonPrev}`,
            },
            breakpoints: {
                575: {
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    spaceBetween: 20,
                }
            },
        });

    }
    render(){
        return (
            <div className={`${classes.slider}  ${(this.props.dark) ?  `dark ${classes.dark}` : ''}`}>
                <div className={classes.swiperContainer}>
                    <div className={`swiper-wrapper ${classes.swiperWrapper}`}>
                            {this.props.array.map((el,index)=>{
                                return(
                                    <div className={`swiper-slide ${classes.swiperSlide}`} key={index}>
                                        <img src={el}/>
                                    </div>
                                )
                            })}
                        </div>
                    <div className={`swiper-button-next ${classes.swiperButtonNext}`}>
                            <Oval
                                variant={"small"}
                            >
                                <ChevronRight/>
                            </Oval>
                        </div>
                    <div className={`swiper-button-prev ${classes.swiperButtonPrev}`}>
                            <Oval
                                variant={"small"}
                            >
                                <ChevronLeft/>
                            </Oval>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Slider;