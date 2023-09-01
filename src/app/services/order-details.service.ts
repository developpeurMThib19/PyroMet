import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails

  foodDetails = [
    {
      id:1,
      foodTile:"Bolas de feux",
      foodName:"Étincelle Flamboyante",
      foodDetails:"Artiste du feu et des étoiles. Mes bolas de feu créent une danse envoûtante, mélangeant flamme, musique et mouvement. Chaque performance est une peinture de lumière dans l'obscurité, une expérience enflammée qui captivera vos invités. Que ce soit pour une célébration intime ou une fête spectaculaire, l'Étincelle Flamboyante transforme chaque événement en un souvenir lumineux. Réservez maintenant et embrasez votre soirée avec la magie du feu ! Contactez-moi pour créer une ambiance ardente et inoubliable.",
      foodPrice:200,
      foodImg:('../../../assets/img/feu1.jpg'),

    },
    {
      id:2,
      foodTile:"Avaleur de feu",
      foodName:"Ignis Fervent",
      foodDetails:"Je maîtrise le feu avec audace et passion. Mon art consiste à avaler les flammes et à fusionner avec leur énergie, créant un spectacle qui enflamme vos sens et défie les limites de l'impossible. Chaque performance est une démonstration de courage et de fascination, une danse entre la chaleur et la témérité. Que ce soit pour une soirée intime ou un événement spectaculaire, laissez-vous emporter par Ignis Fervent et vivez une expérience incandescente. Contactez-moi pour un spectacle brûlant et inoubliable !",
      foodPrice:369,
      foodImg:('../../../assets/img/feu2.jpg'),
    },
    {
      id:3,
      foodTile:"Cracheur de feu",
      foodName:"Inferno",
      foodDetails:"Je dompte les flammes avec audace et maîtrise. Mon art, c'est de cracher le feu et de créer une symphonie ardente qui éveille vos émotions et embrase votre imagination. Chaque performance est un spectacle captivant et audacieux, une rencontre explosive entre l'art et le feu. Que ce soit pour une soirée intime ou un événement sensationnel, laissez-vous emporter par Inferno et vivez une expérience incendiaire. Contactez-moi pour un spectacle brûlant et mémorable !",
      foodPrice:149,
      foodImg:('../../../assets/img/feu3.jpg'),
    },
    {
      id:4,
      foodTile:"Bâton Feu",
      foodName:"Pyrochore",
      foodDetails:"Je manie le bâton enflammé avec grâce et puissance. Mon art consiste à créer une danse envoûtante de flammes qui enflamme vos sens et transforme chaque mouvement en une œuvre d'art en feu. Chaque performance est une fusion entre la grâce et la vigueur, une chorégraphie hypnotique de lumière et de chaleur. Que ce soit pour une occasion intime ou un événement enflammé, laissez-vous envoûter par la Pyrochore et vivez une expérience visuelle et sensorielle inoubliable. Contactez-moi pour un spectacle enflammé et captivant !",
      foodPrice:140,
      foodImg:('../../../assets/img/feu4.jpg'),
    },
    {
      id:5,
      foodTile:"Eventails de Feu",
      foodName:"Éclat Ardant",
      foodDetails:"Je manie les éventails de feu avec grâce et passion. Mon art consiste à créer une danse envoûtante de flammes qui illumine l'obscurité et réchauffe les cœurs, transformant chaque mouvement en une peinture de lumière enflammée. Chaque performance est une symphonie visuelle et sensorielle, une chorégraphie enflammée qui éveille les émotions et captive les regards. Que ce soit pour une occasion intime ou un événement spectaculaire, laissez-vous captiver par l'Éclat Ardant et vivez une expérience artistique et chaleureuse. Contactez-moi pour un spectacle enflammé et mémorable !",
      foodPrice:105,
      foodImg:('../../../assets/img/feu5.jpg'),
    },
    {
      id:6,
      foodTile:"Équipe de Cracheurs de Feu",
      foodName:"Flamme Fusion",
      foodDetails:"Nous sommes une équipe de cracheurs de feu passionnés. Notre art consiste à dompter les flammes avec audace et maîtrise, créant un spectacle collectif qui enflamme les sens et défie les limites de l'impossible. Chaque performance est une démonstration de courage et de synchronisation, une symphonie enflammée qui fusionne art et danger. Que ce soit pour une soirée intime ou un événement époustouflant, laissez-vous emporter par Flamme Fusion et vivez une expérience incandescente. Contactez-nous pour un spectacle collectif brûlant et inoubliable !",
      foodPrice:219,
      foodImg:('../../../assets/img/feu6.jpg'),
    }
  ]




}
