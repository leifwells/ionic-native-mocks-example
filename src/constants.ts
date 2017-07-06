var getIsCordovaPlatform = function() {
  if (!<any>window['cordova']) {
    console.log('cordova');
    return true;
  } else {
    return false;
  }
};

export const IS_CORDOVA_PLATFORM: boolean = (getIsCordovaPlatform());
