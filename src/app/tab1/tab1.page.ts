import { Component } from '@angular/core';

declare var ble;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  scan() {
    ble.scan([], 5, function(device) {
      console.log(JSON.stringify(device));
    }, function(status) {
      console.log('Scan failed ' +status);
    });

    setTimeout(ble.stopScan,
      5000,
      function() { console.log("Scan complete"); },
      function() { console.log("stopScan failed"); }
    );
  }
}
