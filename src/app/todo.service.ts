import { Injectable } from '@angular/core';
import {Storage}from'@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private storage: Storage) {
    this.init()
   }

  addTask(key: string, value: {}){
    this.storage.set(key,value)
  }

  deleteTask(key: string){
    this.storage.remove(key)
  }

  updateTask(key: string, newValue: { itemName: any; itemDueDate: any; itemPriority: any; itemCategory: any; }){
    this.storage.set(key, newValue)
    this.getAllTasks()
  }

  getAllTasks(){
    let tasks: any = []
    this.storage.forEach((key, value, index) => {
    tasks.push({'key':value, 'value':key})
    });
    return tasks
  }

  async init(){
    await this.storage.create()
  }


}
