import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-professional',
  templateUrl: './select-professional.page.html',
  styleUrls: ['./select-professional.page.scss'],
})
export class SelectProfessionalPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() { 
    //TODO - Rota para listar todas as filas disponiveis do estabelecimento
    //TODO - Rota para pegar todos os funcionarios com base no id do funcionarioId de cada fila
    //TODO - Rota para pegar qtd de pessoas na fila
    //TODO - Rota para pegar o nome dos servicos com base no campo services de cada queue e pegar 
    // o tempo de cada servico para o calculo do tempo estimado de atendimento

    // TODO - Calculo do tempo estimado para o atendimento
    // Somar o tempo estimado de atendimento de cada pessoa na fila com base nos servicos

  }

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    spaceBetween: 1,
    slidesPerView: 1,
  };

  companies = [
    { img: 'assets/images/select-companie/geral.png', name: 'Geral' },
    { img: 'assets/images/select-companie/salao-unisexx.png', name: 'Salão Unisex' },
    { img: 'assets/images/select-companie/salao-masculino.png', name: 'Salão Masculino' },
    { img: 'assets/images/select-companie/salao-feminino.png', name: 'Salão Feminino' },
    { img: 'assets/images/select-companie/barbearia.png', name: 'Barbearia' },
    { img: 'assets/images/select-companie/corte-a-tesoura.png', name: 'Corte à Tesoura' },
  ];


  companyCards = [
    {
      name: 'Léo Silva (Neymar)',
      type: 'Máquina, teroura, química e etc',
      queue: 60,
      profileUrl: null,
      rating: 4.8,
      liked: false,
      reviews: 963,      
      peoplewaiting: 4
    },
    {
      name: 'Alisson (Pretão)',
      type: 'Máquina, teroura, química e etc',
      queue: 20,
      profileUrl: null,
      rating: 4.8,
      liked: true,
      reviews: 963,
      peoplewaiting: 2
    },
    {
      name: 'Alessandro Molon',
      type: 'Máquina e tesoura',
      queue: 15,
      profileUrl: null,
      rating: 4.8,
      liked: true,
      reviews: 963,      
      peoplewaiting: 2
    },
    {
      name: 'Rosangela Silva',
      type: 'Química',
      queue: 40,
      profileUrl: null,
      rating: 4.8,
      liked: false,
      reviews: 963,
      peoplewaiting: 10
    }
  ];

  toggleLike(index: number, event: Event) {
    event.preventDefault(); 
    event.stopPropagation(); 
    this.companyCards[index].liked = !this.companyCards[index].liked;
    console.log(`Card ${index} liked status: ${this.companyCards[index].liked}`);
  }  

  cardClicked(index: number, event: Event) {
    console.log(`Card ${index} clicado`); 
    this.router.navigate(['/select-services']);
  }
}
