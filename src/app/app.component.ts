import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Posts';

  posts = [
    {
      title: 'Mon premier post',
      content: 'Les PostListItemComponent auront des boutons qui permettent d\'augmenter et de diminuer le nombre de loveIts — cette modification aura uniquement un effet sur le component, et n\'a pas besoin d\'être remontée au component parent',
      loveIts: 0
    },
    {
      title: 'Mon deuxième post',
      content: 'Apprenons dans cette formation comment rapidement mettre en valeur du texte dans Bootstrap 3 avec des balises HTML et des classes CSS. Comme dans tout projet web, vous pouvez définir vos titres sous 6 niveaux de h1 à h6 : h1. Bootstrap heading h2. Bootstrap heading h3. Bootstrap heading h4. Bootstrap heading h5. Bootstrap heading ',
    loveIts:-1
    },
    {
      title: 'Mon troisième post',
      content: 'La déclaration de type ici (les deux-points suivis du type  string  n\'est pas obligatoire, car TypeScript déduit automatiquement le type d\'une variable lorsque vous l\'instanciez avec une valeur. J\'ai simplement inclus la déclaration de type pour montrer la syntaxe TypeScript (vous en aurez besoin dans des chapitres ultérieurs).',
loveIts:1
    }
  ];
}
