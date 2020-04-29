import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { GotyFirestore } from 'src/app/interfaces/goty-firestore';
import { map } from 'rxjs/operators';
import { GraphicsData } from 'src/app/interfaces/graphics-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  graphicData: GraphicsData[];

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore.collection('goty').valueChanges()
      .pipe(
        map((resp: GotyFirestore[]) => {
          return resp.map(({name, votes}): GraphicsData => ({name, value: votes}));
        })
      )
      .subscribe(resp => this.graphicData = resp);
  }

}
