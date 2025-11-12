interface Developer<T,M,X =null> {
    name : string,
    age : number
    MobileDevice : M
    smartWatch : T;
    bike?: X 
}
interface SmartWatch {
    bluetooth : boolean,
    timer: boolean
}
interface AppleWatch {
camera : boolean,
    trackingSupport : boolean,
    callingFeature : string
}

interface MobileDevice {
    brand : string,
    model:string,
    cameraFeature : boolean
}

const poorDeveloper : Developer<SmartWatch,MobileDevice>  = {
    name : 'Mr.poor',
    age: 23,
    MobileDevice : {
        brand : 'Xioami',
        model : 'Redmi12',
        cameraFeature : true
    }, 
    smartWatch : {
        bluetooth: true,
        timer: true
    },
    
}

interface PoorDevice {
    name : string,
    price : string,
    cameraFeature : boolean
}

const richDeveloper : Developer<AppleWatch,PoorDevice> = {
    name : 'Mr.rich',
    age: 23,
    MobileDevice : {
        name: 'Chine',
        price: "1200",
        cameraFeature: false
    }, 
    smartWatch : {
      camera: true,
      trackingSupport: true,
      callingFeature: 'yes'
    }
}