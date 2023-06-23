import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.page.html',
  styleUrls: ['./update-task.page.scss'],
})
export class UpdateTaskPage implements OnInit {
itemDueDate: any;
itemPriority: any;
itemName: any;
categories: any;
  newTaskObj: { itemName: any; itemDueDate: any; itemPriority: any; itemCategory: any; } | undefined;
  task: any;
selectCategory(index: number) {
  this.categorySelectedCategory = this.categories[index]
  console.log(this.categorySelectedCategory);
}
categorySelectedCategory: any;


  constructor(public modalCtrl: ModalController, public todoService: TodoService) { }
  ngOnInit(): void {
    this.categories.push('work')
    this.categories.push('personal')

    this.itemName = this.task.value.itemName
    this.itemDueDate = this.task.value.itemDueDate
    this.itemPriority = this.task.value.itemPriority
    this.categorySelectedCategory = this.task.value.itemCategory
  }





  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  async update() {
    this.newTaskObj = {
      itemName: this.itemName,
      itemDueDate: this.itemDueDate,
      itemPriority: this.itemPriority,
      itemCategory: this.categorySelectedCategory
    };
    let uid = this.task.key;
    await this.todoService.updateTask(uid, this.newTaskObj);
    await this.dismiss();
  }
}
