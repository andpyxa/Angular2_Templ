import {Component} from 'angular2/core';
import {Config} from './config.service';

import {Video} from './video';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {

    mymessage = Config.MyName;
    videos:Array<Video>;

    constructor(){
        this.videos = [
            new Video(1, "Charge", "gM2rp5bjxk8", "Sway ft. Mr Hudson"),
            new Video(2, "Your Way", "U0azxS5FTpY", "Netsky")
        ]
    }

}

