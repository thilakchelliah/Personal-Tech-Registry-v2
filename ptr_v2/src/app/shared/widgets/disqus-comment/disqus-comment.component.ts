import { Component, Input, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { environment } from "../../../../environments/environment"

@Component({
  selector: 'app-disqus-comment',
  templateUrl: './disqus-comment.component.html',
  styleUrls: ['./disqus-comment.component.css']
})
export class DisqusCommentComponent implements OnInit {

  dom: ElementRef;
  @Input() public identifier: string;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.dom = el.nativeElement;
  }

  ngOnInit() {
    if ((<any>window).DISQUS === undefined) {
      this.addScriptTag();
    }
    else {
      this.reset();
    }
  }
  /**
     * Reset Disqus with new information.
     */
  reset() {
    (<any>window).DISQUS.reset({
      reload: true,
      config: this.getConfig()
    });
  }

  /**
   * Add the Disqus script to the document.
   */
  addScriptTag() {
    (<any>window).disqus_config = this.getConfig();
    let container = document.getElementById("disqus_thread");
    let script = document.createElement('script');
    script.src = `${environment.disqusURL}/embed.js`;
    script.type = 'text/javascript';
    script.async = true;
    script.charset = 'utf-8';
    script.setAttribute('data-timestamp', new Date().getTime().toString());
    container.appendChild(script);
  }

  /**
   * Get Disqus config
   */
  getConfig() {
    let _self = this;
    return function () {
      this.page.url = window.location.href;
      this.page.identifier = _self.identifier;
      this.language = 'en';
    };
  }
}
