import { Component, OnInit } from '@angular/core';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';
import { UpdateTaskPage } from '../update-task/update-task.page';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  todoService: any;
  async addNewItem() {
    const modal = await this.modalCtlr.create({
      component: AddNewTaskPage,
    })
    modal.onDidDismiss().then(newTask =>{
      this.getAllTask()
    })
    return await modal.present()
  }
  getAllTask() {
    this.todoList = this.todoService.getAllTasks()
    console.log(this.todoService.getAllTasks());
  }
delete(arg0: any) {
  this.todoService.deleteTask()
  this.getAllTask()
}
async update(selectedTask: any){
  const modal = await this.modalCtlr.create({
    component: UpdateTaskPage,
    componentProps: {task: selectedTask}
  })

  modal.onDidDismiss().then(()=>{
    this.getAllTask()
  })

  return await modal.present()
}
today: string | number | Date | undefined;
todoList: any;

constructor(public modalCtlr: ModalController, public TodoService:TodoService) {
  this.getAllTask()
}

  ngOnInit() {
  }

}
