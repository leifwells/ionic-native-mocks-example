import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    // private splashScreen: SplashScreen
    @Inject('SplashScreen') private splashScreen
  ) {}

  showSplash() {
    this.splashScreen.show();

    setTimeout(() => {
      this.splashScreen.hide();
    }, 5000);
  }

}
