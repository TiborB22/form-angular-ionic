import { Component } from '@angular/core';
import { ModalController }  from '@ionic/angular';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { FormControl } from '@angular/forms';
import { SM_Option } from '../SM_Option.class';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  options = [
    new SM_Option(1, 'Név1'),
    new SM_Option(2, 'Név2'),
    new SM_Option(3, 'Név3'),
  ];
  constructor(private modalCtrl: ModalController) {

  }
  selectedOption = new FormControl('');
  async showModal(){
    const modal = await this.modalCtrl.create({
      component: ModalContentComponent,
      componentProps: {
        data: this.selectedOption
      }
    })
    await modal.present();
  }

  ngOnInit() {
  }
}
