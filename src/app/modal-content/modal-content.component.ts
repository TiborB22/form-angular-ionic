import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SM_Option } from '../SM_Option.class';




@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss'],
})

export class ModalContentComponent implements OnInit {
  @Input() data: SM_Option;
  constructor(private modalCtrl: ModalController){ 

  }

  async close(){
    await this.modalCtrl.dismiss();
    
  }

  ngOnInit() {
    console.log(this.data);
  }

}
