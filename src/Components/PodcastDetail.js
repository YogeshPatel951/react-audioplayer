import React, { Component } from 'react';
import styles from "./Podcast.css";
import podcasts from "../podcast.js";
import ShowMoreText from 'react-show-more-text';
class PodcastDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            podcastID:0,
        }
        podcasts.forEach(element => {
            if(element.podcastID==this.state.podcastID){
            this.image= element.image;
            this.description = element.description;
            this.episodes = element.episodes;
            }
            else{
                console.log("podcast not found throw error");
            }
        });

        this.svg = '<svg width="375px" height="170px" viewBox="0 0 375 170" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><desc>Created with Lunacy</desc><defs><linearGradient x1="0.5" y1="0" x2="0.5" y2="0.981396437" id="gradient_1"><stop offset="0" stop-color="#2C2939" stop-opacity="0" /><stop offset="0.496267021" stop-color="#2C2939" stop-opacity="0.721568644" /><stop offset="1" stop-color="#2C2939" /></linearGradient></defs><path d="M0 0L375 0L375 170L0 170L0 0Z" id="Shadow" fill="url(#gradient_1)" stroke="none" /></svg>'

    }

    render() {
        return (
            <>
            <div className="container-fluid" style={{margin:"0",padding:"0"}}>
                <div className="img-wrap">
                    {/* <img src={this.image} className="img-fluid" style={{width:"100%"}}></img> */}
                    <img src={this.image} className="img-fluid"></img>
                </div>
                <div className="shadow">
                <div className="down">
                <div className="description">

                    <ShowMoreText
                /* Default options */
                lines={3}
                more='Show more'
                less='Show less'
                anchorClass=''
                expanded={false}
                
            >
                Lorem ipsum dolor sit amet, consectetur <a href="https://www.yahoo.com/" target="_blank">yahoo.com</a> adipiscing elit, sed do eiusmod tempor incididunt 
                <a href="https://www.google.bg/" title="Google" rel="nofollow" target="_blank">www.google.bg</a> ut labore et dolore magna amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore
 
 
                et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </ShowMoreText>
                </div>     
                <div style={{marginTop:"3rem", marginLeft:"0.8rem",marginRight:"0.8rem"}}>
                    <h4>EPISODES</h4>

                    <div className="episodeCard row">
                            <div className="col-xs-3">
                                <i className="fas fa-play-circle" style={{fontSize:"55px",color:"black",padding:"10px"}}></i>
                            </div>
                            <div className="col-xs-6" style={{color:"black"}}>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <h4>Episode 148</h4>
                                    </div>
                                    <div className="col-xs-12">
                                        <small> added 2 days ago</small>
                                    </div>
                                    <div className="col-xs-12">
                                        <h6>1:40:00</h6>
                                    </div>
                                </div>
                            </div>
                    </div>

                    
                </div>   
                <div>
                    
                </div>       
                </div>
                
                </div>
                
            </div>
            </>
        )
    }
}


export default  PodcastDetail;