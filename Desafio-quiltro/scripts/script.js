const Materials = require('Materials');
const Scene = require('Scene');
const NativeUI = require('NativeUI');
const Textures = require('Textures');

const plane = Scene.root.find('basepicture');
const index = 0;
const configuration = {
  selectedIndex: index,
  items: [
    
{image_texture: Textures.get('btn-0-base')},
{image_texture: Textures.get('btn-1-pantera')},
{image_texture: Textures.get('btn-2-gris')},		
{image_texture: Textures.get('btn-3-coqui')},
{image_texture: Textures.get('btn-4-kafka')},

    
  ],
  mats: [
{material: Materials.get("BASE-img")},
{material: Materials.get("PANTERA")},
{material: Materials.get("GRIS")},
{material: Materials.get("COQUI")},
{material: Materials.get("KAFKA")},
   
  ]
};
const picker = NativeUI.picker;
picker.configure(configuration);
picker.visible = true;

picker.selectedIndex.monitor().subscribe(function(val) {
    plane.material = configuration.mats[val.newValue].material;
;
});
