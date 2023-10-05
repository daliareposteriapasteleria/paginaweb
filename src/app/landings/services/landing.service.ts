import { Injectable } from '@angular/core';
import { Cake } from '../interfaces/cake.interface';


@Injectable({ providedIn: 'root' })
export class landingService {

    public tortas: Cake =
        {
            title: 'TORTAS',
            description: '¿Imaginas una torta tan única como tú? En nuestra reposteria, transformamos tus sueños en delicias hechas a medida. Desde bodas hasta cumpleaños, cada torta es una obra de arte personalizada, diseñada exclusivamente para ti. ¡Déjanos transformar tu ocasión especial en un momento inolvidable! Haz clic en "Personalizar Ahora" y comienza el viaje hacia la torta perfecta para ti.',
            urls: [
                './assets/imgs/cakes/bart-cake.png',
                './assets/imgs/cakes/comunion-cake.png',
                './assets/imgs/cakes/minimouse-cake.png',
                './assets/imgs/cakes/minicake-cake.png',
                './assets/imgs/cakes/paw-patrol-cake.png',
             
            ],
            txtBtn: 'Personalizar ahora',
            class:'item-cake'
        }

    public cupcakes: Cake =
        {
            title: 'CUPCAKES',
            description: 'Bienvenido a nuestro rincón de cupcakes, donde la magia se mezcla con el sabor para crear experiencias inolvidables. En nuestra reposteria, no simplemente horneamos cupcakes, creamos pequeñas obras maestras de felicidad. ¿Por qué elegir nuestros cupcakes? Porque no son solo postres, son momentos de pura alegría y satisfacción.',
            urls: [
                './assets/imgs/cupcakes/flower-cupcakes.png',
                './assets/imgs/cupcakes/purple-cupcakes.png',
                './assets/imgs/cupcakes/chips-cupcakes.png',
            ],
            txtBtn: 'Comprar ahora',
            class:'item-cupcake'
        }
    constructor() { }


    toggleMenu(): void {

        const element = document.getElementById("hamburger-menu");

        element!.classList.toggle("show");


    }
}