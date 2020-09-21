import './polyfill/object-assign';
import globalAPI from './global-api';
import Scene from './core/scene';
import Preview from './core/preview';
import View from './core/view';
import { CubeImage, CubeStripImage, SphereImage, CylinderImage, FishEyeImage } from './core/image';
import Layer from './core/layer';
import Hotspot from './core/hotspot';


global.krShell = {

    krpano: null,
    resolve: null,

    init: function (krpanoInterfaceObj, resolve) {

        this.krpano = krpanoInterfaceObj;
        this.resolve = resolve;

        globalAPI(krShell);

        krShell.Scene = Scene;
        krShell.Preview = Preview;
        krShell.View = View;
        krShell.CubeImage = CubeImage;
        krShell.CubeStripImage = CubeStripImage;
        krShell.SphereImage = SphereImage;
        krShell.CylinderImage = CylinderImage;
        krShell.FishEyeImage = FishEyeImage;
        krShell.Layer = Layer;
        krShell.Hotspot = Hotspot;
    },

    destroy: function () {
        console.log('krShell.destroy()');
    }
};

export default krShell;