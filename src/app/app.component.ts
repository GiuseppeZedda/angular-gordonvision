import { Component, Inject, PLATFORM_ID, APP_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'gv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GordonVision';

  // Code aus blog.lysender.com
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  )
  {}
  onActivate(event: any){
    if(isPlatformBrowser(this.platformId)){
      let scrollToTop = window.setInterval(
        ()=> {
          let pos = window.pageYOffset;
          if(pos >0){
            window.scrollTo(0, 0);
          }
          else{
            window.clearInterval(scrollToTop);
          }
        }, 16 )
    }
  }

}
