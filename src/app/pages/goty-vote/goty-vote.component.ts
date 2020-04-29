import { Component, OnInit } from '@angular/core';
import { FirebaseGotyService } from 'src/app/services/firebase-goty.service';
import { GotyFirestore } from 'src/app/interfaces/goty-firestore';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-goty-vote',
  templateUrl: './goty-vote.component.html',
  styleUrls: ['./goty-vote.component.css']
})
export class GotyVoteComponent implements OnInit {

  listOfGoty: GotyFirestore[] = [];

  constructor(private gotyService: FirebaseGotyService ) {}

  ngOnInit(): void {
    this.gotyService.getListOfGotys().subscribe( resp => this.listOfGoty = resp);
  }

  voteForGoty(goty: GotyFirestore) {
    this.gotyService.voteForGoty(goty.id)
      .subscribe( resp => {
        if (resp.ok) {
          Swal.fire({
            imageUrl: `${goty.url_image}`,
            position: 'top-end',
            icon: 'success',
            title: `Thanks for your vote to ${goty.name}`,
            showConfirmButton: false,
            timer: 3000
          });
        } else {
          Swal.fire({
            imageUrl: `${goty.url_image}`,
            position: 'top-end',
            icon: 'error',
            title: `Ups your vote for ${goty.name} has fail`,
            showConfirmButton: false,
            timer: 3000
        });
      }
    });
  }

}
