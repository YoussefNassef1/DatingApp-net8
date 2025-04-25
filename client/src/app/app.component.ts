import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import {  } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  http = inject(HttpClient)
  title = 'client';
  users:any;

  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/users').subscribe({
      next: responese => this.users = responese,
      error: err => console.log(err),
      complete: () =>  console.log('Requset has completed')
    });
  }
}
