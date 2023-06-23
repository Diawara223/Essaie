import { Component } from '@angular/core';
import  {PhotosService,Item} from'../services/photos.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {
    // TODO document why this constructor is empty


  }
  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    // autoplay:true,
  }
  items: Item[] = [];
  constructor(
,
  ){
  this.items = this.photoService.getItems();
  }

}

//Le dossier node module permet de garder les fichiers plugins installés dans ton App
//L'erreur signalée dans la console sont des erreurs mini iiées au images svg manquantes dans ton projet
//Dejà que le design est fini dans l'ensemble, tu peux commencer avec les fonctions
//Egalement pour tes images et données depuis local storage ou firebase
//Et c'est mieux d'ajouter les données en les saisissant
//Pour les images et je vais t'assister
//Des Questions ?

