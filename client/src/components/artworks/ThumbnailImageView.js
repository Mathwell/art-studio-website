import React, {PureComponent} from 'react'
import {Image} from 'react-bootstrap'


class ThumbnailImageView extends PureComponent{
    render(){
        const link="/view?id="+this.props.img.id
return(
    <div className="large-img" >
        <Image  src={this.props.img.zoom_link} href={link} responsive onClick={this.props.click}/>
    </div>
)            
    }
}

export default ThumbnailImageView