import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post.model';
import * as firebase from 'firebase';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postSubject = new Subject<any[]>();



  posts = [
    {
      title: 'Mon premier post',
      content: 'Les PostListItemComponent auront des boutons qui permettent d\'augmenter et de diminuer le nombre de loveIts — cette modification aura uniquement un effet sur le component, et n\'a pas besoin d\'être remontée au component parent',
      loveIts: 0,
      updateDate: moment().format('08 01 2019 07:24:00')
    },
    {
      title: 'Mon deuxième post',
      content: 'Apprenons dans cette formation comment rapidement mettre en valeur du texte dans Bootstrap 3 avec des balises HTML et des classes CSS. Comme dans tout projet web, vous pouvez définir vos titres sous 6 niveaux de h1 à h6 : h1. Bootstrap heading h2. Bootstrap heading h3. Bootstrap heading h4. Bootstrap heading h5. Bootstrap heading ',
      loveIts: -1,
      updateDate: moment().format('05 01 2019 10:24:00')
    },
    {
      title: 'Mon troisième post',
      content: 'La déclaration de type ici (les deux-points suivis du type  string  n\'est pas obligatoire, car TypeScript déduit automatiquement le type d\'une variable lorsque vous l\'instanciez avec une valeur. J\'ai simplement inclus la déclaration de type pour montrer la syntaxe TypeScript (vous en aurez besoin dans des chapitres ultérieurs).',
      loveIts: 1,
      updateDate: moment().format('08 01 2019 17:24:00')
    }
  ];

  constructor() {
    this.getPosts();
  }

  emitPostSubject() {
    this.postSubject.next(this.posts.slice());
  }


  createNewPost(post: Post) {
    this.posts.push(post); //ajouter un nouvel objet user à l'array users
    this.savePosts();
    this.emitPostSubject();  //mis à jour des données de l'objet posts de type Post[]
  }

  removePost(index: number) {
   
    this.posts.splice(index, 1);
    this.savePosts();
    this.emitPostSubject();
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on(
        'value', (data) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPostSubject();
        }
      );
  }

  /*
  updatePost(index: number) {

    this.posts[index].loveIts
    const post = this.posts.find(
      (PostEl) => {
        if (PostEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(index, 1, post);
    this.savePosts();
    this.emitPostSubject();
  }
  */

}
