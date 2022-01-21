import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'moneythor-widget',
  templateUrl: './moneythor-widget.component.html',
  styleUrls: ['./moneythor-widget.component.css'],
  inputs: ['tipKey'],
})
export class MoneythorWidgetComponent {
  tipKey: string | null = null;

  // Call Moneythor API here
  tipData =
    '<script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" crossorigin="anonymous"></script><style>#myText { color: blue; font-weight: bold; }</style><div id="myText">The Moneythor tip is here.</div><script>function defer(method) { if (window.jQuery) { method(); } else { setTimeout(function() { defer(method) }, 50); }} defer(function () { $("#myText").text("The dynamic output of the Moneythor tip is here!"); });</script>';

  @ViewChild('tipContainer') tipContainer: ElementRef;

  ngAfterViewInit() {
    // console.log('tipContainer: ' + this.tipContainer.nativeElement.innerText);

    let setInnerHTML = function (elm, html) {
      elm.innerHTML = html;
      Array.from(elm.querySelectorAll('script')).forEach((oldScript) => {
        const newScript = document.createElement('script');
        Array.from(oldScript['attributes']).forEach((attr) =>
          newScript.setAttribute(attr['name'], attr['value'])
        );
        newScript.appendChild(document.createTextNode(oldScript['innerHTML']));
        oldScript['parentNode'].replaceChild(newScript, oldScript);
      });
    };

    setInnerHTML(this.tipContainer.nativeElement, this.tipData);
  }
}
