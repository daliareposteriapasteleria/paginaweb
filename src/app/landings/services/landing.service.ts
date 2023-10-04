import { Injectable } from '@angular/core';
import { Cake } from '../interfaces/cake.interface';


@Injectable({ providedIn: 'root' })
export class landingService {

    public tortas: Cake =
        {
            title: 'TORTAS',
            description: '¿Imaginas una torta tan única como tú? En nuestra reposteria, transformamos tus sueños en delicias hechas a medida. Desde bodas hasta cumpleaños, cada torta es una obra de arte personalizada, diseñada exclusivamente para ti. ¡Déjanos transformar tu ocasión especial en un momento inolvidable! Haz clic en "Personalizar Ahora" y comienza el viaje hacia la torta perfecta para ti.',
            urls: [
                '../../../../assets/imgs/cakes/flowers-cake.png',
                '../../../../assets/imgs/cakes/paw-patrol-cake.png',
                '../../../../assets/imgs/cakes/purple-cake.png',
            ]
        }

    constructor() { }


    toggleMenu(): void {

        const element = document.getElementById("hamburger-menu");

        element!.classList.toggle("show");


    }
}