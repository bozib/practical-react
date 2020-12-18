import React from 'react'
import ReactPlayer from 'react-player'

function VideoPlayer() {
    return (
        <div>
           <ReactPlayer 
           width='480px' height='240px'
           controls
            url= 'https://www.youtube.com/watch?v=7sDY4m8KNLc&list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM&index=12'/> 
           <div>
               <ReactPlayer
            controls 
            url= 'https://www.youtube.com/watch?v=7sDY4m8KNLc&list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM&index=12'/> 
        </div>
        </div>
        
    )
}

export default VideoPlayer
