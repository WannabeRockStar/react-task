import React from 'react'

const Hero = () => {
    return (
        <section className="hero-section wrapper">
            <div className="hero-info">
                <div className="hero-tag">YOUR</div>
                <h1 className="hero-title">
                    Beautiful Escape
                </h1>
                <div className="hero-text">
                    One of the greatest things about the sport of surfing is that you need only three things: your body, <br />
                    a surfboard, and a wave.
                </div>
            </div>
            <div className="hero-image">
                <img src={require('./../assets/img/Clip.png')} alt="hero" />
            </div>
            <div className="flex-hero">
                
                <div className="social">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.16" height="20.142" viewBox="0 0 12.16 20.142">
                            <path id="tumblr" d="M665.744,5150v-6.708h-2.353v-3.157s3.687-.4,4.315-5.131h2.353v4.721h4.691v3.561h-4.691v4.742s-.31,3.374,1.961,3.551c0,0,2.6.187,3.531-1.183v3.55a10.713,10.713,0,0,1-4.315,1.2C669.144,5155.141,665.786,5154.1,665.744,5150Z" transform="translate(-663.391 -5134.999)" fill="#ebebeb"/>
                        </svg>
                    </span>

                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18.365" height="15.132" viewBox="0 0 18.365 15.132">
                            <path id="twitter" d="M725.511,5140.524l1.847-.369a15.657,15.657,0,0,1-1.847,1.845s-.006,0-.009,0a5.888,5.888,0,0,0,.009,1.109c-3.529,15.21-16.518,8.486-16.518,8.486,4.726.125,5.147-1.845,5.147-1.845-2.768-.42-3.3-2.214-3.3-2.214a1.152,1.152,0,0,0,1.467-.369,3.335,3.335,0,0,1-2.568-3.689,3.494,3.494,0,0,0,1.8.7c-.338-.394-3.126-3.756-1.434-5.5a9.137,9.137,0,0,0,7.428,4.036l.36-.091a3.907,3.907,0,0,1-.085-.809,3.863,3.863,0,0,1,3.852-3.874c2.564,0,3.118,1.476,3.118,1.476l1.834-1.106S726.411,5140.16,725.511,5140.524Z" transform="translate(-708.993 -5137.941)" fill="#ebebeb"/>
                        </svg>
                    </span>

                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18.414" height="15.932" viewBox="0 0 18.414 15.932">
                            <path id="vimeo" d="M768.211,5140.813c-.009.457.568.1,1.1.369s1.593.567.734,2.952c0,0-1.2,3.594-2.2,3.32,0,0-1.549.063-1.834-3.32s-.863-6.817-2.568-6.641-4.178,1.842-5.858,4.058c0,0,.464,1.158,1.089,1.107s.587-.961,1.1-.738,1.309.187,1.834,3.321a16.239,16.239,0,0,0,2.2,6.272,2.537,2.537,0,0,0,2.568,1.49c.765,0,3.22-1.778,5.5-4.811s4.044-6.688,4.044-7.379.646-3.24-1.843-3.689S768.244,5139.188,768.211,5140.813Z" transform="translate(-757.585 -5137.07)" fill="#ebebeb"/>
                        </svg>
                    </span>
                </div>
                <div className="vertical-text">
                    FIRST SURFING MAGAZINE
                </div>
            </div>
        </section>
    )
}
 
export default Hero;