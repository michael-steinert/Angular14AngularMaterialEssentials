import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css'],
})
export class AdminBlogComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'title',
    'image',
    'publishedAt',
    'actions',
  ];
  dataSource = POST_DATA;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  onEdit() {}

  onDelete(id: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent);
    // Subscribe to Closing Dialog
    dialogRef.afterClosed().subscribe((result) => {
      if (Boolean(result)) {
        POST_DATA.filter((data) => data.id !== id);
      }
    });
  }
}

export interface Post {
  id: number;
  title: string;
  body: string;
  image: string;
  publishedAt: Date;
}

const POST_DATA: Post[] = [
  {
    id: 1,
    title: 'Blog',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus unde nam ut doloremque laboriosam optio neque dicta itaque architecto dolorem porro ad, beatae fugit cumque nulla quisquam omnis placeat. Ullam.',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    publishedAt: new Date(),
  },
  {
    id: 2,
    title: 'Blog',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus unde nam ut doloremque laboriosam optio neque dicta itaque architecto dolorem porro ad, beatae fugit cumque nulla quisquam omnis placeat. Ullam.',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    publishedAt: new Date(),
  },
  {
    id: 3,
    title: 'Blog',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus unde nam ut doloremque laboriosam optio neque dicta itaque architecto dolorem porro ad, beatae fugit cumque nulla quisquam omnis placeat. Ullam.',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    publishedAt: new Date(),
  },
  {
    id: 4,
    title: 'Blog',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus unde nam ut doloremque laboriosam optio neque dicta itaque architecto dolorem porro ad, beatae fugit cumque nulla quisquam omnis placeat. Ullam.',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    publishedAt: new Date(),
  },
  {
    id: 5,
    title: 'Blog',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus unde nam ut doloremque laboriosam optio neque dicta itaque architecto dolorem porro ad, beatae fugit cumque nulla quisquam omnis placeat. Ullam.',
    image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    publishedAt: new Date(),
  },
];
