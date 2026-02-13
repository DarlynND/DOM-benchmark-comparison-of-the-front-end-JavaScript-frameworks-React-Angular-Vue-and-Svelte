import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>Angular To-Do</h2>
    <button (click)="generate(1000)">Generate 1000</button>
    <button (click)="update()">Update 50</button>
    <button (click)="remove()">Delete 50</button>

    <ul>
      <li *ngFor="let task of tasks">
        {{task.name}} – {{task.priority}}
      </li>
    </ul>
  `
})
export class AppComponent {
  tasks: any[] = [];

  generate(count: number) {
    const start = performance.now();
    this.tasks = Array.from({ length: count }, (_, i) => ({
      id: i,
      name: `Task ${i}`,
      priority: 'Medium'
    }));
    console.log('Angular render:', performance.now() - start);
  }

  update() {
    const start = performance.now();
    this.tasks.slice(0, 50).forEach(t => t.name += ' updated');
    console.log('Angular update:', performance.now() - start);
  }

  remove() {
    const start = performance.now();
    this.tasks.splice(0, 50);
    console.log('Angular delete:', performance.now() - start);
  }
}
