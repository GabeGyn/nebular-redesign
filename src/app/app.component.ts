import { Component, Inject, OnInit } from '@angular/core';
import { NbSidebarService, NbMenuService, NB_WINDOW, NbMenuItem } from '@nebular/theme';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    private sidebarService: NbSidebarService,
    private nbMenuService: NbMenuService,
    @Inject(NB_WINDOW) private window:any
  ) { }

  items: NbMenuItem[] = [
    { 
      title: 'Home',
      link: '/home',
      icon: 'home-outline',
      pathMatch: 'prefix'
    },
    {
      title: 'Cadastros',
      link: 'person-add-outline',
      icon: 'book-open-outline',
      children: [
        {
          title:'Categoria',
          link:'/categoria',
          pathMatch: 'prefix'
        },
        {
          title:'Cenarios Fiscais',
          link:'/cenario_fiscal',
          pathMatch: 'prefix'
        },
        {
          title:'Clientes',
          link:'/cliente',
          pathMatch: 'prefix',
        },
        {
          title:'Fornecedor',
          link:'/fornecedor/list',
          pathMatch: 'prefix'
        },
        {
          title:'Maquinas',
          link:'/maquinas/list',
          pathMatch: 'prefix'
        },
        {
          title: 'Produto',
          link: '/produto',
          pathMatch: 'prefix'
        },
        {
          title: 'Ponto de Venda',
          link: '/ponto_venda/list',
          pathMatch: 'prefix'
        },
        {
          title:'Unidade Medida',
          link:'/unidade_medida/list',
          pathMatch: 'prefix'
        },
        {
          title:'Usuarios',
          link:'/usuarios/list',
          pathMatch: 'prefix'
        },
        /*{
          title: 'Familia de Produtos',
          link: '/familia_produto/list',
          pathMatch: 'prefix'
        },        
        {
          title: 'Pessoa',
          link: '/pessoa/list',
          pathMatch: 'prefix'
        },*/
      ],
    },
    {
      title: 'CRM',
      link:'globe-outline',
      icon: 'people-outline',
      children: [
        {
          title:'Usuarios App',
          link:'/usuarios_app',
          pathMatch: 'prefix'
        },
        {
          title:'Controle Acesso',
          link:'/controle_acesso',
          pathMatch: 'prefix',
        },
      ]
    },
    {
      title: 'Estoque',
      link:'globe-outline',
      icon: 'cube-outline',
      children: [
        {
          title:'Centros de Distribuição',
          link:'/centro_distribuicao/list',
          pathMatch: 'prefix'
        },
        {
          title: 'Locais de Estoque',
          link: '/local_estoque/list',
          pathMatch: 'prefix'
        },
        {
          title: 'Movimentação',
          link: '/estoque_movimento/list',
          pathMatch: 'prefix'
        },
        {
          title: 'Nota Fiscal',
          link: '/estoque_doc/list',
          pathMatch: 'prefix'
        },
        {
          title: 'Transações',
          link: '/transacao/list',
          pathMatch: 'prefix'
        },         
        {
          title:'Produto-Fornecedor',
          link:'/produto-fornecedor/list',
          pathMatch: 'prefix'
        },
        {
          title:'Planograma',
          link:'/planograma',
          pathMatch: 'prefix'
        },  
      ],
    },
    {
      title: 'Pedidos de Compra',
      link:'globe-outline',
      icon: 'shopping-bag-outline',
      children: [
        {
          title:'Orçamentos',
          link:'/orcamento',
          pathMatch: 'prefix'
        },
        {
          title:'Pedidos',
          link:'/pedido/list',
          pathMatch: 'prefix'
        }
      ],
    },
    {
      title: 'Desvio',
      link:'globe-outline',
      icon: 'shield-outline',
      children: [
        {
          title:'Transações Suspeitas',
          link:'/transacao_suspeita',
          pathMatch: 'prefix'
        },
        {
          title:'Acessos Suspeitos',
          link:'/acesso_suspeito',
          pathMatch: 'prefix'
        },
        {
          title:'Alertas de Video',
          link:'/alerta_video',
          pathMatch: 'prefix'
        }
      ]
    },
    {
      title: 'Rupturas',
      link:'globe-outline',
      icon: 'shield-outline',
      children: [
        {
          title:'Produtos',
          link:'/ruptura/produto',
          pathMatch: 'prefix'
        },
        {
          title:'Pontos de Venda',
          link:'/ruptura/ponto_venda',
          pathMatch: 'prefix'
        },
        {
          title:'Ocorrências',
          link:'/ruptura/ocorrencia',
          pathMatch: 'prefix'
        }
      ]
    },
    /*{
      title: 'Perdas',
      link:'globe-outline',
      icon: 'shield-outline',
      children: [
        
      ]
    },*/
    {
      title: 'Monitoramento',
      link:'globe-outline',
      icon: 'monitor-outline',
      children: [
        {
          title:'Confirmados',
          link:'/desvio_confirmado',
          pathMatch: 'prefix'
        },
        {
          title:'Perfil',
          link:'/desvio_confirmado_perfil',
          pathMatch: 'prefix'
        },
        {
          title:'Status',
          link:'/desvio_confirmado_status',
          pathMatch: 'prefix'
        },
        {
          title:'Situação',
          link:'/desvio_confirmado_situacao',
          pathMatch: 'prefix'
        },
        {
          title:'Faixa etária',
          link:'/desvio_confirmado_faixa_etaria',
          pathMatch: 'prefix'
        }
      ]
    },
  ];

  title = 'nebular-redesign';

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }

  menu = [
    { title: 'Profile' },
    { title: 'Logout' },
  ];

  ngOnInit() {
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe((title: any) => this.window.alert(`${title} was clicked!`));
  }
}
